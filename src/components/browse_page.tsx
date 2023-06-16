"use client";

import Card from "./card";
import Footer from "./footer";
import { useState } from "react";
import applyFilters from "@/app/functions/apply_filters";
import { shopProps } from "@/types";

export default function Shop(props: shopProps) {
  const [categories, setCategories] = useState<string[] | object>([]);

  return (
    <main className="w-screen h-screen mx-0 px-0 overflow-x-hidden bg-slate-100">
      <header className="w-screen mt-16 bg-cover bg-center bg-[url('https://wallpaperaccess.com/full/6836716.png')] flex items-end">
        <form
          action={(data) => applyFilters(data, setCategories)}
          className="w-full h-60 md:h-16 -mt-2 text-lg flex flex-col md:flex-row [&>*]:h-full [&>*]:flex-1  [&>*]:bg-stone-200 [&>*]:text-stone-900 [&>*]:appearance-none [&>*]:border-r-2  [&>*]:border-b-2 [&>*]:border-stone-500"
        >
          <select className="px-3" name="gender" defaultValue="">
            <option value="" disabled hidden>
              Select gender
            </option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Unisex">Unisex</option>
          </select>
          <select className="px-3" name="style" defaultValue="">
            <option value="" disabled hidden>
              Select style
            </option>
            <option value="Formal">Formal</option>
            <option value="Semi-formal">Semi-formal</option>
            <option value="At-home">At Home</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Underwear">Underwear</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <select className="px-3" name="type" defaultValue="">
            <option value="" disabled hidden>
              Select type
            </option>
            <option value="Headwear">Headwear</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
            <option value="Handwear">Handwear</option>
            <option value="Shoes">Shoes</option>
          </select>
          <div className="flex [&>*]:flex-1 [&>*]:h-full text-slate-200 px-0">
            <button type="submit" className="bg-orange-200 hover:bg-orange-300">
              <span className=" md:max-lg:hidden">Apply </span>
              <i aria-hidden className="fa fa-check"></i>
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 hover:text-slate-100"
            >
              <span className="md:max-lg:hidden">Clear All </span>{" "}
              <i aria-hidden className="fa-solid fa-filter-circle-xmark"></i>
            </button>
          </div>
        </form>
      </header>

      <section className="min-h-screen flex flex-col justify-between mt-10">
        <span className="px-0 md:px-40 w-full flex flex-col sm:flex-row gap-5 justify-center items-center">
          <h2 className="text-3xl sm:text-4xl">What we found! </h2>
          <h2 className="text-lg sm:text-2xl text-stone-400">
            {(categories as string[]).length !== 0
              ? (categories as string[]).join(" / ")
              : "All Products"}
          </h2>
        </span>

        <article className="w-full h-auto my-5 px-0 sm:p-4  flex justify-center flex-wrap gap-0 sm:gap-20 pb-0 sm:pb-20">
          {props.products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isTrending={product.isTrending}
              inBasket={product.inBasket}
              addToCart={props.addToCart}
            />
          ))}
          <span className="w-full text-10px m-5 py-4 text-stone-400 md:px-20 border-t-4 border-b-4 border-stone-400 md:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            deleniti laudantium consectetur! Eos facilis omnis, officia illo
            sequi recusandae autem suscipit nihil consequuntur illum aperiam,
            dolor repellendus enim maiores voluptate. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Veniam earum unde est debitis,
            ipsa similique pariatur itaque maiores consequuntur, quas
            recusandae, quae ullam eaque amet assumenda ex? Necessitatibus,
            consequuntur dicta.
          </span>
        </article>
        <Footer />
      </section>
    </main>
  );
}
