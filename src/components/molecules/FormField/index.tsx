import { Input } from "@atoms/Input";
import { Typography } from "@atoms/Typography";
import styles from "./FormField.module.css";
import type { TFormFieldProps } from "./types";

export const FormField = ({
  variant,
  label,
  name,
  type,
  error,
  errorMessage,
  required,
}: TFormFieldProps) => {
  return (
    <div className={styles["form-field-wrapper"]}>
      <label htmlFor={name} className={styles["form-field-label"]}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <Input
        error={error}
        id={name}
        name={name}
        required={required}
        type={type}
        variant={variant}
      />
      {error && (
        <Typography
          extraStyles={{
            color: "var(--color-danger)",
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
