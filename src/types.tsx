import { Product } from "@prisma/client";

export type shopProps = {
  products: Product[];
  addToCart: (id: number) => void;
};

export type cardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isTrending?: boolean;
  inBasket: boolean | null;
  addToCart: (id: number) => void;
};
