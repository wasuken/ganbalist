-- CreateTable
CREATE TABLE "GanbaList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "GanbaList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GanbaItem" (
    "id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GanbaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GanbaDoList" (
    "id" SERIAL NOT NULL,
    "do_dt" TIMESTAMP(3) NOT NULL,
    "list_id" INTEGER NOT NULL,

    CONSTRAINT "GanbaDoList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GanbaDoItem" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "do_list_id" INTEGER NOT NULL,
    "do_dt" TIMESTAMP(3),
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GanbaDoItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GanbaItem" ADD CONSTRAINT "GanbaItem_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "GanbaList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanbaDoList" ADD CONSTRAINT "GanbaDoList_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "GanbaList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanbaDoItem" ADD CONSTRAINT "GanbaDoItem_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "GanbaItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanbaDoItem" ADD CONSTRAINT "GanbaDoItem_do_list_id_fkey" FOREIGN KEY ("do_list_id") REFERENCES "GanbaDoList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
