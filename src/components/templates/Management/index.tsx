import { Header } from "@organisms/Header";
import { Sidebar } from "@organisms/Sidebar";
import type { PropsWithChildren, ReactNode } from "react";
import styles from "./Management.module.css";

export const ManagementTemplate = ({
  actions,
  children,
}: PropsWithChildren<{ actions: ReactNode }>) => {
  return (
    <div className={styles.root}>
      <div style={{ gridArea: "sidebar" }}>
        <Sidebar />
      </div>
      <div style={{ gridArea: "header" }}>
        <Header />
      </div>
      <div style={{ gridArea: "actions", padding: "var(--space-12)" }}>
        {actions}
      </div>
      <div style={{ gridArea: "content", padding: "var(--space-4)" }}>
        {children}
      </div>
    </div>
  );
};
