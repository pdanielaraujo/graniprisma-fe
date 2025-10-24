import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // Add whatever you want available on column.meta

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: "left" | "right" | "center";
  }
}
