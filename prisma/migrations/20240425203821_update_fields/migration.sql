/*
  Warnings:

  - You are about to drop the column `content` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "description" TEXT;
