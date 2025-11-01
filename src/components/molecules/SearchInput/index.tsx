import { Input } from "@atoms/Input";
import { VscSearch } from "react-icons/vsc";
import type { TSearchInputProps } from "./types";

import styles from "./SearchInput.module.css";

export const SearchInput = ({ handleSearchKeyDown }: TSearchInputProps) => (
  <div className={styles["search-input-root"]}>
    <Input
      variant="default_input"
      type="search"
      placeholder="Pesquisar..."
      onKeyDown={handleSearchKeyDown}
      style={{ paddingLeft: "var(--space-8)" }}
    />
    <VscSearch className={styles["search-icon"]} />
  </div>
);
