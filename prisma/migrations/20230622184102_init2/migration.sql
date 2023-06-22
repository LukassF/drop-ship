-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "gender" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isTrending" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "inBasket" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
