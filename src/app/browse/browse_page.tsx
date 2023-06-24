"use client";

import Card from "./card";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import applyFilters from "@/app/functions/apply_filters";
import { categoriesType, shopProps } from "@/types";
import chooseCategory from "@/app/functions/chooseCategory";

const genderArray = ["Women", "Men", "Unisex"];
const clothesStyles = [
  "Formal",
  "Semi-formal",
  "At-home",
  "Sportswear",
  "Underwear",
  "Other",
];
const clothesTypes = ["Headwear", "Top", "Bottom", "Full", "Handwear", "Shoes"];

export default function Shop(props: shopProps) {
  const [categories, setCategories] = useState<categoriesType>({
    gender: "",
    style: "",
    type: "",
  });
  const [categoriesArray, setCategoriesArray] = useState<string[]>([]);

  useEffect(() => {
    setCategoriesArray([]);
    Object.values(categories).forEach((item) => {
      if (item.length !== 0) setCategoriesArray((prev) => [...prev, item]);
    });
  }, [categories]);

  return (
    <main className="w-screen h-screen mx-0 px-0 overflow-x-hidden bg-stone-100">
      <header className="w-screen min-h-80 md:h-96 bg-cover bg-center bg-transparent md:bg-[url('https://wallpaper.dog/large/17272969.jpg')] flex items-end relative">
        <form
          action={(data) => applyFilters(data, setCategories)}
          className="px-2 pr-5 w-full h-16 hidden md:flex gap-2 -mt-2 text-lg [&>*]:h-3/4 [&>*]:rounded-xl [&>*]:flex-1   [&>*]:text-center [&>*]:text-stone-900 [&>*]:appearance-none"
        >
          <select className="px-3" name="gender" defaultValue="">
            <option value="" disabled hidden>
              Select gender
            </option>
            {genderArray.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <select className="px-3" name="style" defaultValue="">
            <option value="" disabled hidden>
              Select style
            </option>
            {clothesStyles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
          <select className="px-3" name="type" defaultValue="">
            <option value="" disabled hidden>
              Select type
            </option>

            {clothesTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="flex [&>*]:flex-1 [&>*]:rounded-xl [&>*]:h-full text-slate-200 px-0 gap-2 ">
            <button type="submit" className="bg-orange-200 hover:bg-orange-300">
              <span className=" md:max-lg:hidden">Apply </span>
              <i aria-hidden className="fa fa-check"></i>
            </button>
            <button
              type="reset"
              className="bg-gray-300 hover:bg-gray-500 hover:text-slate-100"
            >
              <span className="md:max-lg:hidden">Clear All </span>{" "}
              <i aria-hidden className="fa-solid fa-filter-circle-xmark"></i>
            </button>
          </div>
        </form>

        <form className="w-full h-full p-5  flex md:hidden flex-col items-center justify-center pt-20">
          <h1 className="text-xl">Apply filters</h1>
          <hr className="h-px w-full bg-stone-900"></hr>
          <div className="w-full flex gap-x-4 py-6">
            {genderArray.map((gender) => (
              <div
                key={gender}
                onClick={(e) =>
                  chooseCategory(e.target, setCategories, "gender")
                }
                className="cursor-pointer px-5 h-10 rounded-3xl border border-stone-500 bg-amber-100 flex items-center justify-center text-xs xs:text-sm"
              >
                {gender}
              </div>
            ))}
          </div>
          <hr className="h-px w-full bg-stone-900"></hr>
          <div className="w-full flex gap-x-4 gap-y-2 overflow-x-auto py-6 overflow-y-hidden">
            {clothesStyles.map((style) => (
              <div
                key={style}
                onClick={(e) =>
                  chooseCategory(e.target, setCategories, "style")
                }
                className="shrink-0 cursor-pointer h-10 px-5 rounded-3xl border border-stone-500 bg-amber-100 flex items-center justify-center text-xs xs:text-sm"
              >
                {style}
              </div>
            ))}
          </div>
          <hr className="h-px w-full bg-stone-900"></hr>
          <div className="w-full flex gap-x-4 gap-y-2 overflow-x-auto py-6 overflow-y-hidden">
            {clothesTypes.map((type) => (
              <div
                key={type}
                onClick={(e) => chooseCategory(e.target, setCategories, "type")}
                className="shrink-0 cursor-pointer h-10 px-5 rounded-3xl border border-stone-500 bg-amber-100 flex items-center justify-center text-xs xs:text-sm"
              >
                {type}
              </div>
            ))}
          </div>
          <hr className="h-px w-full bg-stone-900"></hr>
        </form>
      </header>

      <section className="min-h-screen flex flex-col justify-between mt-10">
        <span className="px-0 md:px-40 w-full flex flex-col lg:flex-row gap-5 justify-center items-center">
          <h2 className="text-3xl sm:text-4xl">What we found! </h2>
          <h2 className="text-lg sm:text-2xl text-stone-400">
            {categoriesArray.length !== 0
              ? categoriesArray.join(" / ")
              : "All Products"}
          </h2>
        </span>

        <article className="w-full h-auto my-5 px-0 sm:p-4  flex justify-center flex-wrap gap-5 sm:gap-8 pb-0 sm:pb-20">
          {props.products.map((product) => {
            if (
              product.gender.includes(categories.gender) &&
              product.style.includes(categories.style) &&
              product.type.includes(categories.type)
            )
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  isTrending={product.isTrending}
                  inBasket={product.inBasket}
                  toggleCart={props.toggleCart}
                />
              );
          })}
          <span className="w-full text-10px m-5 py-4 text-stone-400 md:px-20 border-t-2 border-b-2 border-stone-400 md:hidden">
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
