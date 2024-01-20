"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createStudent(formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    father_name: (formData.get("father") as string) || "",
    dob: (formData.get("dob") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    nrc: (formData.get("nrc") as string) || "",
    image: (formData.get("image") as string) || "",
    address: (formData.get("address") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.student.create({ data });
  } catch (error) {
    throw new Error("fail to create student");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
}

export async function editStudent(id: string, formData: FormData) {
  const data = {
    name: (formData.get("name") as string) || "",
    father_name: (formData.get("father") as string) || "",
    dob: (formData.get("dob") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    nrc: (formData.get("nrc") as string) || "",
    image: (formData.get("image") as string) || "",
    address: (formData.get("address") as string) || "",
    courseId: (formData.get("courseId") as string) || null,
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.student.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to create student");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
}

export async function deleteStudent(studentId: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.student.delete({ where: { id: studentId } });
  } catch (error) {
    throw new Error("fail to delete student");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
}
