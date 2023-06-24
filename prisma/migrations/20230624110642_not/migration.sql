/*
  Warnings:

  - Made the column `image` on table `Designer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Designer" ALTER COLUMN "image" SET NOT NULL;
