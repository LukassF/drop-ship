import { Designer, Product } from "@prisma/client";

export type shopProps = {
  products: (Product & { Designer: Designer | null })[];
};

export type cardProps = Omit<cartItemProps, "quantity"> & {
  Designer: DesignerCardProps | null;
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
  quantity: number;
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
