import type { ManagementActionsSectionProps } from "./types";

export const ManagementActionsSection = ({
  filterSection,
  searchSection,
  createButton,
  className,
  style,
}: ManagementActionsSectionProps) => (
  <div className={className} style={style}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-12)",
        }}
      >
        {filterSection && <div>{filterSection}</div>}
        {searchSection && <div style={{ flex: 1 }}>{searchSection}</div>}
      </div>
      {createButton && <div style={{ marginLeft: "auto" }}>{createButton}</div>}
    </div>
  </div>
);
