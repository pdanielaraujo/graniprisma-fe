import type { HTMLAttributes } from "react";
import { TYPOGRAPHY_VARIANTS } from "../../../constants/variants";

export type TTypographyProps = {
  variant?: (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];
  extraStyles?: React.CSSProperties;
} & HTMLAttributes<HTMLParagraphElement>;
