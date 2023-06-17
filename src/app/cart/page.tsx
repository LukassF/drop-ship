import { prisma } from "@/db";
import CartItem from "./cart_page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default async function Cart() {
  const products = await prisma.product.findMany({
    where: {
      inBasket: true,
    },
  });
  return (
    <>
      <Navbar page={2} />
      <main className="bg-slate-100 w-screen min-h-screen overflow-x-hidden pt-12 flex">
        <section className="flex flex-col gap-5 items-center justify-center w-screen md:w-2/3 h-auto bg-stone-200 overflow-x-hidden px-4 md:px-10 pb-20">
          <h1 className="text-2xl sm:text-5xl self-start px-5 py-10">
            My wishlist!
          </h1>
          <hr className="w-full h-3px -mt-10 bg-stone-400"></hr>
          {products.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isTrending={product.isTrending}
              gender={product.gender}
              style={product.style}
              type={product.type}
            />
          ))}

          <span className="w-full h-12 md:h-20 flex justify-center items-center gap-5">
            <button className="w-1/2 h-full bg-stone-300 rounded-xl text-md md:text-xl">
              Go to payments
            </button>
            <button className="w-1/2 h-full bg-stone-400 rounded-xl text-md md:text-xl text-slate-100">
              Remove all
            </button>
          </span>
        </section>
        <aside className="w-4screen/5 md:w-1/3 h-screen bg-slate-900 bg-opacity-10 fixed right-0"></aside>
      </main>
      <Footer />
    </>
  );
}
