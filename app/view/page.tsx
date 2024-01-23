import { Button } from "@/components/ui/button";
import Aboutus from "@/components/view/Aboutus";
import AnnounceMents from "@/components/view/AnnounceMents";
import Courses from "@/components/view/Courses";
import Resource from "@/components/view/Resource";
import React from "react";

export const revalidate = 60;

export default function page() {
  return (
    <main className="">
      <div className=" min-h-[60vh] grid place-items-center hero">
        <div className=" container mx-auto text-center">
          <h1 className=" text-2xl md:text-5xl ">
            Development Training School
          </h1>
          <p className=" md:w-[550px] mx-auto mt-5 text-gray-500 md:text-lg">
            {`Private schools (also known as 'independent schools'), are schools
          that are not dependent upon national or local government to finance
          their financial endowment.`}
          </p>
          <Button className="mt-10">Start Learning</Button>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className=" container mx-auto">
          <Resource />
        </div>
      </div>
      <div className="">
        <div className=" container mx-auto py-10">
          <Aboutus />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className=" container mx-auto py-10">
          <AnnounceMents />
        </div>
      </div>
      <div className="">
        <div className=" container mx-auto py-10">
          <Courses />
        </div>
      </div>
    </main>
  );
}
