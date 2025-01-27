import { WebviewWindow } from "@tauri-apps/api/window";

export const renderModal = ({
  label,
  width = 400,
  height = 175,
  setActiveModal,
}: {
  label: string;
  width?: number;
  height?: number;
  setActiveModal: (value: boolean) => void;
}) => {
  new WebviewWindow(label, {
    url: `index.html/#/${label}`,
    alwaysOnTop: true,
    center: true,
    resizable: false,
    maximizable: false,
    minimizable: false,
    decorations: false,
    width,
    height,
  });

  setActiveModal(true);
};
