"use client";

import CartItem from "./cart_item";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Aside from "./aside";
import { AppDispatch, useAppSelector } from "@/data/redux-store";
import { resetBasket } from "@/data/slice";
import { useDispatch } from "react-redux";

export default function Cart() {
  //redux variables
  const basket = useAppSelector((state) => state.persistedReducer.basket);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Navbar page={2} />
      <main className="bg-stone-100 w-screen min-h-screen overflow-x-hidden flex">
        <section className="flex flex-col gap-5 items-center pt-12 justify-start w-screen md:w-2/3 h-auto bg-stone-100 overflow-x-hidden px-4 md:px-10 pb-20">
          <h1 className="text-2xl sm:text-5xl self-start px-5 py-10">
            My wishlist!
          </h1>
          <hr className="w-full h-3px -mt-10 bg-stone-400"></hr>
          {basket.length > 0 ? (
            basket.map((product) => (
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
                quantity={product.quantity}
              />
            ))
          ) : (
            <div className="w-full h-full flex flex-col gap-10 justify-center items-center scale-90 md:scale-100">
              <svg
                width="632"
                height="512"
                viewBox="0 0 732 512"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="732" height="512" fill="transparent" />
                <g id="undraw_shopping_bags_nbp4 1" clipPath="url(#clip0_0_1)">
                  <g
                    id="man-head"
                    className="animate-bop origin-bottom"
                    style={{ transformBox: "fill-box" }}
                  >
                    <path
                      id="Vector"
                      d="M463.05 60.8655C477.144 60.8655 488.57 49.4398 488.57 35.3455C488.57 21.2512 477.144 9.8255 463.05 9.8255C448.956 9.8255 437.53 21.2512 437.53 35.3455C437.53 49.4398 448.956 60.8655 463.05 60.8655Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_2"
                      d="M456.55 37.3455L460.07 41.6155L466.43 30.4755C466.43 30.4755 474.55 30.8955 474.55 24.8655C474.55 18.8355 482 18.6655 482 18.6655C482 18.6655 492.55 0.245523 470.7 5.09552C470.7 5.09552 455.54 -5.28448 448.01 3.58552C448.01 3.58552 424.9 15.2255 431.51 35.4855L442.5 56.3755L444.99 51.6455C444.99 51.6455 443.48 31.7955 456.55 37.3255L456.55 37.3455Z"
                      fill="#2F2E43"
                    />
                  </g>
                  <g id="man-torso">
                    <path
                      id="Vector_3"
                      d="M440.61 79.1155L466.22 87.5355V50.6655H442.98L440.61 79.1155Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_4"
                      d="M453.87 461.776H432.93V491.486H453.87V461.776Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_5"
                      d="M451.55 508.506C447.97 508.826 430.05 510.246 429.15 506.136C428.33 502.366 429.54 498.426 429.71 497.886C431.43 480.746 432.07 480.556 432.46 480.446C433.07 480.266 434.85 481.116 437.74 482.976L437.92 483.096L437.96 483.306C438.01 483.576 439.29 489.866 445.36 488.896C449.52 488.236 450.87 487.316 451.3 486.866C450.95 486.706 450.51 486.426 450.2 485.945C449.75 485.245 449.67 484.345 449.97 483.266C450.75 480.415 453.09 476.206 453.19 476.035L453.46 475.555L477.26 491.615L491.96 495.815C493.07 496.136 493.96 496.925 494.41 497.986C495.03 499.466 494.65 501.186 493.45 502.266C490.78 504.665 485.48 508.776 479.91 509.285C478.43 509.426 476.47 509.475 474.27 509.475C465.08 509.475 451.66 508.525 451.56 508.505L451.55 508.506Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_6"
                      d="M471.35 72.0255L441.2 56.0255C441.2 56.0255 408.71 103.506 413.2 129.226C417.7 154.946 425.68 202.826 425.68 202.826L492.19 205.636L480.58 111.346L471.35 72.0255Z"
                      fill="#E2E3E4"
                    />
                    <path
                      id="Vector_7"
                      d="M468.77 461.776H447.83V491.486H468.77V461.776Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_8"
                      d="M466.45 508.506C462.87 508.826 444.95 510.246 444.05 506.136C443.23 502.366 444.44 498.426 444.61 497.886C446.33 480.746 446.97 480.556 447.36 480.446C447.97 480.266 449.75 481.116 452.64 482.976L452.82 483.096L452.86 483.306C452.91 483.576 454.19 489.866 460.26 488.896C464.42 488.236 465.77 487.316 466.2 486.866C465.85 486.706 465.41 486.426 465.1 485.945C464.65 485.245 464.57 484.345 464.87 483.266C465.65 480.415 467.99 476.206 468.09 476.035L468.36 475.555L492.16 491.615L506.86 495.815C507.97 496.136 508.86 496.925 509.31 497.986C509.93 499.466 509.55 501.186 508.35 502.266C505.68 504.665 500.38 508.776 494.81 509.285C493.33 509.426 491.37 509.475 489.17 509.475C479.98 509.475 466.56 508.525 466.46 508.505L466.45 508.506Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_9"
                      d="M492.19 205.636L425.68 202.826C425.68 202.826 417.26 234.746 427.9 268.006L440.76 468.296H471.8L501.06 261.686L492.19 205.636Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_10"
                      d="M480.61 205.636L425.68 202.826C425.68 202.826 417.26 234.746 427.9 268.006L429.18 468.296H460.22L489.48 261.686L480.61 205.636Z"
                      fill="#2F2E43"
                    />
                  </g>
                  <g id="man-arm-bag">
                    <path
                      id="Vector_11"
                      d="M485.25 336.456C480.6 336.456 475.53 335.316 470.52 334.196C466.81 333.366 463.54 333.156 460.92 332.996C456.94 332.746 453.79 332.546 452.04 330.216C450.31 327.916 450.31 324.006 452.04 316.296C454.34 306.056 459.46 289.696 465.72 276.236C473.81 258.876 481.58 250.886 488.83 252.516C498.54 254.696 502.41 270.905 503.86 280.366C505.88 293.576 505.7 309.276 503.42 319.436C500.4 332.886 493.47 336.446 485.24 336.446L485.25 336.456ZM487.02 255.326C481.69 255.326 475.15 263.106 468.45 277.506C462.28 290.756 457.24 306.866 454.97 316.956C453.52 323.436 453.36 326.966 454.44 328.416C455.36 329.636 457.77 329.796 461.1 329.996C463.83 330.166 467.23 330.376 471.17 331.266C486.83 334.776 496.62 336.056 500.49 318.786C504.64 300.286 501.48 258.436 488.17 255.446C487.79 255.356 487.4 255.316 487.01 255.316L487.02 255.326Z"
                      fill="#DFDFE0"
                    />
                    <path
                      id="Vector_12"
                      d="M548.58 460.806L399.43 461.786L376.26 451.126L389.76 313.416L403.34 314.106L543.07 321.216L548.58 460.806Z"
                      fill="#6C63FF"
                    />
                    <path
                      id="Vector_13"
                      d="M487.5 311.056C484.73 311.056 481.7 310.376 478.72 309.706C476.51 309.206 474.56 309.086 472.99 308.986C470.62 308.836 468.74 308.716 467.7 307.326C466.67 305.956 466.67 303.625 467.7 299.026C469.07 292.916 472.12 283.166 475.86 275.146C480.68 264.796 485.32 260.036 489.64 261.005C495.43 262.305 497.74 271.965 498.6 277.616C499.8 285.496 499.7 294.856 498.34 300.906C496.54 308.926 492.41 311.046 487.5 311.046L487.5 311.056ZM488.56 262.686C485.38 262.686 481.48 267.326 477.49 275.916C473.81 283.816 470.8 293.416 469.46 299.436C468.59 303.296 468.5 305.406 469.15 306.266C469.7 306.996 471.13 307.086 473.12 307.206C474.75 307.306 476.77 307.436 479.12 307.966C488.45 310.056 494.29 310.816 496.6 300.526C499.07 289.496 497.19 264.546 489.26 262.766C489.03 262.716 488.8 262.686 488.57 262.686H488.56Z"
                      fill="#DFDFE0"
                    />
                    <path
                      id="Vector_14"
                      d="M525.25 385.206L436.33 385.786L422.51 379.436L430.56 297.326L438.66 297.736L521.97 301.976L525.25 385.206Z"
                      fill="#E2E3E4"
                    />
                    <path
                      id="uuid-2d2c280e-4908-4ffb-baf5-3f13ad86c3e1-150"
                      d="M492.7 255.636C494.19 262.956 491.46 269.646 486.62 270.576C481.78 271.506 476.65 266.316 475.17 258.996C474.54 256.076 474.64 253.056 475.46 250.176L469.57 219.066L484.79 216.656L488.98 247.576C490.87 249.936 492.14 252.696 492.7 255.636Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_15"
                      d="M433 71.4455C433 71.4455 455.26 68.6255 457.92 75.2755C460.58 81.9255 491.84 240.216 491.84 240.216H471.22L433 71.4455Z"
                      fill="#E2E3E4"
                    />
                    <path
                      id="Vector_16"
                      opacity="0.2"
                      d="M399.43 461.786L376.26 451.126L389.76 313.416L403.34 314.106L399.43 461.786Z"
                      fill="#272223"
                    />
                    <path
                      id="Vector_17"
                      opacity="0.2"
                      d="M436.33 385.786L422.51 379.436L430.56 297.326L438.66 297.736L436.33 385.786Z"
                      fill="#272223"
                    />
                    <path
                      id="Vector_18"
                      d="M278.34 105.326L255.98 112.676V80.4955H276.27L278.34 105.326Z"
                      fill="#F8A8AB"
                    />
                  </g>
                  <g id="girl-head">
                    <path
                      id="Vector_19"
                      d="M258.75 89.4055C271.055 89.4055 281.03 79.4304 281.03 67.1255C281.03 54.8206 271.055 44.8455 258.75 44.8455C246.445 44.8455 236.47 54.8206 236.47 67.1255C236.47 79.4304 246.445 89.4055 258.75 89.4055Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_20"
                      d="M264.87 64.9155C261.14 64.8055 258.69 61.0355 257.24 57.5955C255.79 54.1555 254.3 50.2055 250.84 48.7855C248.01 47.6255 243.02 55.4755 240.79 53.3855C238.46 51.2055 240.73 40.0155 243.2 38.0055C245.67 35.9955 249.05 35.6055 252.23 35.4555C259.99 35.0955 267.8 35.7255 275.41 37.3155C280.12 38.2955 284.96 39.7755 288.36 43.1755C292.66 47.4955 293.76 54.0055 294.07 60.0955C294.39 66.3255 294.03 72.8455 291 78.2955C287.97 83.7455 281.63 87.7655 275.55 86.3755C274.94 83.0755 275.56 79.6855 275.8 76.3255C276.03 72.9755 275.79 69.3555 273.74 66.6855C271.69 64.0155 267.32 62.9555 264.94 65.3255"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_21"
                      d="M292.28 72.6355C294.51 71.0055 297.18 69.6355 299.92 69.9755C302.88 70.3355 305.39 72.7755 306.15 75.6655C306.91 78.5555 306.06 81.7355 304.22 84.0955C302.39 86.4555 299.66 88.0155 296.78 88.7955C295.11 89.2455 293.28 89.4355 291.69 88.7555C289.35 87.7455 288.08 84.7555 289 82.3755"
                      fill="#2F2E43"
                    />
                  </g>
                  <g id="girl-torso">
                    <path
                      id="Vector_22"
                      d="M270.96 463.426H250.02V493.136H270.96V463.426Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_23"
                      d="M229.62 511.116C227.42 511.116 225.46 511.066 223.98 510.926C218.42 510.415 213.11 506.306 210.44 503.906C209.24 502.826 208.86 501.106 209.48 499.626C209.93 498.566 210.82 497.766 211.93 497.456L226.63 493.255L250.43 477.195L250.7 477.676C250.8 477.855 253.14 482.066 253.92 484.906C254.22 485.986 254.14 486.886 253.69 487.586C253.38 488.066 252.94 488.346 252.59 488.506C253.02 488.956 254.37 489.876 258.53 490.536C264.6 491.496 265.88 485.206 265.93 484.946L265.97 484.736L266.15 484.616C269.04 482.756 270.82 481.906 271.43 482.086C271.81 482.196 272.45 482.396 274.18 499.526C274.35 500.066 275.56 504.006 274.74 507.776C273.85 511.876 255.93 510.466 252.34 510.146C252.24 510.156 238.82 511.116 229.63 511.116L229.62 511.116Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_24"
                      d="M330.581 440.073L312.813 451.154L328.535 476.363L346.303 465.282L330.581 440.073Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_25"
                      d="M306.98 507.046C304.52 507.046 302.26 506.746 300.65 506.466C299.07 506.186 297.83 504.926 297.57 503.346C297.39 502.206 297.72 501.056 298.5 500.206L308.75 488.866L320.45 462.646L320.93 462.906C321.11 463.006 325.32 465.336 327.49 467.336C328.32 468.096 328.73 468.906 328.71 469.736C328.7 470.316 328.48 470.776 328.26 471.106C328.86 471.266 330.49 471.326 334.37 469.686C340.03 467.296 337.79 461.276 337.69 461.026L337.61 460.826L337.7 460.636C339.17 457.526 340.22 455.866 340.84 455.696C341.23 455.586 341.87 455.416 352.4 469.046C352.83 469.406 355.94 472.116 357.24 475.746C358.65 479.696 342.7 487.986 339.49 489.606C339.39 489.686 322.7 501.816 315.84 505.266C313.12 506.636 309.9 507.056 306.97 507.056L306.98 507.046Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_26"
                      d="M286.38 214.976H227.75L222.43 269.516L245.71 471.036H275.64L263.67 354.646L312.22 459.726L338.82 441.106L300.91 343.006C300.91 343.006 314.45 257.546 303.81 236.256C293.17 214.966 286.38 214.976 286.38 214.976Z"
                      fill="#2F2E43"
                    />
                    <path
                      id="Vector_27"
                      d="M315.54 218.296H222.43L250.36 97.9155H290.93L315.54 218.296Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <g
                    id="girl-arm"
                    className="animate-wave origin-top-right"
                    style={{ transformBox: "fill-box" }}
                  >
                    <path
                      id="uuid-cf48ccb0-01b2-4d13-8a95-29595d168237-151"
                      d="M199.3 95.5455C197.81 88.2255 200.54 81.5355 205.38 80.6055C210.22 79.6755 215.35 84.8655 216.83 92.1855C217.46 95.1055 217.36 98.1255 216.54 101.005L222.43 132.115L207.21 134.525L203.02 103.605C201.13 101.245 199.86 98.4855 199.3 95.5455Z"
                      fill="#F8A8AB"
                    />
                    <path
                      id="Vector_28"
                      d="M289.94 97.9155H254.16L230.04 146.156L220.94 110.006L200.95 112.126C200.95 112.126 205.68 182.756 226.35 180.366C247.02 177.976 295.23 114.346 289.93 97.9055L289.94 97.9155Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <g
                    id="arm-and-bag"
                    className="animate-sway origin-top"
                    style={{ transformBox: "fill-box" }}
                  >
                    <g id="girl-bag">
                      <path
                        id="Vector_29"
                        d="M323.73 326.726C320.96 326.726 317.93 326.046 314.95 325.376C312.74 324.876 310.79 324.756 309.22 324.656C306.85 324.506 304.97 324.386 303.93 322.996C302.9 321.626 302.9 319.296 303.93 314.696C305.3 308.586 308.35 298.836 312.09 290.816C316.91 280.466 321.55 275.706 325.87 276.676C331.66 277.976 333.97 287.635 334.83 293.285C336.03 301.165 335.93 310.525 334.57 316.576C332.77 324.595 328.64 326.716 323.73 326.716L323.73 326.726ZM324.79 278.356C321.61 278.356 317.71 282.996 313.72 291.586C310.04 299.486 307.03 309.086 305.69 315.106C304.82 318.966 304.73 321.076 305.38 321.936C305.93 322.666 307.36 322.756 309.35 322.876C310.98 322.976 313 323.106 315.35 323.636C324.68 325.726 330.52 326.486 332.83 316.196C335.3 305.166 333.42 280.216 325.49 278.436C325.26 278.386 325.03 278.356 324.8 278.356H324.79Z"
                        fill="#DFDFE0"
                      />
                      <path
                        id="Vector_30"
                        d="M361.49 400.866L272.57 401.446L258.75 395.096L266.8 312.986L274.9 313.396L358.21 317.636L361.49 400.866Z"
                        fill="#E2E3E4"
                      />
                      <path
                        id="Vector_31"
                        opacity="0.2"
                        d="M272.57 401.446L258.75 395.096L266.8 312.986L274.9 313.396L272.57 401.446Z"
                        fill="#272223"
                      />
                    </g>
                    <g id="girl-arm-bag">
                      <path
                        id="uuid-716933f9-4240-4e35-a02b-a709ca9af65f-152"
                        d="M329.89 281.365C331.38 288.686 328.65 295.376 323.81 296.305C318.97 297.235 313.84 292.045 312.36 284.726C311.73 281.805 311.83 278.786 312.65 275.906L306.76 244.796L321.98 242.385L326.17 273.305C328.06 275.665 329.33 278.425 329.89 281.365Z"
                        fill="#F8A8AB"
                      />
                      <path
                        id="Vector_32"
                        d="M269.54 97.9155C269.54 97.9155 289.87 97.0555 290.93 97.9155C296.48 102.446 329.03 265.956 329.03 265.956H308.41L269.54 97.9155Z"
                        fill="#6C63FF"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect width="731.67" height="511.116" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="text-xl md:text-3xl text-center">
                Pick something of your liking from the{" "}
                <Link href="/browse" className="text-slate-400">
                  <em>Browse</em>
                </Link>{" "}
                page.
              </h1>
            </div>
          )}

          {basket.length > 0 && (
            <>
              <hr className="w-full h-1 bg-stone-300"></hr>
              <div className="w-full text-right px-2 text-xl">
                Total:&nbsp;
                {basket
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
                $
              </div>
              <hr className="w-full h-1 bg-stone-300"></hr>
              <span className="w-full h-12 md:h-20 flex justify-center items-center gap-5 ">
                <button className="w-full h-full bg-stone-300 rounded-xl text-md md:text-xl hover:bg-stone-400 hover:text-stone-100">
                  Go to payments
                </button>
                <button
                  className="w-full h-full bg-stone-300 rounded-xl text-md md:text-xl hover:bg-stone-400 hover:text-stone-100"
                  onClick={() => dispatch(resetBasket(basket))}
                >
                  Remove All
                </button>
              </span>
            </>
          )}
        </section>
        <Aside />
      </main>
      <Footer />
    </>
  );
}
