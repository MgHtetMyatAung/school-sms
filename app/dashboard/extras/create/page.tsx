import GoBackButton from "@/components/actions/GoBackButton";
import SubmitBtn from "@/components/actions/SubmitBtn";
import { createExtraData } from "@/server/extra/actions";

export default function CreateExtraPage() {
  return (
    <div className="bg-white rounded-md shadow p-3">
      <GoBackButton name="Extra Datas" link="/dashboard/extras" />
      <div className="p-5">
        <h2 className=" font-bold text-xl text-gray-700 mt-5">
          Add New Extra Data
        </h2>
        <form action={createExtraData} className=" mt-3 ">
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
                placeholder="Data title"
                required
              />
            </div>
            <div className="">
              <label className=" text-sm text-gray-600 mb-1" htmlFor="slug">
                Slug
              </label>
              <input
                type="text"
                className=" block px-3 py-2 rounded-[10px] border focus:outline-none w-full"
                name="slug"
                id="slug"
                placeholder="Data slug"
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
                placeholder="Data description"
                required
                cols={30}
                rows={3}
              ></textarea>
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
                placeholder="Data image link"
                required
              />
            </div>
          </div>
          <SubmitBtn name="Add" className=" w-[150px] mt-5" />
        </form>
      </div>
    </div>
  );
}
