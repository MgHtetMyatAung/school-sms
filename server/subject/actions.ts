"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSubject(formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await prisma.subject.create({ data });
  } catch (error) {
    throw new Error("fail to create student");
  }

  revalidatePath("/dashboard/subjects");
  redirect("/dashboard/subjects?status=true");
}

export async function editSubject(id: string, formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await prisma.subject.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to create student");
  }

  revalidatePath("/dashboard/subjects");
  redirect("/dashboard/subjects");
}

export async function deleteSubject(subjectId: string) {
  try {
    await prisma.subject.delete({ where: { id: subjectId } });
  } catch (error) {
    throw new Error("fail to delete student");
  }

  revalidatePath("/dashboard/subjects");
  redirect("/dashboard/subjects");
}
