import { Product } from "@prisma/client";

export type shopProps = {
  products: Product[];
  addToCart: (id: number) => void;
};

// export type cardProps = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   isTrending?: boolean;
//   inBasket: boolean | null;
//   addToCart: (id: number) => void;
// };
type cardPropsRemaining = {
  inBasket: boolean | null;
  addToCart: (id: number) => void;
};

export type cardProps = Omit<cartItemProps, "gender" | "style" | "type"> &
  cardPropsRemaining;

export type cartItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isTrending?: boolean;
  gender: string;
  style: string;
  type: string;
};

export type categoriesType = {
  gender: string;
  style: string;
  type: string;
};
