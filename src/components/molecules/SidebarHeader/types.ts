import type { Dispatch, SetStateAction } from "react";

export type TSidebarHeaderProps = {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
};
