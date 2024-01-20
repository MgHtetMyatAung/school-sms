"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCourseType(formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.classType.create({ data });
  } catch (error) {
    throw new Error("fail to create course type");
  }

  revalidatePath("/dashboard/course-types");
  redirect("/dashboard/course-types");
}

export async function editCourseType(id: string, formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.classType.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to edit course type");
  }

  revalidatePath("/dashboard/course-types");
  redirect("/dashboard/course-types");
}

export async function deleteCourseType(id: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.classType.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete course type");
  }

  revalidatePath("/dashboard/course-types");
  redirect("/dashboard/course-types");
}
