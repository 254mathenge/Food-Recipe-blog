-- CreateTable
CREATE TABLE "blogs_table" (
    "blogid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogs_table_pkey" PRIMARY KEY ("blogid")
);

-- AddForeignKey
ALTER TABLE "blogs_table" ADD CONSTRAINT "blogs_table_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users_table"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
