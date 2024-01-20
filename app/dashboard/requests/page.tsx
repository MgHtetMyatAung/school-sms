import CreateButton from "@/components/actions/CreateButton";
import { prisma } from "@/utils/prisma";
import React from "react";
import RequestTable from "./RequestTable";
import Popup from "@/components/layout/toast/Popup";

export default async function StudentsPage() {
  const requests = await prisma.formRequest.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Requests</h1>
        <CreateButton name="Add Student" link="/dashboard/students/create" />
      </div>

      {requests.length > 0 && (
        <div className=" mt-5">
          <RequestTable requests={requests} />
        </div>
      )}

      <Popup
        title="Successfully added to students list"
        description="You can delete this request"
      />
    </main>
  );
}
