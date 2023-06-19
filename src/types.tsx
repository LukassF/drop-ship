import { Product } from "@prisma/client";

export type shopProps = {
  products: Product[];
  toggleCart: (id: number, isTrue: boolean) => void;
};

export type cardProps = Omit<cartItemProps, "gender" | "style" | "type"> & {
  inBasket: boolean | null;
};

export type cartItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isTrending?: boolean;
  gender: string;
  style: string;
  type: string;
  toggleCart: (id: number, isTrue: boolean) => void;
};

export type categoriesType = {
  gender: string;
  style: string;
  type: string;
};

export type name = {
  name: string;
  surname: string;
};
