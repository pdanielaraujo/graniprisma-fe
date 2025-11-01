import { useIsTablet } from "@hooks/useIsTablet";
import type { ManagementActionsSectionProps } from "./types";

export const ManagementActionsSection = ({
  filterSection,
  searchSection,
  createButton,
  className,
  style,
}: ManagementActionsSectionProps) => {
  const isTablet = useIsTablet();

  return (
    <div className={className} style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: isTablet ? "column" : "row",
            gap: isTablet ? "var(--space-4)" : "var(--space-8)",
            alignItems: "center",
          }}
        >
          {searchSection && (
            <div style={{ width: isTablet ? "100%" : "auto" }}>
              {searchSection}
            </div>
          )}
          {filterSection && (
            <div style={{ width: isTablet ? "100%" : "auto" }}>
              {filterSection}
            </div>
          )}
          {createButton && (
            <div
              style={{
                width: isTablet ? "100%" : "auto",
                marginLeft: isTablet ? 0 : "auto",
              }}
            >
              {createButton}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
