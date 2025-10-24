import { Spinner } from "@atoms/Spinner";
import { BUTTON_VARIANTS } from "@constants/variants";
import styles from "./Button.module.css";
import type { TButtonProps } from "./types";

export const Button = ({
  variant = BUTTON_VARIANTS.primary,
  children,
  disabled,
  onClick,
  isLoading,
}: TButtonProps) => {
  const classes = [styles.root];

  classes.push(styles[variant]);

  if (isLoading) {
    classes.push(styles.loading);
  }

  return (
    <button
      className={classes.join(" ")}
      disabled={disabled ?? isLoading}
      onClick={onClick}
    >
      {isLoading && variant === "primary" && (
        <span className={styles["spinner-container"]}>
          <Spinner />
        </span>
      )}
      <span className={styles.txt}>{children}</span>
    </button>
  );
};
