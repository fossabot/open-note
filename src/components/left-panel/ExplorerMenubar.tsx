import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { explorerMenubarControls } from "../../constants";
import { loadFiles } from "../../helpers";
import { useTauriContext } from "../../providers/tauri-provider";
import { useNotesStore } from "../../store/notesStore";

export function ExplorerMenubar() {
  const { t } = useTranslation();
  const { setItems, setShowNewItemForm } = useNotesStore();
  const { appFolder } = useTauriContext();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group
      justify="flex-end"
      gap="1"
      bg={`${colorScheme === "light" ? "#e8f3fc" : "#1b2c3c"}`}
      className="pr-1"
    >
      {explorerMenubarControls(
        t,
        setShowNewItemForm,
        loadFiles,
        appFolder,
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
