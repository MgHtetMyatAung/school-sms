import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { createSubject } from "@/server/subject/actions";

export default function CreateSubjectPage() {
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Subjects" link="/dashboard/subjects" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">
          Add New Subject
        </h2>
        <form action={createSubject} className=" mt-3 ">
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
                placeholder="Subject description"
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
