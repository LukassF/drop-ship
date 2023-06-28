"use client";

import { name } from "@/types";
import { createRef, useEffect, useState } from "react";
import { stick } from "../functions/stick";

const slices = [
  [0, 4],
  [4, 8],
  [8, 12],
  [12, 16],
];

export default function Aside() {
  const containerRef = createRef<HTMLElement>();
  const buttonRef = createRef<HTMLButtonElement>();
  const iconRef = createRef<HTMLElement>();
  const creditCardRef = createRef<HTMLElement>();

  const [name, setName] = useState<name>({
    name: "",
    surname: "",
  });
  const [cardNumber, setCardNumber] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [cvv, setCvv] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);

  if (typeof window !== "undefined")
    window.onscroll = () => stick(containerRef);

  useEffect(() => {
    if (containerRef.current?.classList.contains("translate-x-full"))
      document.documentElement.style.overflow = "auto";
    else document.documentElement.style.overflow = "hidden";
  }, [clicked]);

  return (
    <aside
      className="z-40 md:z-10 w-screen sm:w-4screen/5 md:w-1/3 min-h-screen bg-stone-300 bg-opacity-100 md:bg-opacity-100 fixed right-0 pt-20 transform transition-all md:transition-none translate-x-full md:translate-x-0 px-3"
      ref={containerRef}
    >
      <button
        className="absolute md:hidden w-10 h-10 rounded-xl flex items-center justify-center transform -translate-x-20 bg-stone-400 transition-all text-lg text-slate-100"
        ref={buttonRef}
        onClick={() => {
          setClicked(!clicked);
          if (buttonRef.current?.classList.contains("-translate-x-20")) {
            containerRef.current?.classList.remove("translate-x-full");
            buttonRef.current?.classList.remove("-translate-x-20");
            iconRef.current?.classList.remove("fa-credit-card");
            iconRef.current?.classList.add("fa-close");
          } else {
            containerRef.current?.classList.add("translate-x-full");
            buttonRef.current?.classList.add("-translate-x-20");
            iconRef.current?.classList.remove("fa-close");
            iconRef.current?.classList.add("fa-credit-card");
          }
        }}
      >
        <i aria-hidden className="fa fa-credit-card" ref={iconRef}></i>
      </button>
      <h1 className="text-md sm:text-xl xl:text-2xl  text-slate-900 w-full text-right md:text-left p-2">
        Assign your payment method
      </h1>
      <div className="text-stone-500">
        <h2 className="w-full px-2 text-8px lg:text-10px mt-6 md:mt-2">
          This website is not a commercial project and so payments are not
          supported. With that in mind make sure not to disclose any authentic
          personal information because, as unlikely as it may be, they might get
          unintentionally leaked.
        </h2>
      </div>
      <section className="w-full flex flex-col gap-0 sm:gap-4 lg:gap-6  items-center [perspective:2000px] mt-2 lg:mt-10">
        <article
          id="credit-card"
          ref={creditCardRef}
          className="w-350px h-210px animate-gradient rounded-xl group shadow-2xl relative [transform-style:preserve-3d]  transition-all duration-500"
        >
          <div className="absolute w-full h-full rounded-xl px-6 py-5 flex flex-col">
            <h3 className="text-stone-200">
              Credit
              <span className="text-stone-400">
                <em>Card</em>
              </span>
            </h3>
            <div className="w-full">
              <img
                src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
                alt="chip"
                width={120}
                className="-ml-10"
              ></img>
            </div>
            <div className="text-xl w-full text-starte text-stone-300 flex justify-between px-3">
              {slices.map((item) => (
                <span key={Math.random()}>
                  {cardNumber.slice(item[0], item[1]) !== ""
                    ? cardNumber.slice(item[0], item[1])
                    : "XXXX"}
                </span>
              ))}
            </div>
            <span className="w-full flex justify-between justify-self-end absolute bottom-5 left-0 px-6 text-stone-300">
              <div>
                {date.getMonth() + 1}/{date.getFullYear().toString().slice(2)}
              </div>
              <div>
                {name.name} {name.surname}
              </div>
            </span>
          </div>
          <div className="overflow-hidden pt-5 w-full h-full bg-gradient-to-br from-stone-600 via-stone-800 to-black rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
            <div className="w-full h-12  bg-stone-900"></div>
            <div className="flex w-full h-full p-4 justify-center items-center gap-5 text-slate-100">
              <img
                src="https://randomqr.com/assets/images/randomqr-256.png"
                alt="qr"
                width={50}
              />
              <div className="flex flex-col gap-2">
                <div className="w-full h-10 flex items-center justify-around">
                  <div className="w-3/4 h-3/4 bg-stone-400"></div>
                  <span>
                    <em>{cvv !== 0 ? cvv : "XXX"}</em>
                  </span>
                </div>
                <p className="text-8px text-slate-300 px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  qui eum quos iste nisi voluptates porro optio, ratione quam
                  officiis reprehenderit mollitia quidem earum maxime, ex in!
                  quos iste nisi voluptates porro optio.
                </p>
              </div>
            </div>
          </div>
        </article>

        <form className="w-full flex flex-col gap-5 px-5 py-2 " id="card-form">
          <div
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row w-full [&>*]:flex-1 [&>*]:flex [&>*]:flex-col gap-5"
            id="name"
          >
            <div>
              <label>Your name</label>
              <input
                type="text"
                maxLength={15}
                onFocus={() =>
                  creditCardRef.current?.classList.remove("rotated")
                }
                onChange={(e) =>
                  setName((prev) => ({
                    name: e.target.value,
                    surname: prev.surname,
                  }))
                }
              />
            </div>
            <div>
              <label>Your surname</label>
              <input
                type="text"
                maxLength={15}
                onFocus={() =>
                  creditCardRef.current?.classList.remove("rotated")
                }
                onChange={(e) =>
                  setName((prev) => ({
                    name: prev.name,
                    surname: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <label>Your card number</label>
            <input
              type="number"
              onFocus={() => creditCardRef.current?.classList.remove("rotated")}
              onChange={(e) => {
                e.target.value = e.target.value.slice(0, 16);
                setCardNumber(e.target.value);
              }}
            />
          </div>
          <div className="flex w-full [&>*]:flex [&>*]:flex-col gap-5">
            <div className="w-1/3">
              <label>CVV code</label>
              <input
                type="number"
                maxLength={3}
                onFocus={() => creditCardRef.current?.classList.add("rotated")}
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 3);
                  setCvv(parseInt(e.target.value));
                }}
              />
            </div>
            <div className="w-2/3">
              <label>Expiration date</label>
              <div className="flex gap-5">
                <input
                  type="date"
                  onFocus={() =>
                    creditCardRef.current?.classList.remove("rotated")
                  }
                  onChange={(e) => {
                    setDate(new Date(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className="w-12 h-12 rounded-full self-center bg-slate-600 text-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-all"
            id="finish-button"
          >
            <i aria-hidden className="fa fa-check"></i>
          </button>
        </form>
      </section>
    </aside>
  );
}
