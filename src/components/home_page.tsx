import Link from "next/link";
import Footer from "./footer";

export default function HomePage() {
  return (
    <main className="h-screen w-screen mx-0 px-0 overflow-x-hidden">
      <section className="h-init-screen/2 xl:h-init-screen w-full overflow-hidden relative bg-amber-400 mt-12 xl:mt-0 snap-center">
        <div className="absolute w-full h-full bg-stone-900 bg-opacity-30 lg:bg-opacity-0 z-10"></div>
        <article className="w-full h-full absolute xl:left-1/4 bg-center bg-cover bg-[url('https://agentestudio.com/uploads/post/image/91/main_fashion-website-design-cover.jpg')]"></article>
        <div className=" z-20 absolute top-1/2 left-1/2 lg:left-1/4 transfrom -translate-y-1/2 -translate-x-1/2 lg:-translate-x-1/3 text-slate-100 w-full md:w-1/2 px-8 flex flex-col gap-2 xl:gap-16 items-center md:items-start">
          <h1 className="text-3xl xl:text-6xl">
            Check out our most popular collection!
          </h1>
          <span className="break-all text-xs md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            debitis ipsam cupiditate doloribus, temporibus accusamus iusto
            aspernatur pariatur quod laboriosam dolorum. Aliquam corporis quo id
          </span>
          <Link
            href="/browse"
            className="cursor-pointer w-2/3 rounded-xl border border-slate-100 px-2 py-3 text-lg hover:bg-slate-100 hover:text-slate-800 transition-all text-center"
          >
            See more
          </Link>
        </div>
      </section>

      <section className="w-screen h-init-screen/2 xl:h-init-screen overflow-hidden relative snap-center cursor-pointer group">
        <Link
          href="/browse"
          className="z-40 absolute w-full h-full bg-transparent"
        ></Link>
        <div className="absolute w-full h-full bg-stone-900 bg-opacity-40 z-10"></div>
        <article className="z-2 group-hover:scale-110 w-full h-full bg-cover bg-center bg-[url('https://cdn.shopify.com/s/files/1/0117/2006/5081/articles/9.jpg?v=1528970012')] transition-all duration-500"></article>
        <div className="z-20 absolute top-1/2 left-1/2 transfrom -translate-y-1/2 -translate-x-1/2 text-slate-100 w-full md:w-1/2 px-8 flex flex-col gap-5 items-center">
          <h1 className="text-3xl xl:text-6xl">
            Get up to <span className="text-green-400">20%</span> on
            women&apos;s semi-formal!
          </h1>
          <span className="break-all text-xs md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            officia, amet obcaecati sapiente minus, cum tempora voluptatum aut
            iste eum fugit perspiciatis aperiam voluptates, dolores ut atque
            animi vitae maiores!
          </span>
        </div>
      </section>

      <section className="w-screen h-init-screen/2 xl:h-init-screen overflow-hidden relative snap-center cursor-pointer group">
        <Link
          href="/browse"
          className="z-40 absolute w-full h-full bg-transparent"
        ></Link>
        <div className="absolute w-full h-full bg-stone-900 bg-opacity-40 z-10"></div>
        <article className="z-2 group-hover:scale-110 w-full h-full bg-cover bg-[url('https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4107fb06-bcd7-11ed-b386-2854db7a4e6a.jpg?crop=4005%2C2670%2C0%2C516')] transition-all duration-500"></article>

        <div className="absolute top-1/2 left-1/2 xl:top-2/3 lg:left-20 transfrom -translate-y-1/2 -translate-x-1/2 lg:-translate-x-0 text-slate-100 w-full md:w-1/2 px-8 flex flex-col gap-5 items-center z-20">
          <h1 className="text-3xl xl:text-6xl">
            Men&apos;s formal clothes, up to
            <span className="text-green-400"> 15%</span> cheaper, don&apos;t
            wait any longer!
          </h1>
          <span className="break-all text-xs md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium velit dicta nobis minima nulla possimus facere,
            corporis, error obcaecati magni quos nihil quo doloremque rerum
            excepturi quae culpa commodi. Dignissimos.
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
