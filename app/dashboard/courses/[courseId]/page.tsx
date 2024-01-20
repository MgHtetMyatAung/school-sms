import GoBackButton from "@/components/actions/GoBackButton";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function page({
  params,
}: {
  params: { courseId: string };
}) {
  const course = await prisma.course.findUnique({
    where: { id: params.courseId },
  });

  return (
    <main className="bg-white rounded-md shadow p-5 min-h-[90vh]">
      <GoBackButton name="Courses" link="/dashboard/courses" />
      <div className=" mt-5 space-y-2 max-w-[500px]">
        <h1 className=" font-medium text-2xl">{course?.title}</h1>
        <p>{course?.description}</p>
        <hr className=" my-5" />
        <div className=" flex items-center mt-5">
          <p className=" w-[150px]">Batch</p>
          <p className=" font-medium text-gray-700">- {course?.batch}</p>
        </div>
        {course?.id && <ClassType id={course?.classTypeId as string} />}
        <div className=" flex items-center">
          <p className=" w-[150px]">Duration</p>
          <p className=" font-medium text-gray-700">- {course?.duration}</p>
        </div>
        <div className=" flex items-center">
          <p className=" w-[150px]">Price</p>
          <p className=" font-medium text-gray-700">- {course?.price} MMK</p>
        </div>
      </div>
    </main>
  );
}

async function ClassType({ id }: { id: string }) {
  const classType = await prisma.classType.findUnique({ where: { id } });
  return (
    <div className=" flex items-center">
      <p className=" w-[150px]">Class Type</p>
      <p className=" font-medium text-gray-700">- {classType?.name}</p>
    </div>
  );
}
