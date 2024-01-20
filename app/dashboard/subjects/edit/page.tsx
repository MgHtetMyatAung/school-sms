import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { editSubject } from "@/server/subject/actions";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function EditSubjectPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const subject = await prisma.subject.findUnique({
    where: { id: searchParams.id },
  });
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Subjects" link="/dashboard/subjects" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">Edit Subject</h2>
        <form
          action={editSubject.bind(null, searchParams.id)}
          className=" mt-3 "
        >
          <div className="grid grid-cols-1 gap-5">
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="title"
                id="title"
                placeholder="Subject title"
                defaultValue={subject?.title || ""}
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="desc">
                Description
              </label>
              <textarea
                className=" block px-3 rounded-[10px] border focus:outline-none w-full"
                name="desc"
                id="desc"
                placeholder="Subject description"
                defaultValue={subject?.description || ""}
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
