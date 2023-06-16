import getProduct from "@/app/functions/get_products";
import Card from "./card";
import Footer from "./footer";

// async function applyFilters(data: FormData) {
//   "use server";
//   console.log("hi");
// }

export default async function Shop() {
  const products = await getProduct();
  console.log(products);

  // await prisma.product.create({
  //   data: { name: "blouse", price: 10, category: "Top" },
  // });
  return (
    <main className="w-screen h-screen mx-0 px-0 overflow-x-hidden bg-slate-100">
      <header className="w-screen h-80 bg-cover bg-center bg-[url('https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?cs=srgb&dl=pexels-daian-gan-102129.jpg&fm=jpg')] flex items-end">
        <form className="w-full h-2/3 md:h-12 flex flex-col md:flex-row [&>*]:h-full [&>*]:flex-1  [&>*]:bg-stone-900 [&>*]:text-slate-100 [&>*]:appearance-none">
          <select className="px-3">
            <option value="" disabled selected hidden>
              Select gender
            </option>
            <option>Women</option>
            <option>Men</option>
            <option>Unisex</option>
          </select>
          <select className="px-3">
            <option value="" disabled selected hidden>
              Select style
            </option>
            <option>Formal</option>
            <option>Semi-formal</option>
            <option>At Home</option>
            <option>Sportswear</option>
            <option>Underwear</option>
            <option>Miscellaneous</option>
          </select>
          <select className="px-3">
            <option value="" disabled selected hidden>
              Select type
            </option>
            <option>Headwear</option>
            <option>Top</option>
            <option>Bottom</option>
            <option>Handwear</option>
            <option>Shoes</option>
          </select>
          <div className="flex [&>*]:flex-1 [&>*]:h-full text-slate-200 px-0">
            <button type="submit" className="bg-emerald-400">
              <span className=" md:max-lg:hidden">Apply </span>
              <i className="fa fa-check"></i>
            </button>
            <button type="submit" className="bg-gray-600">
              <span className="md:max-lg:hidden">Clear All </span>{" "}
              <i className="fa-solid fa-filter-circle-xmark"></i>
            </button>
          </div>
        </form>
      </header>

      <section className="min-h-screen flex flex-col justify-between mt-10">
        <span className="w-full flex gap-3 justify-center items-center">
          <h2 className="text-2xl sm:text-4xl">What we found! |</h2>
          <h2 className="text-lg sm:text-2xl">All products</h2>
        </span>

        <article className="w-full h-auto my-5 px-0 sm:p-4  flex justify-center flex-wrap gap-0 sm:gap-20 pb-0 sm:pb-20">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isTrending={product.isTrending}
            />
          ))}
        </article>
        <Footer />
      </section>
    </main>
  );
}
