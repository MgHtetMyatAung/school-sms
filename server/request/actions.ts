"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRequestAccess(dataObj: any) {
  const data = {
    name: (dataObj.name as string) || "",
    father_name: (dataObj.father_name as string) || "",
    dob: (dataObj.dob as string) || "",
    email: (dataObj.email as string) || "",
    phone: (dataObj.phone as string) || "",
    nrc: (dataObj.nrc as string) || "",
    image: (dataObj.image as string) || "",
    address: (dataObj.address as string) || "",
    courseId: (dataObj.courseId as string) || null,
  };

  try {
    await prisma.student.create({ data });
  } catch (error) {
    throw new Error("fail to access request");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/requests?status=true");
}

export async function createRequest(formData: FormData) {
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
    await prisma.formRequest.create({ data });
  } catch (error) {
    throw new Error("fail to request course");
  }

  revalidatePath("/dashboard/requests");
  redirect("/view/apply-now?status=success");
}

export async function editRequest(id: string, formData: FormData) {
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
    await prisma.formRequest.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to edit request");
  }

  revalidatePath("/dashboard/requests");
  redirect("/dashboard/requests");
}

export async function deleteRequest(id: string) {
  try {
    await prisma.formRequest.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete request");
  }

  revalidatePath("/dashboard/requests");
  redirect("/dashboard/requests");
}
