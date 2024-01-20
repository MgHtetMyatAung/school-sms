import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";

export default function GoBackButton({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <Link href={link} className=" flex gap-2 items-center">
      <ChevronLeft size={20} />
      <p>{name}</p>
    </Link>
  );
}
