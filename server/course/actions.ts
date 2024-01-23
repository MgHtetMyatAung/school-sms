"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCourse(formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
    image: (formData.get("image") as string) || "",
    duration: (formData.get("duration") as string) || "",
    batch: Number(formData.get("batch")),
    price: (formData.get("price") as string) || "",
    classTypeId: (formData.get("typeId") as string) || "",
    startDate: (formData.get("start-date") as string) || "",
    members: Number(formData.get("members")),
  };

  try {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    await prisma.course.create({ data });
  } catch (error) {
    throw new Error("fail to create course");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
}

export async function editCourse(id: string, formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
    image: (formData.get("image") as string) || "",
    duration: (formData.get("duration") as string) || "",
    batch: Number(formData.get("batch")),
    price: (formData.get("price") as string) || "",
    classTypeId: (formData.get("typeId") as string) || "",
    startDate: (formData.get("start-date") as string) || "",
    members: Number(formData.get("members")),
  };

  try {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    await prisma.course.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to update course");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
}

export async function deleteCourse(id: string) {
  try {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    // });
    await prisma.course.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete course");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
}
