import React from "react";
import SubmitBtn from "./SubmitBtn";
import { Plus } from "lucide-react";
import { createRequestAccess } from "@/server/request/actions";

export default function AccessButton({ data }: { data: any }) {
  return (
    <form action={createRequestAccess.bind(null, data)}>
      <SubmitBtn name={<Plus size={20} color="#fff" />} className=" w-fit" />
    </form>
  );
}
