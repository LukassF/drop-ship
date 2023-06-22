import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function toggleCart(property: number, isTrue: boolean) {
  "use server";

  try {
    await prisma.product.update({
      where: { id: property },
      data: {
        inBasket: isTrue,
      },
    });
  } catch {
    throw new Error("Didnt update");
  }
}
