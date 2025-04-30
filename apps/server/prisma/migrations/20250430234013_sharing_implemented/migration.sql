/*
  Warnings:

  - You are about to drop the `_OwnedDrawings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OwnedWhiteboards` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `WhiteboardId` to the `Drawing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Drawing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OwnerID` to the `Whiteboard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OwnedDrawings" DROP CONSTRAINT "_OwnedDrawings_A_fkey";

-- DropForeignKey
ALTER TABLE "_OwnedDrawings" DROP CONSTRAINT "_OwnedDrawings_B_fkey";

-- DropForeignKey
ALTER TABLE "_OwnedWhiteboards" DROP CONSTRAINT "_OwnedWhiteboards_A_fkey";

-- DropForeignKey
ALTER TABLE "_OwnedWhiteboards" DROP CONSTRAINT "_OwnedWhiteboards_B_fkey";

-- AlterTable
ALTER TABLE "Drawing" ADD COLUMN     "WhiteboardId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Whiteboard" ADD COLUMN     "OwnerID" TEXT NOT NULL;

-- DropTable
DROP TABLE "_OwnedDrawings";

-- DropTable
DROP TABLE "_OwnedWhiteboards";

-- CreateTable
CREATE TABLE "WhiteboardShare" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "WhiteboardId" TEXT NOT NULL,
    "SharerId" TEXT NOT NULL,
    "ReceiverId" TEXT NOT NULL,
    "EditAcces" BOOLEAN NOT NULL DEFAULT false,
    "SharedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WhiteboardShare_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Whiteboard" ADD CONSTRAINT "Whiteboard_OwnerID_fkey" FOREIGN KEY ("OwnerID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhiteboardShare" ADD CONSTRAINT "WhiteboardShare_WhiteboardId_fkey" FOREIGN KEY ("WhiteboardId") REFERENCES "Whiteboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhiteboardShare" ADD CONSTRAINT "WhiteboardShare_SharerId_fkey" FOREIGN KEY ("SharerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhiteboardShare" ADD CONSTRAINT "WhiteboardShare_ReceiverId_fkey" FOREIGN KEY ("ReceiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drawing" ADD CONSTRAINT "Drawing_WhiteboardId_fkey" FOREIGN KEY ("WhiteboardId") REFERENCES "Whiteboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
