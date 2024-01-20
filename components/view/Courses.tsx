import { cuttingString } from "@/lib/helperfuns";
import { prisma } from "@/utils/prisma";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default async function Courses() {
  const courses = await prisma.course.findMany();
  return (
    <div>
      <h1 className=" text-lg md:text-2xl mb-5 font-medium">Popular Courses</h1>
      <div className=" grid lg:grid-cols-4 gap-3">
        {courses.map((course) => (
          <div className=" p-3 border rounded shadow-sm" key={course.id}>
            <div className=" relative w-full h-[180px] rounded overflow-hidden">
              <Image
                src={course.image || "/next.svg"}
                alt="img"
                fill
                className=" object-cover"
              />
            </div>
            <div className=" mt-5 text-gray-700">
              <h2 className=" font-medium text-lg mb-3">{course.title}</h2>
              <p className=" text-gray-500 mb-3">
                {cuttingString(course.description, 60)}
              </p>
              <div className=" flex gap-3 items-center mb-2">
                <p>Price -</p>
                <p className=" font-medium text-blue-500">{course.price} MMK</p>
              </div>
              <Button>More Detail</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
