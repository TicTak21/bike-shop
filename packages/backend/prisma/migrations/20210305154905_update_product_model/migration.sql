/*
  Warnings:

  - Made the column `price` on table `Product` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `price` FLOAT NOT NULL DEFAULT 0,
    MODIFY `categoryId` VARCHAR(191),
    MODIFY `subcategoryId` VARCHAR(191);
