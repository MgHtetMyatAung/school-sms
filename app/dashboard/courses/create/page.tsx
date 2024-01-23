import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { createCourse } from "@/server/course/actions";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function CreateCoursePage() {
  const types = await prisma.classType.findMany();
  const subjects = await prisma.subject.findMany();

  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Courses" link="/dashboard/courses" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">
          Add New Course
        </h2>
        <form action={createCourse} className=" mt-3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="title"
                id="title"
                placeholder="Course title"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="image">
                Image
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="image"
                id="image"
                placeholder="Course image link"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="duration">
                Duration
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="duration"
                id="duration"
                placeholder="Course duration"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="batch">
                Batch
              </label>
              <input
                type="number"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="batch"
                id="batch"
                placeholder="Batch No"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="price"
                id="price"
                placeholder="Course Price"
                required
              />
            </div>
            <div className="">
              <label
                className=" text-sm text-gray-600 mb-1"
                htmlFor="course-type"
              >
                Course Type
              </label>
              <select
                name="typeId"
                id="course-type"
                className=" block border p-2 rounded-md w-full focus:outline-none"
              >
                {types.map((type) => (
                  <option value={type.id} key={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="members">
                Request Members
              </label>
              <input
                type="number"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="members"
                id="members"
                placeholder="Members No"
                required
              />
            </div>
            <div className="">
              <label
                className=" text-sm text-gray-600 mb-1"
                htmlFor="start-date"
              >
                Start Date
              </label>
              <input
                type="date"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="start-date"
                id="start-date"
                placeholder="Start Date"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="desc">
                Description
              </label>
              <textarea
                className=" block p-3 rounded-[10px] border focus:outline-none w-full"
                name="desc"
                id="desc"
                placeholder="Course description"
                required
                cols={30}
                rows={3}
              ></textarea>
            </div>
          </div>
          <SubmitBtn name="Add" className=" w-[150px] mt-5" />
        </form>
      </div>
    </div>
  );
}
