import Navbar from "../../components/navbar";
import Shop from "./browse_page";
import { prisma } from "@/db";
import { Product, PrismaClient } from "@prisma/client";
import getProduct from "../functions/get_products";
import { addToCart } from "../functions/add_to_cart";

export default async function Browse() {
  const products = await getProduct();
  return (
    <>
      <Navbar page={1} />
      <Shop products={products} addToCart={addToCart} />
    </>
  );
}
