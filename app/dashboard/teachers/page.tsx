import CreateButton from "@/components/actions/CreateButton";
import { prisma } from "@/utils/prisma";
import React from "react";
import TeacherTable from "./TeacherTable";

export default async function TeachersPage() {
  const teachers = await prisma.teacher.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Teachers</h1>
        <CreateButton name="Add Teacher" link="/dashboard/teachers/create" />
      </div>
      {teachers.length > 0 && (
        <div className=" mt-5">
          <TeacherTable teachers={teachers} />
        </div>
      )}
    </main>
  );
}
