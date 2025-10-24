import type { ReactNode, RefObject } from "react";

export type TDialogProps = {
  description: string;
  icon?: ReactNode;
  onConfirm: () => void;
  ref: RefObject<HTMLDialogElement | null>;
  title: string;
};
