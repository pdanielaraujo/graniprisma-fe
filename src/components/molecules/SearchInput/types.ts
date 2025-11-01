import type { KeyboardEvent } from "react";

export type TSearchInputProps = {
  handleSearchKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};
