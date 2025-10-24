import type { PropsWithChildren } from "react";

export type TGridProps = PropsWithChildren<{
  columns?: number;
  gap?: string;
  style?: Record<string, string | number>;
}>;
