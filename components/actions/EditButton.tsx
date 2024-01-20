import { SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function EditButton({ link }: { link: string }) {
  return (
    <Link href={link} className=" block">
      <SquarePen size={20} />
    </Link>
  );
}
