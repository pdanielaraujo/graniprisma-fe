export type TPaginationProps = {
  current: number;
  onChangeCurrent: (page: number) => void;
  total: number;
};
