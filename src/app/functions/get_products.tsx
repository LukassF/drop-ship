import { prisma } from "@/db";

export default function getProduct() {
  return prisma.product.findMany();
}
