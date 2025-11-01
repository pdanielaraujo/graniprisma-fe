import { useIsMobile } from "@hooks/useIsMobile";
import type { TGridProps } from "./types";

export const Grid = ({
  children,
  columns = 2,
  gap = "1rem",
  style,
}: TGridProps) => {
  const isMobile = useIsMobile();

  const gridTemplateColumns = isMobile
    ? "1fr"
    : `repeat(${columns.toString()}, 1fr)`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
