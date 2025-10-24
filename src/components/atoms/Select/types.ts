import type { SelectHTMLAttributes } from "react";

type TOption = { label: string; value: string | number | Date };

export type TSelectProps = {
  options: TOption[];
} & SelectHTMLAttributes<HTMLSelectElement>;
