-- CreateTable
CREATE TABLE "Sellers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "gst_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "phone_number" VARCHAR NOT NULL,

    CONSTRAINT "Sellers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "product_images" TEXT[],
    "discount_price" INTEGER NOT NULL,
    "is_discounted" BOOLEAN NOT NULL DEFAULT true,
    "category" TEXT NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sellers_email_key" ON "Sellers"("email");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
