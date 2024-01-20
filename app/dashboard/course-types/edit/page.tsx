import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { editCourseType } from "@/server/course-type/actions";
import { prisma } from "@/utils/prisma";

export default async function editCourseTypePage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const courseType = await prisma.classType.findUnique({
    where: { id: searchParams.id },
  });
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Course Types" link="/dashboard/course-types" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">
          Edit Course Type
        </h2>
        <form
          action={editCourseType.bind(null, searchParams.id)}
          className=" mt-3 "
        >
          <div className="grid grid-cols-1 gap-5">
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="name"
                id="name"
                placeholder="Course type name"
                defaultValue={courseType?.name || ""}
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
                placeholder="Course type description"
                defaultValue={courseType?.description || ""}
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
