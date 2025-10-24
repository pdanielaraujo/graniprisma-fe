import styles from "./Spinner.module.css";
import type { TSpinnerProps } from "./types";

export const Spinner = ({ size = "sm" }: TSpinnerProps) => {
  return <span className={`${styles.loader} ${styles[size]}`} />;
};
