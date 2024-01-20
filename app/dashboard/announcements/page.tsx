import CreateButton from "@/components/actions/CreateButton";
import { prisma } from "@/utils/prisma";
import React from "react";
import AnnouncementTable from "./AnnouncementTable";

export default async function AnnouncementPage() {
  const announcements = await prisma.announcement.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Announcements</h1>
        <CreateButton name="Add New" link="/dashboard/announcements/create" />
      </div>
      {announcements.length > 0 && (
        <div className=" mt-5">
          <AnnouncementTable announcements={announcements} />
        </div>
      )}
    </main>
  );
}
