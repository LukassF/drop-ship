-- CreateTable
CREATE TABLE "Designer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "since" TIMESTAMP(3) NOT NULL,
    "productsDesigned" INTEGER NOT NULL,
    "hierarchy" TEXT NOT NULL,

    CONSTRAINT "Designer_pkey" PRIMARY KEY ("id")
);
