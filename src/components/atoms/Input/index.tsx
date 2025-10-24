import styles from "./Input.module.css";
import type { TInputProps } from "./types";

export const Input = ({
  error,
  name,
  type = "text",
  variant = "default_input",
  ...rest
}: TInputProps) => {
  const classes = [styles[variant]];

  if (error) {
    classes.push(styles.error);
  }

  return (
    <input
      className={classes.join(" ")}
      id={name}
      name={name}
      type={type}
      {...rest}
    />
  );
};
