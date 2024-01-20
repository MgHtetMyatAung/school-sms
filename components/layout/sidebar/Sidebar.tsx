import React from "react";
import { sideBarItems } from "./sidebarItems";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" border-r-[1px] p-3 w-full h-screen">
      <h1 className=" text-2xl font-bold text-gray-600">Management</h1>
      <hr className=" my-3" />
      <ul className=" space-y-1 relative h-[90vh]">
        {sideBarItems.map((nav) => (
          <NavItem key={nav.id} nav={nav} />
        ))}
        <Link href={"/"}>
          <Button className=" absolute bottom-3 w-full">Log out</Button>
        </Link>
      </ul>
    </div>
  );
}
