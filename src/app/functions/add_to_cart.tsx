import { prisma } from "@/db";

export async function addToCart(property: number) {
  "use server";

  await prisma.product.update({
    where: { id: property },
    data: {
      inBasket: true,
    },
  });
}
