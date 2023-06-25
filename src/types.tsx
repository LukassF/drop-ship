import { Designer, Product } from "@prisma/client";

export type shopProps = {
  products: (Product & { Designer: Designer | null })[];
  toggleCart: (id: number, isTrue: boolean) => void;
};

export type cardProps = Omit<cartItemProps, "gender" | "style" | "type"> & {
  inBasket: boolean | null;
} & { Designer: DesignerCardProps | null };

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

export type navbarProps = {
  page: number;
};

export interface DesignerCardProps {
  id: number;
  name: string;
  since: number;
  productsDesigned: number;
  hierarchy: string;
  image: string;
}
