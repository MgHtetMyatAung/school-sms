import { Fullscreen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function GoDetailButton({ link }: { link: string }) {
  return (
    <Link href={link}>
      <Fullscreen size={20} />
    </Link>
  );
}
