import type { TGridProps } from "./types";

export const Grid = ({
  children,
  columns = 2,
  gap = "1rem",
  style,
}: TGridProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns.toString()}, 1fr)`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
