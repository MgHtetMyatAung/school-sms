"use client";
import { Loader2, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import SubmitBtn from "./SubmitBtn";

export default function DeleteButton({
  title,
  action,
}: {
  title: string;
  action: any;
}) {
  const { pending } = useFormStatus();
  const [boxShow, setBoxShow] = useState(false);
  return (
    <section className="">
      <button onClick={() => setBoxShow(true)} className=" mt-2">
        <Trash2 size={20} color="#f43e3e" />
      </button>
      {boxShow && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 grid place-items-center bg-[#3333337c]">
          <div className=" bg-white rounded-md p-5">
            <h2 className=" text-lg font-medium text-center">{title}</h2>
            <div className=" flex items-center gap-5 justify-center mt-5">
              <form action={action}>
                <SubmitBtn
                  name="Delete"
                  className=" bg-red-500 w-[100px] hover:bg-red-600"
                />
              </form>
              <Button
                variant="outline"
                onClick={() => setBoxShow(false)}
                className="w-[100px]"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
