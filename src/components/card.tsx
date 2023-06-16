import Link from "next/link";

type cardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isTrending?: boolean;
};

export default function Card(props: cardProps) {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div
      className="overflow-hidden relative h-500px w-full sm:w-96  shrink-0 sm:rounded-lg bg-cover bg-center  group "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute w-full h-full bg-stone-900 bg-opacity-40 z-1 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
        <header className="flex justify-between p-2 z-20 transfrom -translate-y-full group-hover:-translate-y-0 transition-all duration-500">
          <button className="w-12 h-12 rounded-2xl bg-blue-500  opacity-60 hover:opacity-90 transition-all duration-300">
            <i aria-hidden className="fa fa-shopping-cart text-slate-50"></i>
          </button>
          {props.isTrending && (
            <Link
              href="/trending"
              className="w-12 h-12 rounded-2xl bg-green-300  opacity-60 hover:opacity-90 transition-all duration-300 flex items-center justify-center"
            >
              <i
                aria-hidden
                className="fa fa-arrow-trend-up text-slate-50 text-xl"
              ></i>
            </Link>
          )}
        </header>
        <footer className="p-4 flex flex-col gap-4 z-20 transfrom translate-y-full group-hover:translate-y-0 transition-all duration-500">
          <span className="flex justify-between text-2xl text-slate-50">
            <p>{props.name}</p>
            <p>{props.price}$</p>
          </span>
          <p className="text-sm text-stone-200 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            consequatur fuga minima pariatur fugiat sunt explicabo facere iusto
            eligendi, ipsum illum vero eaque nihil harum accusantium
            reprehenderit, beatae quo exercitationem?
          </p>
          <span className="w-full flex justify-evenly items-center">
            {sizes.map((size) => (
              <button className=" w-10 h-10 bg-stone-900 rounded-3xl text-slate-100 hover:bg-stone-100 hover:text-stone-900 transition-all duration-300">
                {size}
              </button>
            ))}
          </span>
        </footer>
      </div>
    </div>
  );
}
