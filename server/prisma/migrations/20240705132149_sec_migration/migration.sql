-- CreateTable
CREATE TABLE "users_table" (
    "userid" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_emailAddress_key" ON "users_table"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "users_table_password_key" ON "users_table"("password");
