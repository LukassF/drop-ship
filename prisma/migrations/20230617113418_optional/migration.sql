/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "gender" TEXT,
    "style" TEXT,
    "type" TEXT,
    "isTrending" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "inBasket" BOOLEAN
);
INSERT INTO "new_Product" ("id", "image", "inBasket", "isTrending", "name", "price") SELECT "id", "image", "inBasket", "isTrending", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
