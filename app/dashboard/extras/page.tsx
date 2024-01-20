import CreateButton from "@/components/actions/CreateButton";
import React from "react";
import { prisma } from "@/utils/prisma";
import ExtrasTable from "./ExtraTable";

export default async function SubjectsPage() {
  const extras = await prisma.extras.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Extra Datas</h1>
        <CreateButton name="Add New" link="/dashboard/extras/create" />
      </div>

      {extras.length > 0 && (
        <div className=" mt-5 h-[80vh] overflow-y-auto">
          <ExtrasTable extras={extras} />
        </div>
      )}
    </main>
  );
}
