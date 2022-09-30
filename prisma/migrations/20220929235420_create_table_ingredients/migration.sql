-- CreateTable
CREATE TABLE "ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "isOrganic" TEXT NOT NULL,
    "certificate" TEXT NOT NULL,
    "invoice" TEXT NOT NULL,
    "buyDate" TIMESTAMP(3) NOT NULL,
    "productBatch" TEXT NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_productBatch_key" ON "ingredients"("productBatch");
