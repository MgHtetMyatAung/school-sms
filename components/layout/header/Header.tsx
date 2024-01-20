import { ModeToggle } from "@/components/theme/theme-toggle";
import React from "react";

export default function Header() {
  return (
    <nav className=" px-4 py-2 border-b-2 sticky top-0 left-0 right-0 bg-white flex justify-between items-center">
      <div className="">
        <input
          type="text"
          className=" h-[38px] px-3 rounded-[20px] border focus:outline-none lg:w-[400px]"
          placeholder="Search here"
        />
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </nav>
  );
}
