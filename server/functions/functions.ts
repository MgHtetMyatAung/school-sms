import { prisma } from "@/utils/prisma";

export async function getExtraDatas() {
  const extras = await prisma.extras.findMany();
  return extras;
}
