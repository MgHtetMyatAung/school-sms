import CreateButton from "@/components/actions/CreateButton";
import React from "react";
import { prisma } from "@/utils/prisma";
import CourseTable from "./CourseTable";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany();
  return (
    <main className=" bg-white rounded-md shadow p-3">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Courses</h1>
        <CreateButton name="Add Course" link="/dashboard/courses/create" />
      </div>

      {courses.length > 0 && (
        <div className=" mt-5">
          <CourseTable courses={courses} />
        </div>
      )}
    </main>
  );
}
