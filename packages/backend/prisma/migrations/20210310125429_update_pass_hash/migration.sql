/*
  Warnings:

  - You are about to drop the column `password_hash` on the `User` table. All the data in the column will be lost.
  - The migration will change the primary key for the `UserImage` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_image_id` on the `UserImage` table. All the data in the column will be lost.
  - Added the required column `userImageId` to the `UserImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `password_hash`,
    ADD COLUMN     `passwordHash` VARCHAR(100);

-- AlterTable
ALTER TABLE `UserImage` DROP PRIMARY KEY,
    DROP COLUMN `user_image_id`,
    ADD COLUMN     `userImageId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userImageId`);
