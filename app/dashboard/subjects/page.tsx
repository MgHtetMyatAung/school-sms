import CreateButton from "@/components/actions/CreateButton";
import React from "react";
import SubjectTable from "./SubjectTable";
import { prisma } from "@/utils/prisma";

export default async function SubjectsPage() {
  const subjects = await prisma.subject.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Subjects</h1>
        <CreateButton name="Add Subject" link="/dashboard/subjects/create" />
      </div>

      {subjects.length > 0 && (
        <div className=" mt-5 h-[80vh] overflow-y-auto">
          <SubjectTable subjects={subjects} />
        </div>
      )}
    </main>
  );
}
