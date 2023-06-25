import Navbar from "../../components/navbar";
import Shop from "./browse_page";
import { toggleCart } from "../functions/toggle_cart";
import { prisma } from "@/db";

export default async function Browse() {
  const products = await prisma.product.findMany({
    include: {
      Designer: true,
    },
  });
  return (
    <>
      <Navbar page={1} />
      <Shop products={products} toggleCart={toggleCart} />
    </>
  );
}
