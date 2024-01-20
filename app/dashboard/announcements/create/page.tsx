import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { createAnnouncement } from "@/server/announcement/actions";
import { prisma } from "@/utils/prisma";

export default async function CreateAnnouncementPage() {
  const courses = await prisma.course.findMany();
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Announcements" link="/dashboard/announcements" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">
          Add New Announcement
        </h2>
        <form action={createAnnouncement} className=" mt-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="title"
                id="title"
                placeholder="Announcement title"
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
            <div className=" col-span-1 lg:col-span-2">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="desc">
                Description
              </label>
              <textarea
                className=" block p-3 rounded-[10px] border focus:outline-none w-full"
                name="desc"
                id="desc"
                placeholder="Announcement description"
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
