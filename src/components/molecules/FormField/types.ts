import type { LabelHTMLAttributes } from "react";
import type { TInputProps } from "../../atoms/Input/types";

export type TFormFieldProps = {
  label?: string;
  error?: boolean;
  errorMessage?: string;
} & TInputProps &
  LabelHTMLAttributes<HTMLLabelElement>;
