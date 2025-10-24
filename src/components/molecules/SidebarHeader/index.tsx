import { Logo } from "@atoms/Logo";
import { useMemo, useState } from "react";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import styles from "./SidebarHeader.module.css";
import type { TSidebarHeaderProps } from "./types";

export const SidebarHeader = ({
  isCollapsed,
  setIsCollapsed,
}: TSidebarHeaderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleIconStyle = useMemo(
    () => `${styles["header-icons-wrapper"]} ${styles["toggle-icon"]}`,
    [],
  );

  const handleCollapseSideBar = () => setIsCollapsed(true);
  const handleExpandSideBar = () => {
    setIsHovered(false);
    setIsCollapsed(false);
  };

  const handleMouseEnter = () => isCollapsed && setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={styles.header}>
      {isCollapsed ? (
        isHovered ? (
          <div
            className={toggleIconStyle}
            onClick={handleExpandSideBar}
            onMouseLeave={handleMouseLeave}
          >
            <VscLayoutSidebarRight />
          </div>
        ) : (
          <div className={styles["home-icon"]} onMouseEnter={handleMouseEnter}>
            <Logo />
          </div>
        )
      ) : (
        <>
          <div className={styles["home-icon"]}>
            <Logo />
          </div>
          <div className={toggleIconStyle} onClick={handleCollapseSideBar}>
            <VscLayoutSidebarRight />
          </div>
        </>
      )}
    </div>
  );
};
