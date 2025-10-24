import { Pagination } from "@molecules/Pagination";
import { Table } from "@organisms/Table";
import styles from "./DataTable.module.css";
import type { TDataTableProps } from "./types";

export const DataTable = <T extends Record<string, string | number>>({
  columns,
  currentPage,
  data,
  onChangeCurrent,
  totalPages,
}: TDataTableProps<T>) => {
  return (
    <div className={styles.root}>
      <div className={styles["table-container"]}>
        <Table data={data} columns={columns} />
      </div>
      <Pagination
        current={currentPage}
        total={totalPages}
        onChangeCurrent={onChangeCurrent}
      />
    </div>
  );
};
