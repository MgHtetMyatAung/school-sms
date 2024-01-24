import React from "react";
import ApplyForm from "./ApplyForm";
import { getExtraDatas } from "@/server/functions/functions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/utils/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Form",
};

export default async function ApplyNowPage({
  searchParams,
}: {
  searchParams: { status: string };
}) {
  const extras = await getExtraDatas();
  const submitdata = extras.find((extra) => extra.slug === "submit_success");
  const limit = extras.find((extra) => extra.slug === "limit_reach");
  const courses = await prisma.course.findMany({
    include: {
      students: true,
    },
  });

  const requests = await prisma.formRequest.count();
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
        <ApplyForm
          courses={courses}
          requests={requests}
          limitText={limit?.description as string}
        />
      )}
    </section>
  );
}
