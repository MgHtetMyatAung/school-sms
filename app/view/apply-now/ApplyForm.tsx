import SubmitBtn from "@/components/actions/SubmitBtn";
import { createRequest } from "@/server/request/actions";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function ApplyForm() {
  const courses = await prisma.course.findMany();
  return (
    <main className=" md:container mx-auto py-10">
      <div className=" md:w-[500px] mx-auto md:border rounded md:shadow-sm p-5 bg-white">
        <h2 className=" text-xl font-medium mb-5 text-center">
          Course Apply Form
        </h2>
        <hr className=" my-2" />
        <form action={createRequest} className=" space-y-3 mt-5">
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="father">
              Father Name
            </label>
            <input
              type="text"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="father"
              id="father"
              placeholder="Your father name"
              required
            />
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="dob"
              id="dob"
              placeholder="your dob"
              required
            />
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="phone">
              Phone No
            </label>
            <input
              type="text"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="phone"
              id="phone"
              placeholder="Your phone no"
              required
            />
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="courseId">
              Choose Course
            </label>
            <select
              name="courseId"
              id="courseId"
              className=" block border p-2 rounded-md w-full focus:outline-none"
            >
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="address">
              Address
            </label>
            <textarea
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="address"
              id="address"
              placeholder="Your address"
              required
              cols={30}
              rows={3}
            ></textarea>
          </div>
          {/* <div className="">
            <label className=" text-sm text-gray-600 mb-1" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
              name="image"
              id="image"
              placeholder="Your image link"
              required
            />
          </div> */}
          <SubmitBtn
            name="Apply"
            className=" w-[150px] bg-blue-600 hover:bg-blue-700"
          />
        </form>
      </div>
    </main>
  );
}
