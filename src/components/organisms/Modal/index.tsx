import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { BUTTON_VARIANTS } from "@constants/variants";
import styles from "./Modal.module.css";
import type { TDialogProps } from "./types";

export const Modal = ({
  content,
  description,
  onCancel,
  onConfirm,
  ref,
  title,
}: TDialogProps) => {
  const handleCancelAction = () => {
    if (!ref.current) {
      return;
    }

    ref.current.close();
    onCancel();
  };

  const handleConfirmAction = () => {
    if (!ref.current) {
      return;
    }

    onConfirm();
  };

  return (
    <dialog id="modal" closedby="none" ref={ref} className={styles.root}>
      <div className={styles.header}>
        <Typography variant="heading4">{title}</Typography>
        {description && (
          <Typography variant="description">{description}</Typography>
        )}
      </div>
      {content}
      <div className={styles["actions-container"]}>
        <Button
          variant={BUTTON_VARIANTS.secondary}
          onClick={handleCancelAction}
        >
          Cancelar
        </Button>
        <Button onClick={handleConfirmAction}>Confirmar</Button>
      </div>
    </dialog>
  );
};
