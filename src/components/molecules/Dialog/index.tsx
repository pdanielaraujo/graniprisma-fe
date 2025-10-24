import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { BUTTON_VARIANTS } from "@constants/variants";
import { VscInfo } from "react-icons/vsc";
import styles from "./Dialog.module.css";
import type { TDialogProps } from "./types";

export const Dialog = ({
  description,
  //   icon,
  onConfirm,
  ref,
  title,
}: TDialogProps) => {
  const handleCancelAction = () => {
    if (!ref.current) {
      return;
    }

    ref.current.close();
  };

  const handleConfirmAction = () => {
    if (!ref.current) {
      return;
    }

    onConfirm();
    ref.current.close();
  };

  return (
    <dialog id="dialog" closedby="any" ref={ref} className={styles.root}>
      <div className={styles.header}>
        <div className={styles["title-container"]}>
          <VscInfo color="var(--color-status-warning)" />
          <Typography
            extraStyles={{
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            {title}
          </Typography>
        </div>
        <Typography variant="description">{description}</Typography>
      </div>
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
