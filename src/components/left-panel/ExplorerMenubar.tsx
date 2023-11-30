import { ActionIcon, Group } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { loadFiles } from "../../helpers";
import { useTauriContext } from "../../providers/tauri-provider";
import { useNotesStore } from "../../store/notesStore";
import { explorerMenubarControls } from "../../constants";

export function ExplorerMenubar() {
  const { t } = useTranslation();
  const { setItems, setShowNewItemForm } = useNotesStore();
  const { appDocuments } = useTauriContext();

  return (
    <Group
      justify="flex-end"
      gap="1"
      bg="var(--mantine-color-blue-light)"
      className="pr-1"
    >
      {explorerMenubarControls(
        t,
        setShowNewItemForm,
        loadFiles,
        appDocuments,
        setItems
      ).map((control, index) => {
        return (
          <ActionIcon
            key={index}
            variant="default"
            className={control.className}
            title={control.title}
            onClick={control.onClick}
          >
            <i className={`ri-${control.icon}`}></i>
          </ActionIcon>
        );
      })}
    </Group>
  );
}