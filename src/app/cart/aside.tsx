"use client";

import { createRef } from "react";

export default function Aside() {
  const containerRef = createRef<HTMLElement>();
  const buttonRef = createRef<HTMLButtonElement>();
  const iconRef = createRef<HTMLElement>();
  return (
    <aside
      className="w-4screen/5 md:w-1/3 h-screen bg-slate-600 bg-opacity-90 md:bg-opacity-100 fixed right-0 pt-20 transform transition-all translate-x-full md:translate-x-0 px-3"
      ref={containerRef}
    >
      <button
        className="absolute md:hidden w-12 h-12 rounded-xl flex items-center justify-center transform -translate-x-20 bg-slate-500 transition-all text-lg text-slate-100"
        ref={buttonRef}
        onClick={() => {
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
      <h1 className="text-lg md:text-xl text-slate-100 w-full text-right p-2">
        Assign your payments
      </h1>
    </aside>
  );
}
