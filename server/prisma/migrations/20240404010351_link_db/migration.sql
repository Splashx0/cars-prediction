-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT DEFAULT '',

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marque" (
    "id" SERIAL NOT NULL,
    "marque" TEXT NOT NULL,

    CONSTRAINT "Marque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modele" (
    "id" SERIAL NOT NULL,
    "modele" TEXT NOT NULL,
    "marqueId" INTEGER,

    CONSTRAINT "Modele_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "Modele" ADD CONSTRAINT "Modele_marqueId_fkey" FOREIGN KEY ("marqueId") REFERENCES "Marque"("id") ON DELETE SET NULL ON UPDATE CASCADE;
