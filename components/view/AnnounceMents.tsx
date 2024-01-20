import { formatDate } from "@/lib/helperfuns";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function AnnounceMents() {
  const announcements = await prisma.announcement.findMany();
  return (
    <div className=" grid gap-5">
      {announcements.map((post) => (
        <div className=" py-5" key={post.id}>
          <h2 className=" text-blue-500 font-medium mb-5">Announcement</h2>
          <h1 className=" font-medium text-lg md:text-2xl mb-5">
            {post?.title}
          </h1>
          <p className=" text-gray-600 mb-3">{post?.description}</p>
          <p className=" text-gray-800 font-medium text-sm">
            - {formatDate(String(post?.createdAt))}
          </p>
        </div>
      ))}
    </div>
  );
}
