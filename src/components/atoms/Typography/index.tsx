import type { TTypographyProps } from "./types";
import styles from "./Typography.module.css";

export const Typography = ({
  variant = "body",
  children,
  extraStyles,
}: TTypographyProps) => {
  const classes = [styles.root];

  classes.push(styles[variant]);

  return (
    <p className={classes.join(" ")} style={extraStyles}>
      {children}
    </p>
  );
};
