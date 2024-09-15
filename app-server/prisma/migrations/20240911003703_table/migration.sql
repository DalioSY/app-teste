-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "unit" INTEGER NOT NULL,
    "delivery" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
