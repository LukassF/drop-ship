import { prisma } from "@/db";

export async function toggleCart(property: number, isTrue: boolean) {
  "use server";

  await prisma.product.update({
    where: { id: property },
    data: {
      inBasket: isTrue,
    },
  });
}
