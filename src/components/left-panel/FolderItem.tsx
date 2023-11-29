import { Dispatch, SetStateAction } from "react";
import { FileList, FolderMenu, NewItemForm } from "..";
import { FileObj } from "../../types";

export function FolderItem({
  item,
  newItem,
  setNewItem,
  openFolder,
  handleOpenFolder,
  fileStyles,
}: {
  item: FileObj;
  newItem: Record<string, string>;
  setNewItem: Dispatch<SetStateAction<Record<string, string>>>;
  openFolder: Record<string, boolean>;
  handleOpenFolder: (folderId: string) => void;
  fileStyles: string;
}) {
  return (
    <>
      <div
        className={`${fileStyles} group/item justify-between items-center relative`}
        onClick={() => handleOpenFolder(item.id)}
      >
        <div className="flex">
          <i
            className={`${
              openFolder[item.id] ? "ri-folder-open-fill" : "ri-folder-fill"
            } text-yellow-500`}
          ></i>

          <div className="py-0 pb-0 pl-1.5 font-semibold">{item.name}</div>
        </div>

        <div className="invisible group-hover/item:visible">
          <FolderMenu folder={item} setNewItem={setNewItem} />
        </div>
      </div>

      <div
        className={`ml-5 group-hover/panel:border-l group-hover/panel:ml-[1.19rem] ${
          !openFolder[item.id] && "hidden"
        }`}
      >
        {newItem[item.id] ? (
          <NewItemForm
            itemType={newItem[item.id]}
            path={item.path}
            parentId={item.id}
            setNewItem={setNewItem}
          />
        ) : null}
        <FileList fileList={item.children!} />
      </div>
    </>
  );
}