import Navbar from "../../components/navbar";
import Shop from "./browse_page";
import getProduct from "../functions/get_products";
import { toggleCart } from "../functions/toggle_cart";

export default async function Browse() {
  const products = await getProduct();
  return (
    <>
      <Navbar page={1} />
      <Shop products={products} toggleCart={toggleCart} />
    </>
  );
}
