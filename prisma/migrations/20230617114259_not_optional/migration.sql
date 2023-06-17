/*
  Warnings:

  - Made the column `gender` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `inBasket` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `style` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "gender" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isTrending" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "inBasket" BOOLEAN NOT NULL
);
INSERT INTO "new_Product" ("gender", "id", "image", "inBasket", "isTrending", "name", "price", "style", "type") SELECT "gender", "id", "image", "inBasket", "isTrending", "name", "price", "style", "type" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
