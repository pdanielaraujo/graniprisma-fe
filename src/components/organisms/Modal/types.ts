import type { ReactNode, RefObject } from "react";

export type TDialogProps = {
  content: ReactNode;
  description?: string;
  onCancel: () => void;
  onConfirm: () => void;
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
};
