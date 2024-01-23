import GoBackButton from "@/components/actions/GoBackButton";
import { formatDate } from "@/lib/helperfuns";
import { prisma } from "@/utils/prisma";
import Image from "next/image";
import React from "react";

export default async function CourseDetail({
  params,
}: {
  params: { id: string };
}) {
  const course = await prisma.course.findUnique({ where: { id: params.id } });
  return (
    <main className=" w-full min-h-[calc(100vh-130px)]">
      <div className=" container mx-auto py-10">
        <GoBackButton name="Back" link="/view" />
        <h1 className=" text-lg md:text-3xl font-medium my-5">
          {course?.title}
        </h1>
        <div className=" relative w-full h-[200px] md:h-[300px] lg:h-[400px] my-3">
          <Image
            src={course?.image as string}
            alt="course"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <p className=" mt-5">{course?.description}</p>
        <div className=" mt-5 space-y-2 border-t-2">
          <div className=" flex md:items-center flex-col md:flex-row mt-5">
            <p className=" w-[150px] font-medium">Batch</p>
            <p className=" font-semibold text-gray-700">- {course?.batch}</p>
          </div>
          {course?.id && <ClassType id={course?.classTypeId as string} />}
          <div className=" flex md:items-center flex-col md:flex-row">
            <p className=" w-[150px] font-medium">Request Students</p>
            <p className=" font-semibold text-gray-700">- {course?.members}</p>
          </div>
          <div className=" flex md:items-center flex-col md:flex-row">
            <p className=" w-[150px] font-medium">Duration</p>
            <p className=" font-semibold text-gray-700">- {course?.duration}</p>
          </div>
          <div className=" flex md:items-center flex-col md:flex-row">
            <p className=" w-[150px] font-medium">Start Date</p>
            <p className=" font-semibold text-gray-700">
              - {formatDate(String(course?.startDate))}
            </p>
          </div>
          <div className=" flex md:items-center flex-col md:flex-row">
            <p className=" w-[150px] font-medium">Price</p>
            <p className=" font-semibold text-blue-600">
              - {course?.price} MMK
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

async function ClassType({ id }: { id: string }) {
  const classType = await prisma.classType.findUnique({ where: { id } });
  return (
    <div className=" flex md:items-center flex-col md:flex-row">
      <p className=" w-[150px] font-medium">Class Type</p>
      <p className=" font-semibold text-gray-700">- {classType?.name}</p>
    </div>
  );
}
