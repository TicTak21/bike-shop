-- CreateTable
CREATE TABLE `Category` (
    `categoryId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `urlSlug` VARCHAR(100),
    `description` TEXT,
    `sabcategoryId` VARCHAR(191) NOT NULL,
UNIQUE INDEX `Category.name_unique`(`name`),

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryImage` (
    `categoryImageId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
INDEX `fk_category_images_categories1_idx`(`categoryId`),

    PRIMARY KEY (`categoryImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `totalPrice` FLOAT DEFAULT 0,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserToken` (
    `tokenId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `userIp` VARCHAR(255) NOT NULL,
    `userAgent` VARCHAR(255) NOT NULL,
    `expires` BIGINT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
INDEX `fk_user_token_users1_idx`(`userId`),
UNIQUE INDEX `UserToken_userId_unique`(`userId`),

    PRIMARY KEY (`tokenId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `price` FLOAT DEFAULT 0,
    `description` TEXT,
    `urlSlug` VARCHAR(100),
    `views` MEDIUMINT NOT NULL DEFAULT 0,
    `rating` MEDIUMINT NOT NULL DEFAULT 0,
    `categoryId` VARCHAR(191) NOT NULL,
    `subcategoryId` VARCHAR(191) NOT NULL,
INDEX `fk_products_categories1_idx`(`categoryId`),
INDEX `fk_products_subcategories1_idx`(`subcategoryId`),

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductImage` (
    `productImageId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
INDEX `fk_product_images_products1_idx`(`productId`),

    PRIMARY KEY (`productImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategory` (
    `subcategoryId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `urlSlug` VARCHAR(100),
    `description` TEXT,
    `parentCategoryId` VARCHAR(191) NOT NULL,
UNIQUE INDEX `Subcategory.name_unique`(`name`),
INDEX `fk_subcategories_categories1_idx`(`parentCategoryId`),

    PRIMARY KEY (`subcategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubcategoryImage` (
    `subcategoryImageId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `subcategoryId` VARCHAR(191) NOT NULL,
INDEX `fk_subcategory_images_subcategories1_idx`(`subcategoryId`),

    PRIMARY KEY (`subcategoryImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `userId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(16),
    `email` VARCHAR(100) NOT NULL,
    `password_hash` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` VARCHAR(20) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
UNIQUE INDEX `User.email_unique`(`email`),
INDEX `fk_users_orders_idx`(`orderId`),

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserImage` (
    `user_image_id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(45),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
INDEX `fk_user_images_users1_idx`(`userId`),

    PRIMARY KEY (`user_image_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoryImage` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserToken` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`subcategoryId`) REFERENCES `Subcategory`(`subcategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD FOREIGN KEY (`productId`) REFERENCES `Product`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategory` ADD FOREIGN KEY (`parentCategoryId`) REFERENCES `Category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubcategoryImage` ADD FOREIGN KEY (`subcategoryId`) REFERENCES `Subcategory`(`subcategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`orderId`) REFERENCES `Order`(`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserImage` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
