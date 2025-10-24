import type { InputHTMLAttributes } from "react";
import type { INPUT_VARIANTS } from "../../../constants/variants";

export type TInputProps = {
  variant?: (typeof INPUT_VARIANTS)[keyof typeof INPUT_VARIANTS];
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
