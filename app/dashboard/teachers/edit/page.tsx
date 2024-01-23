import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { editTeacher } from "@/server/teacher/actions";
import { prisma } from "@/utils/prisma";
import React from "react";

interface Params {
  id: string;
}

export default async function EditTeacherPage({
  searchParams,
}: {
  searchParams: Params;
}) {
  const teacher = await prisma.teacher.findUnique({
    where: { id: searchParams?.id },
  });
  const courses = await prisma.course.findMany();
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Teachers" link="/dashboard/teachers" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">Edit Teacher</h2>
        <form
          action={editTeacher.bind(null, searchParams.id)}
          className=" mt-3 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="name"
                id="name"
                placeholder="Teacher's name"
                defaultValue={teacher?.name || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="father">
                Father
              </label>
              <input
                type="text"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="father"
                id="father"
                placeholder="Teacher's father"
                defaultValue={teacher?.father_name || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="dob"
                id="dob"
                placeholder="Date of Birth"
                defaultValue={teacher?.dob || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="email"
                id="email"
                placeholder="Teacher's email"
                defaultValue={teacher?.email || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="phone">
                Phone No
              </label>
              <input
                type="text"
                className=" block h-[38px] px-3 rounded-[10px] border focus:outline-none w-full"
                name="phone"
                id="phone"
                placeholder="Teacher's phone"
                defaultValue={teacher?.phone || ""}
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
                defaultValue={teacher?.courseId || ""}
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
              <label className=" text-sm text-gray-600 mb-1" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="position"
                id="position"
                placeholder="Teacher's position"
                defaultValue={teacher?.position || ""}
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
                placeholder="Your image link"
                defaultValue={teacher?.image || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="address">
                Address
              </label>
              <textarea
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="address"
                id="address"
                placeholder="Teacher's address"
                defaultValue={teacher?.address || ""}
                required
                cols={30}
                rows={3}
              ></textarea>
            </div>
          </div>
          <SubmitBtn name="Update" className=" w-[150px] mt-5" />
        </form>
      </div>
    </div>
  );
}
