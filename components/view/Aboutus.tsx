import { prisma } from "@/utils/prisma";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default async function Aboutus() {
  const extras = await prisma.extras.findMany();
  const aboutus = extras.find((extra) => extra.slug === "about_us");
  return (
    <div className=" py-10">
      <div className=" grid lg:grid-cols-5 gap-5 lg:gap-7">
        <div className=" relative w-full h-[200px] lg:h-full grid-cols-1 lg:col-span-2 rounded-md overflow-hidden">
          <Image
            src={aboutus?.image as string}
            alt="img"
            fill
            className=" object-cover"
          />
        </div>
        <div className=" lg:col-span-3">
          <h1 className=" mb-5 text-lg md:text-2xl font-medium">
            {aboutus?.title}
          </h1>
          <p className=" text-gray-500 mb-5">{aboutus?.description}</p>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
}
