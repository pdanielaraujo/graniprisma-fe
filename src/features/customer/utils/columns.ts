import type { ColumnDef } from "@tanstack/react-table";
import type { TPerson } from "../types";

/*
    THIS IS ONLY A SIMPLE EXAMPLE OF DEFINING COLUMNS FOR A TANSTACK TABLE
*/
export const PERSON_COLUMNS: ColumnDef<TPerson>[] = [
  {
    accessorKey: "firstName",
    accessorFn: (person) => person.firstName,
    header: () => "First name",
    meta: { align: "left" },
  },
  {
    accessorKey: "lastName",
    accessorFn: (person) => person.lastName,
    header: () => "Last name",
    meta: { align: "left" },
  },
  {
    accessorKey: "age",
    accessorFn: (person) => person.age,
    header: () => "Age",
    meta: { align: "right" },
  },
  {
    accessorKey: "visits",
    accessorFn: (person) => person.visits,
    header: () => "Visits",
    meta: { align: "right" },
  },
  {
    accessorKey: "status",
    accessorFn: (person) => person.status,
    header: () => "Status",
    meta: { align: "left" },
  },
  {
    accessorKey: "progress",
    accessorFn: (person) => person.progress,
    header: () => "Progress",
    meta: { align: "right" },
  },
];
