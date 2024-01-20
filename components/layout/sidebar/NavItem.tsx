"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavItem({
  nav,
}: {
  nav: { name: string; link: string };
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === nav.link;
  return (
    <li
      className={` group p-3 rounded-md cursor-pointer ${
        isActive ? "bg-blue-100" : ""
      }`}
      onClick={() => router.push(nav.link)}
    >
      <button
        className={` font-medium block ${
          isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-700"
        }`}
      >
        {nav.name}
      </button>
    </li>
  );
}
