import type { PropsWithChildren } from "react";

export type TGridItemProps = PropsWithChildren<{
  colSpan?: number;
  rowSpan?: number;
  style?: Record<string, string | number>;
}>;
