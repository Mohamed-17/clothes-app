-- CreateEnum
CREATE TYPE "ProductSizes" AS ENUM ('SMALL', 'MEDUIM', 'LARGE');

-- CreateEnum
CREATE TYPE "ProdcutColors" AS ENUM ('WHITE', 'BLACK', 'BLUE');

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" "ProductSizes" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "name" "ProdcutColors" NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Color" ADD CONSTRAINT "Color_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
