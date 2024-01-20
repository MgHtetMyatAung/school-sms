import React from "react";
import ApplyForm from "./ApplyForm";
import { getExtraDatas } from "@/server/functions/functions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ApplyNowPage({
  searchParams,
}: {
  searchParams: { status: string };
}) {
  const extras = await getExtraDatas();
  const submitdata = extras.find((extra) => extra.slug === "submit_success");
  return (
    <section className=" min-h-[calc(100vh-70px)] hero">
      {searchParams.status === "success" ? (
        <div className=" h-[calc(100vh-70px)] grid place-items-center">
          <div className=" p-5 rounded shadow-sm border bg-white text-center mx-4">
            <h3 className=" text-blue-500 mb-5">{submitdata?.description}</h3>
            <Link href={"/view"}>
              <Button>Continue</Button>
            </Link>
          </div>
        </div>
      ) : (
        <ApplyForm />
      )}
    </section>
  );
}
