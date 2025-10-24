import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { VscFolderOpened } from "react-icons/vsc";
import styles from "./EmptyState.module.css";
import type { TEmptyStateProps } from "./types";

export const EmptyState = ({
  action,
  description,
  title,
}: TEmptyStateProps) => {
  console.log("action", action);
  return (
    <div className={styles.root}>
      <VscFolderOpened
        size="var(--space-16)"
        color="var(--color-brand-primary)"
      />
      <Typography variant="heading4">{title}</Typography>
      <Typography>{description}</Typography>
      <div className={styles["action-container"]}>
        <Button>Pesquisar novamente</Button>
      </div>
    </div>
  );
};
