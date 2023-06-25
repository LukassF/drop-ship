import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { prisma } from "@/db";
import Designer from "./designer-card";

const sponsors = [
  "Lueilwitz Inc",

  "McLaughlin Group",

  "Kreiger, Altenwerth and Kuhn",

  "Graham - Waelchi",

  "Ryan Group",

  "Wilderman - Raynor",

  "Ferry - Mohr",

  "Leffler - Mueller",

  "White and Sons",

  "Veum - Cassin",

  "Dickens Inc",

  "Langosh and Sons",

  "Stamm, Mills and Fadel",

  "Bergstrom - Beahan",

  "Gleason, Pacocha and Kunde",

  "Roberts LLC",

  "Medhurst Inc",

  "Johns, Ondricka and Leffler",

  "Cremin - Reynolds",

  "Connelly - Funk",

  "McCullough, Adams and Fahey",

  "Kemmer, Boyer and Stoltenberg",

  "Russel - Mitchell",

  "Rogahn, Parker and Walker",

  "Schiller - Ziemann",

  "Johns, Wilderman and Barrows",

  "Wuckert Group",

  "Fritsch - Torp",

  "Schimmel and Sons",

  "Durgan - Lind",

  "Fadel - Walker",

  "Schmeler - Jacobs",

  "Rippin LLC",

  "Strosin - Abernathy",

  "McKenzie, Koss and Lindgren",

  "Reinger, Swift and Spencer",

  "Hilll - Reilly",

  "Kilback Inc",

  "Homenick, Spinka and Bergnaum",

  "Marks Group",
];

export default async function About() {
  const designers = await prisma.designer.findMany();

  return (
    <>
      <Navbar page={3} />
      <main className="min-h-screen p-4 pt-20 bg-stone-100 flex flex-col gap-16 pb-10 sm:pb-20">
        <section className="w-full h-4screen/5 flex flex-col-reverse md:flex-row">
          <article className="w-full h-full flex flex-col gap-5 md:gap-8 justify-center items-start p-5 md:p-20">
            <h1 className="text-xl sm:text-3xl text-stone-900">
              <b>Highest quality fabrics!</b>
            </h1>
            <p className="text-stone-500 text-xs sm:text-sm md:text-md break-all">
              <em>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
                voluptas veritatis quo ratione reiciendis itaque officia quaerat
                adipisicing elit. Iste id delectus nesciunt explicabo obcaecati
                saepe illo magni repellat aliquid aliquam a!
              </em>
            </p>
            <p className="text-xs sm:text-sm md:text-md">
              Quos quas ipsam odit aspernatur, necessitatibus fugiat voluptas
              porro et quasi libero placeat rerum quisquam impedit. Amet
              consectetur, adipisicing elit. Fugiat neque quod odio sint vitae
              qui temporibus voluptates! Ut, architecto tempora! Quam cumque non
              ut repellendus neque eum officia alias vel!
            </p>
          </article>
          <article className="h-full w-full group overflow-hidden">
            <div className="w-full h-full bg-cover bg-center bg-[url('https://cdn.shopify.com/s/files/1/0482/8810/4600/files/LoomcraftTextile-155575-Types-Upholstery-Fabrics-Blogbanner1.jpg?v=1646662297')] group-hover:scale-110 transition-all duration-500"></div>
          </article>
        </section>
        <hr className="bg-stone-400 h-1 rounded-full"></hr>
        <section className="w-full min-h-screen/2">
          <h1 className="w-full text-center text-xl sm:text-3xl mb-2 sm:mb-10">
            <b>Our Designers!</b>
          </h1>
          <article className="w-full flex justify-center items-center flex-wrap gap-3 gap-y-6">
            {designers.map((designer) => (
              <Designer
                key={designer.id}
                name={designer.name}
                id={designer.id}
                since={designer.since}
                productsDesigned={designer.productsDesigned}
                hierarchy={designer.hierarchy}
                image={designer.image}
              />
            ))}
          </article>
        </section>
        <hr className="bg-stone-400 h-1 rounded-full"></hr>
        <section>
          <h1 className="text-xl sm:text-3xl w-full text-center mb-10">
            <b>Sponsorships and Collabs!</b>
          </h1>
          <ul className="text-xs lg:text-sm text-stone-600 w-full sm:h-80 lg:h-210px flex flex-col items-center flex-wrap px-6">
            {sponsors.map((sponsor) => (
              <li
                className="w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left cursor-pointer hover:text-stone-900"
                key={sponsor}
              >
                {sponsor}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
