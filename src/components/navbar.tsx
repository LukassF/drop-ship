import Link from "next/link";

type navbarProps = {
  page: number;
};

export default function Navbar({ page }: navbarProps) {
  const linkList = [
    { id: 1, href: "/browse", icon: "magnifying-glass", title: "Browse" },
    { id: 2, href: "/cart", icon: "shopping-basket", title: "Cart" },
    { id: 3, href: "/about", icon: "people-group", title: "About" },
    { id: 4, href: "/trending", icon: "arrow-trend-up", title: "Trending" },
  ];
  return (
    <nav className="flex justify-between items-center px-5 md:px-10 py-2 fixed w-full z-50 text-slate-100">
      <h1 className="text-xl">
        <Link href="/">Drop&Ship</Link>
      </h1>
      <div className="flex gap-0 sm:gap-5 items-center">
        {linkList.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`flex gap-2 items-center p-3 sm:px-4 sm:py-2 rounded-3xl hover:shadow-md hover:bg-neutral-900 hover:bg-opacity-5 transition-all ${
              link.id === page
              // ? "shadow-md shadow-white hover:shadow-md hover:shadow-white"
              // : ""
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
