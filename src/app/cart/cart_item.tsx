"use client";

import { sizes } from "@/app/browse/card";
import { cartItemProps } from "@/types";
import { createRef, useState } from "react";
import { AppDispatch } from "@/data/redux-store";
import { removeFromBasket, updateQuantity } from "@/data/slice";
import { useDispatch } from "react-redux";

export default function CartItem(props: cartItemProps) {
  //redux variables
  const dispatch = useDispatch<AppDispatch>();

  // const [quantity, setQuantity] = useState<number>(1);
  const itemRef = createRef<HTMLElement>();

  return (
    <article
      className="w-full h-40 md:h-auto lg:h-300px rounded-xl flex overflow-hidden relative border border-stone-500"
      ref={itemRef}
    >
      <div
        className="w-1/3 md:max-xl:w-1/2  min-h-40 bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="w-2/3 flex flex-col xl:flex-row">
        <div className="flex flex-col flex-1 justify-evenly p-5">
          <span className="text-lg md:text-2xl text-slate-900">
            {props.name}
          </span>
          <span className="text-slate-700 flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between w-full">
            <span className="text-10px md:text-lg ">
              {props.gender.split("/")[0]} / {props.style.split("/")[0]} /{" "}
              {props.type.split("/")[0]}
            </span>
            <select className="text-sm h-5 rounded bg-stone-300 appearance-none text-center block md:hidden w-full sm:w-20">
              {sizes.map((size) => (
                <option value={size} key={size} className="text-xs">
                  {size}
                </option>
              ))}
            </select>
          </span>
          <p className="hidden lg:block text-10px xl:text-xs text-slate-500 py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            praesentium explicabo hic! Itaque, odio? Ex laborum explicabo odio
            repudiandae atque vel accusamus, dolore quidem ullam, exercitationem
            voluptatem, nesciunt delectus.
          </p>
          <span className="justify-evenly w-full hidden md:flex gap-1">
            {sizes.map((size) => (
              <button
                key={Math.random()}
                className="opacity-70 w-8 h-8 bg-stone-900 rounded-3xl text-slate-100 text-xs hover:bg-stone-200 hover:opacity-100 hover:text-stone-900 md:scale-80s lg:scale-100 transition-all duration-300"
              >
                {size}
              </button>
            ))}
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-end xl:justify-center items-start xl:items-center p-5 ">
          <button
            //removing item from cart
            onClick={() => {
              dispatch(removeFromBasket(props.id));
            }}
            className="absolute top-2 right-2 md:top-5 md:right-5 w-6 h-6 text-sm md:text-xl text-stone-600 hover:text-stone-900"
          >
            <i aria-hidden className="fa fa-close"></i>
          </button>
          <div className="flex flex-col w-1/2 items-center gap-2">
            <label className="hidden xl:block text-slate-900 text-xl">
              Quantity
            </label>
            <span className="flex scale-90 md:scale-100 -mt-6 sm:-mt-0 gap-2">
              <button
                className="w-8 h-8 bg-stone-300 text-xl rounded-md"
                onClick={() =>
                  dispatch(updateQuantity({ id: props.id, type: "decrement" }))
                }
              >
                -
              </button>
              <div className="w-8 h-8 px-2 py-1 text-2xl flex items-center justify-center">
                {props.quantity}
              </div>
              <button
                className="w-8 h-8 bg-stone-300 text-xl rounded-md"
                onClick={() =>
                  dispatch(updateQuantity({ id: props.id, type: "increment" }))
                }
              >
                +
              </button>
            </span>
          </div>
          <span className="absolute bottom-5 right-5 text-sm md:text-xl text-slate-700">
            {(props.price * props.quantity).toFixed(2)}$
          </span>
        </div>
      </div>
    </article>
  );
}
