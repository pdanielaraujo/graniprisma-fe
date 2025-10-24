import type { TGridItemProps } from "./types";

export const GridItem = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  style,
}: TGridItemProps) => {
  return (
    <div
      style={{
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        gridColumn: `span ${colSpan}`,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        gridRow: `span ${rowSpan}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
