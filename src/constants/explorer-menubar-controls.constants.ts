import { TFunction } from "i18next";
import { FileObj } from "../types";

const commonStyles = "border-none hoverStyles";

export const explorerMenubarControls = (
  t: TFunction<"translation", undefined>,
  setShowNewItemForm: (value: "note" | "folder" | null) => void,
  loadFiles: (
    path: string,
    loaderFn: (content: FileObj[]) => void
  ) => Promise<void>,
  appDocuments: string,
  setItems: (items: FileObj[]) => void
) => [
  {
    icon: "file-add-line",
    title: t("New note"),
    className: commonStyles,
    onClick: () => setShowNewItemForm("note"),
  },
  {
    icon: "folder-add-line",
    title: t("New folder"),
    className: commonStyles,
    onClick: () => setShowNewItemForm("folder"),
  },
  {
    icon: "refresh-line",
    title: t("Reload"),
    className: commonStyles,
    onClick: () => loadFiles(appDocuments, setItems),
  },
];
