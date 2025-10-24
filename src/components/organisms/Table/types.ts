import type { ColumnDef } from "@tanstack/react-table";
import type { TableHTMLAttributes } from "react";

export type TTableProps<T extends Record<string, string | number>> = {
  data: T[];
  columns: ColumnDef<T>[];
  // pagination: PaginationState;
  // paginationOptions: Pick<PaginationOptions, "onPaginationChange" | "rowCount">;
  // filters: Filters<T>
  // onFilterChange: (dataFilters: Partial<T>) => void
  // sorting: SortingState
  // onSortingChange: OnChangeFn<SortingState>
} & TableHTMLAttributes<HTMLTableElement>;
