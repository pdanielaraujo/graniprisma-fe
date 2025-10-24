import { BUTTON_VARIANTS } from "@constants/variants";
import type { ButtonHTMLAttributes } from "react";

export type TButtonProps = {
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
