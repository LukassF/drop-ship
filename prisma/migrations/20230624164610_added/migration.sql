-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "designerId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_designerId_fkey" FOREIGN KEY ("designerId") REFERENCES "Designer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
