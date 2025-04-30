-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Whiteboard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Whiteboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drawing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "DrawingData" JSONB NOT NULL,

    CONSTRAINT "Drawing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OwnedWhiteboards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_OwnedWhiteboards_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_OwnedDrawings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_OwnedDrawings_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OwnedWhiteboards_B_index" ON "_OwnedWhiteboards"("B");

-- CreateIndex
CREATE INDEX "_OwnedDrawings_B_index" ON "_OwnedDrawings"("B");

-- AddForeignKey
ALTER TABLE "_OwnedWhiteboards" ADD CONSTRAINT "_OwnedWhiteboards_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnedWhiteboards" ADD CONSTRAINT "_OwnedWhiteboards_B_fkey" FOREIGN KEY ("B") REFERENCES "Whiteboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnedDrawings" ADD CONSTRAINT "_OwnedDrawings_A_fkey" FOREIGN KEY ("A") REFERENCES "Drawing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnedDrawings" ADD CONSTRAINT "_OwnedDrawings_B_fkey" FOREIGN KEY ("B") REFERENCES "Whiteboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
