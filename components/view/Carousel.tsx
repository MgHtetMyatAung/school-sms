"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselSlide({ teachers }: { teachers: any }) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {teachers.map(
            (teacher: {
              id: string;
              name: string;
              image: string;
              position: string;
            }) => (
              <CarouselItem
                className=" md:basis-1/2 lg:basis-1/4"
                key={teacher.id}
              >
                <div className="">
                  <div className=" relative w-[150px] md:w-[180px] h-[150px] md:h-[180px] mx-auto ">
                    <Image
                      src={teacher.image}
                      alt="img"
                      fill
                      className=" object-cover rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <h1 className=" text-lg font-medium text-center mt-3">
                    {teacher.name}
                  </h1>
                  <h1 className=" text-center mt-1">{teacher.position}</h1>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className=" left-2" />
        <CarouselNext className=" right-2" />
      </Carousel>
    </div>
  );
}
