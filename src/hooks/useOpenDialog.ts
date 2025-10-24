import { useRef } from "react";

export const useOpenDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.close();
  };

  return { dialogRef, closeDialog, openDialog };
};
