import CreateButton from "@/components/actions/CreateButton";
import { prisma } from "@/utils/prisma";
import React from "react";
import StudentTable from "./StudentTable";

export default async function StudentsPage() {
  const students = await prisma.student.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Students</h1>
        <CreateButton name="Add Student" link="/dashboard/students/create" />
      </div>

      {students.length > 0 && (
        <div className=" mt-5">
          <StudentTable students={students} />
        </div>
      )}
    </main>
  );
}
