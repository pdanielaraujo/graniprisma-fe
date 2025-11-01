import type { ReactNode } from "react";

export type TMenuProps = {
  items: { action: () => void; label: string }[];
  opener: ReactNode;
  isNavigationMenu?: boolean;
};
