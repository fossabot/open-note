import { Editor } from "@tiptap/react";
import { TFunction } from "i18next";
import { getFocus, handleSave } from "../helpers";
import { Note } from "../types";

export const customControls = (
  t: TFunction<"translation", undefined>,
  editor: Editor,
  store: {
    currentNote: Note | null;
    setCurrentNote: (note: Note | null) => void;
    setStatus: (status: string | null) => void;
    setShowNewItemForm: (value: "note" | "folder") => void;
  }
) => [
  [
    {
      icon: "save-3-line",
      onClick: () => handleSave(t, editor, store),
      title: t("Save"),
    },
    {
      icon: "arrow-go-back-line",
      onClick: () => getFocus(editor).undo().run(),
      title: t("Undo"),
    },
    {
      icon: "arrow-go-forward-line",
      onClick: () => getFocus(editor).redo().run(),
      title: t("Redo"),
    },
  ],
];
