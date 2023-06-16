import HomePage from "../components/home_page";
import Navbar from "../components/navbar";
// import { prisma } from "@/db";
// import Link from "next/link";

export default async function Home() {
  // const products = await getProduct();
  // await prisma.product.create({
  //   data: { name: "blouse", price: 10, category: "Top" },
  // });
  return (
    <>
      <Navbar page={0} />

      <HomePage />

      {/* <ul className="mt-4">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}$
          </li>
        ))}
      </ul> */}
    </>
  );
}
