"use client";

import { prisma } from "@/db";
import { navbarProps } from "@/types";
import Link from "next/link";
import { AppDispatch, store, useAppSelector } from "@/data/redux-store";
import { addToBasket, removeFromBasket, resetBasket } from "@/data/slice";
import { useDispatch } from "react-redux";

export default function Navbar({ page }: navbarProps) {
  //redux variables
  const basket = useAppSelector((state) => state.persistedReducer.basket);

  const linkList = [
    { id: 1, href: "/browse", icon: "magnifying-glass", title: "Browse" },
    { id: 2, href: "/cart", icon: "shopping-basket", title: "Cart" },
    { id: 3, href: "/info", icon: "info", title: "Info" },
  ];
  return (
    <nav
      className={`flex justify-between items-center px-5 md:px-10 py-2 fixed w-full z-50 text-slate-100 bg-stone-900 ${
        page === 0
          ? "bg-opacity-100 xl:bg-opacity-0"
          : "bg-opacity-100 xl:bg-opacity-100"
      }`}
    >
      <h1 className="text-xl">
        <Link href="/">Drop&Ship</Link>
      </h1>
      <div className="flex gap-0 sm:gap-5 items-center">
        {linkList.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`relative flex gap-2 items-center p-3 sm:px-4 sm:py-2 after:w-3 after:h-3 after:bg-rose-500 after:absolute after:opacity-0 after:right-0 after:rounded-full after:top-2 rounded-3xl ${
              link.id === page
              // ? "shadow-md shadow-white hover:shadow-md hover:shadow-white"
              // : ""
            } ${
              link.title === "Cart" && basket.length > 0 && "after:opacity-100"
            }`}
          >
            <i aria-hidden className={`fa fa-${link.icon}`}></i>
            <span className="hidden sm:block"> {link.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
