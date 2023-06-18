"use client";

import { sizes } from "@/components/card";
import { cartItemProps } from "@/types";
import { createRef, useState } from "react";

export default function CartItem(props: cartItemProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const itemRef = createRef<HTMLElement>();

  return (
    <article
      className="w-full h-40 md:h-300px bg-stone-700 bg-opacity-10 rounded-xl flex overflow-hidden relative"
      ref={itemRef}
    >
      <div
        className="w-1/3 md:max-xl:w-1/2  h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="w-2/3 flex flex-col xl:flex-row">
        <div className="flex flex-col flex-1 justify-evenly p-5">
          <span className="text-lg md:text-2xl text-slate-900">
            {props.name}
          </span>
          <span className="text-slate-700 flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between w-full">
            <span className="text-xs md:text-lg ">
              {props.gender} / {props.style} / {props.type}
            </span>
            <select className="text-sm h-5 rounded appearance-none text-center block md:hidden w-full sm:w-20">
              {sizes.map((size) => (
                <option value={size} key={size} className="text-xs">
                  {size}
                </option>
              ))}
            </select>
          </span>
          <p className="hidden md:block text-10px xl:text-xs text-slate-500 py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            praesentium explicabo hic! Itaque, odio? Ex laborum explicabo odio
            repudiandae atque vel accusamus, dolore quidem ullam, exercitationem
            voluptatem, nesciunt delectus.
          </p>
          <span className="justify-evenly w-full hidden md:flex gap-1">
            {sizes.map((size) => (
              <button
                key={Math.random()}
                className="opacity-70 w-8 h-8 bg-stone-900 rounded-3xl text-slate-100 text-xs hover:bg-stone-200 hover:opacity-100 hover:text-stone-900 transition-all duration-300"
              >
                {size}
              </button>
            ))}
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-end xl:justify-center items-start xl:items-center p-5 xl:bg-gradient-to-r from-stone-300 to-stone-400">
          <button
            //removing item from cart
            onClick={() => {
              props.toggleCart(props.id, false);
              itemRef.current?.classList.add("hidden");
              // setTimeout(() => {
              //   window.location.reload();
              // }, 300);
            }}
            className="absolute top-2 right-2 md:top-5 md:right-5 w-6 h-6 text-sm md:text-xl text-stone-600 hover:text-stone-900"
          >
            <i aria-hidden className="fa fa-close"></i>
          </button>
          <div className="flex flex-col w-1/2 items-center gap-2">
            <label className="hidden xl:block text-slate-900 xl:text-slate-100 text-xl">
              Quantity
            </label>
            <span className="flex scale-90 md:scale-100 -mt-6 sm:-mt-0">
              <button
                className="w-10 h-10 bg-stone-400 text-xl rounded-xl"
                onClick={() =>
                  setQuantity((prev) => (prev >= 2 ? prev - 1 : prev))
                }
              >
                -
              </button>
              <div className="w-10 h-10 text-center px-2 py-1 text-2xl">
                {quantity}
              </div>
              <button
                className="w-10 h-10 bg-stone-200 text-xl rounded-xl"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </span>
          </div>
          <span className="absolute bottom-5 right-5 text-sm md:text-xl text-slate-900 xl:text-slate-100">
            {(props.price * quantity).toFixed(2)}$
          </span>
        </div>
      </div>
    </article>
  );
}
