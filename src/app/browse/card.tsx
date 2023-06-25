"use client";

import { cardProps } from "@/types";
import Swal from "sweetalert2";
import { AppDispatch, useAppSelector } from "@/data/redux-store";
import { addToBasket } from "@/data/slice";
import { useDispatch } from "react-redux";

export const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export default function Card(props: cardProps) {
  //redux variables
  const dispatch = useDispatch<AppDispatch>();
  const basket = useAppSelector((state) => state.persistedReducer.basket);
  return (
    <div
      tabIndex={0}
      className="overflow-hidden relative h-500px w-full sm:w-450px shrink-0 sm:rounded-md bg-cover bg-center group cursor-default"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute w-full h-full bg-stone-900 bg-opacity-40 z-1 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500">
        <header className="flex justify-between p-2 z-20 transfrom -translate-y-full group-focus:-translate-y-0 group-hover:-translate-y-0 transition-all duration-500">
          <button
            onClick={() => {
              dispatch(
                addToBasket({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  image: props.image,
                  gender: props.gender,
                  style: props.style,
                  type: props.type,
                  quantity: 1,
                })
              );
              Swal.fire("Success!", "Added to cart!", "success");
            }}
            className="w-12 h-12 rounded-2xl bg-blue-500  opacity-60 hover:opacity-90 transition-all duration-300"
          >
            <i aria-hidden className={`fa fa-shopping-cart text-slate-50`}></i>
          </button>
          {props.isTrending && (
            <div className="cursor-default text-slate-50 w-12 h-12 rounded-2xl bg-green-300  bg-opacity-40 transition-w duration-500 flex items-center gap-2 justify-center group-hover:w-40 group-focus:w-40">
              <i
                aria-hidden
                className="fa fa-arrow-trend-up text-slate-50 text-xl"
              ></i>{" "}
              <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-1000">
                Trending
              </span>
            </div>
          )}
        </header>
        <footer className="p-4 flex flex-col gap-4 z-20 transfrom translate-y-full group-focus:translate-y-0 group-hover:translate-y-0 transition-all duration-500">
          <span className="flex justify-between text-2xl text-slate-50">
            <p>{props.name}</p>
            <p>{props.price}$</p>
          </span>
          <p className="text-xs text-stone-300 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            consequatur fuga minima pariatur fugiat sunt explicabo facere iusto
            eligendi, ipsum illum vero eaque nihil harum accusantium
            reprehenderit, beatae quo exercitationem?
          </p>
          <span className="relative w-full flex justify-start items-center gap-2 text-slate-100 bg-stone-900 bg-opacity-40 rounded-md px-5 py-2 text-sm">
            <div
              className="w-8 aspect-square rounded-full bg-center bg-cover border border-slate-100"
              style={{ backgroundImage: `url(${props.Designer?.image})` }}
            ></div>
            <span className="transform translate-x-96 group-hover:translate-x-0 group-focus:translate-x-0 transition-all duration-500">
              {props.Designer?.name}
            </span>

            <span className="absolute -top-3 right-5 text-sm text-stone-300">
              Designer
            </span>
          </span>
        </footer>
      </div>
    </div>
  );
}
