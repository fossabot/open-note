import { useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { FolderItem, NoteItem } from "..";
import { useNotesStore } from "../../store/notesStore";
import { FileObj } from "../../types";

export function FileList({ fileList }: { fileList: FileObj[] }): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const { currentNote } = useNotesStore();
  const [openFolder, setOpenFolder] = useState<Record<string, boolean>>({});
  const [newItem, setNewItem] = useState<Record<string, string>>({});

  const fileStyles = `itemStyles ${
    colorScheme === "dark" ? "hover:bg-gray-700" : "hover:bg-slate-100"
  }`;

  const handleOpenFolder = (folderId: string) => {
    setOpenFolder({
      ...openFolder,
      [folderId]: openFolder[folderId] ? false : true,
    });
  };

  return (
    <aside className="group/panel">
      {fileList?.map((item) =>
        item.isFolder ? (
          <section key={item.id}>
            <FolderItem
              item={item}
              newItem={newItem}
              setNewItem={setNewItem}
              openFolder={openFolder}
              handleOpenFolder={handleOpenFolder}
              fileStyles={fileStyles}
            />
          </section>
        ) : (
          <section
            key={item.id}
            className={`${fileStyles} ${
              currentNote?.id === item.id &&
              (colorScheme === "dark" ? "bg-slate-800" : "bg-gray-300")
            }`}
          >
            <i className="ri-file-2-fill text-blue-400"></i>
            <NoteItem noteName={item.name} noteId={item.id} path={item.path} />
          </section>
        )
      )}
    </aside>
  );
}
