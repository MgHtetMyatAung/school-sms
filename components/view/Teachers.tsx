import { prisma } from "@/utils/prisma";
import Image from "next/image";
import React from "react";
import CarouselSlide from "./Carousel";

export default async function Teachers() {
  const teachers = await prisma.teacher.findMany();
  return (
    <div>
      <h1 className=" text-lg md:text-2xl my-5 font-medium">Our Teachers</h1>
      <div className=" py-10">
        <CarouselSlide teachers={teachers} />
      </div>
    </div>
  );
}
