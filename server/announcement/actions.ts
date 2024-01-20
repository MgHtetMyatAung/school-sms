"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAnnouncement(formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.announcement.create({ data });
  } catch (error) {
    throw new Error("fail to create announcement");
  }

  revalidatePath("/dashboard/announcements");
  redirect("/dashboard/announcements");
}

export async function editAnnouncement(id: string, formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.announcement.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to edit announcement");
  }

  revalidatePath("/dashboard/announcements");
  redirect("/dashboard/announcements");
}

export async function deleteAnnouncement(id: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.announcement.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete announcement");
  }

  revalidatePath("/dashboard/announcements");
  redirect("/dashboard/announcements");
}
