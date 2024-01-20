"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createExtraData(formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    slug: (formData.get("slug") as string) || "",
    image: (formData.get("image") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.extras.create({ data });
  } catch (error) {
    throw new Error("fail to create extra data");
  }

  revalidatePath("/dashboard/extras");
  redirect("/dashboard/extras");
}

export async function editExtraData(id: string, formData: FormData) {
  const data = {
    title: (formData.get("title") as string) || "",
    slug: (formData.get("slug") as string) || "",
    image: (formData.get("image") as string) || "",
    description: (formData.get("desc") as string) || "",
  };

  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.extras.update({ where: { id }, data });
  } catch (error) {
    throw new Error("fail to edit extra data");
  }

  revalidatePath("/dashboard/extras");
  redirect("/dashboard/extras");
}

export async function deleteExtraData(id: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await prisma.extras.delete({ where: { id } });
  } catch (error) {
    throw new Error("fail to delete extra data");
  }

  revalidatePath("/dashboard/extras");
  redirect("/dashboard/extras");
}
