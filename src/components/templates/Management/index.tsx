import { useIsMobile } from "@hooks/useIsMobile";
import { Header } from "@organisms/Header";
import { Sidebar } from "@organisms/Sidebar";
import type { PropsWithChildren, ReactNode } from "react";
import styles from "./Management.module.css";

export const ManagementTemplate = ({
  actions,
  children,
}: PropsWithChildren<{ actions: ReactNode }>) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.root}>
      {!isMobile && (
        <div style={{ gridArea: "sidebar" }}>
          <Sidebar />
        </div>
      )}
      <div style={{ gridArea: "header" }}>
        <Header />
      </div>
      <div
        style={{
          gridArea: "actions",
          padding: isMobile ? "var(--space-4)" : "var(--space-12)",
        }}
      >
        {actions}
      </div>
      <div style={{ gridArea: "content", padding: "var(--space-4)" }}>
        {children}
      </div>
    </div>
  );
};
