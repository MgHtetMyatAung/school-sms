import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <main className=" bg-gray-800 sticky left-0 right-0 top-0 z-20">
      <nav className=" container mx-auto h-[70px] flex justify-between items-center">
        <Link href={"/view"}>
          <h1 className=" text-gray-50 font-semibold text-xl">Hola Dora</h1>
        </Link>
        <Link href={"/view/apply-now"}>
          <Button className=" bg-blue-500 hover:bg-blue-600">Apply Now</Button>
        </Link>
      </nav>
    </main>
  );
}
