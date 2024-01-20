"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTeacher(formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    father_name: (formData.get("father") as string) || "",
    dob: (formData.get("dob") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    address: (formData.get("address") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.teacher.create({ data });
  } catch (error) {
    throw new Error("fail to create teacher");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");
}

export async function editTeacher(id: string, formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    father_name: (formData.get("father") as string) || "",
    dob: (formData.get("dob") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    address: (formData.get("address") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.teacher.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to update teacher");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");
}

export async function deleteTeacher(id: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.teacher.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete teacher");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");
}
