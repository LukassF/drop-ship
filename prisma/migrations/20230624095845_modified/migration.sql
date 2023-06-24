/*
  Warnings:

  - Changed the type of `since` on the `Designer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Designer" DROP COLUMN "since",
ADD COLUMN     "since" INTEGER NOT NULL;
