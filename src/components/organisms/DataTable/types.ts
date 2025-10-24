import type { ColumnDef } from "@tanstack/react-table";

export type TDataTableProps<T extends Record<string, string | number>> = {
  columns: ColumnDef<T>[];
  currentPage: number;
  data: T[];
  onChangeCurrent: (page: number) => void;
  totalPages: number;
};
