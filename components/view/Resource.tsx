import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Resource() {
  const students = await prisma.student.count();
  const teachers = await prisma.teacher.count();
  const courses = await prisma.course.count();
  const subjects = await prisma.subject.count();
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-4 py-10 gap-5">
      <div className=" text-center bg-white rounded-md border shadow-sm py-5">
        <h1 className=" font-medium text-2xl md:text-4xl">{students} +</h1>
        <h2 className=" mt-2">Students</h2>
      </div>
      <div className=" text-center bg-white rounded-md border shadow-sm py-5">
        <h1 className=" font-medium text-2xl md:text-4xl">{teachers} +</h1>
        <h2 className=" mt-2">Teachers</h2>
      </div>
      <div className=" text-center bg-white rounded-md border shadow-sm py-5">
        <h1 className=" font-medium text-2xl md:text-4xl">{courses} +</h1>
        <h2 className=" mt-2">Courses</h2>
      </div>
      <div className=" text-center bg-white rounded-md border shadow-sm py-5">
        <h1 className=" font-medium text-2xl md:text-4xl">{subjects} +</h1>
        <h2 className=" mt-2">Subjects</h2>
      </div>
    </div>
  );
}
