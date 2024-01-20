import CreateButton from "@/components/actions/CreateButton";
import React from "react";
import { prisma } from "@/utils/prisma";
import CourseTypeTable from "./CourseTypeTable";

export default async function SubjectsPage() {
  const classTypes = await prisma.classType.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Course Types</h1>
        <CreateButton
          name="Add Course Type"
          link="/dashboard/course-types/create"
        />
      </div>

      {classTypes.length > 0 && (
        <div className=" mt-5">
          <CourseTypeTable courseTypes={classTypes} />
        </div>
      )}
    </main>
  );
}
