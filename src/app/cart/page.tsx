import { prisma } from "@/db";
import getProduct from "../functions/get_products";

export default async function Cart() {
  const products = await prisma.product.findMany({
    where: {
      inBasket: true,
    },
  });
  return (
    <main>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </main>
  );
}
