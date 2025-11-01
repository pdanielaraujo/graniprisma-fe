import { useIsMobile } from "@hooks/useIsMobile";
import { useIsTablet } from "@hooks/useIsTablet";
import { SidebarHeader } from "@molecules/SidebarHeader";
import { SidebarItem } from "@molecules/SidebarItem";
import { useEffect, useState } from "react";
import { LiaDropbox } from "react-icons/lia";
import { PiFactory } from "react-icons/pi";
import { VscHome, VscPerson } from "react-icons/vsc";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  console.count("Sidebar");
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const [isCollapsed, setIsCollapsed] = useState(
    isTablet || isMobile ? true : false,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1160px)");
    // setIsCollapsed(mql.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsCollapsed(event.matches);
    };

    mql.addEventListener("change", handleMediaChange);
    return () => mql.removeEventListener("change", handleMediaChange);
  }, []);

  const rootStyle = `${styles["sidebar-root"]} ${isCollapsed ? styles.collapsed : ""}`;

  return (
    <div className={rootStyle}>
      <SidebarHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={isTablet && isCollapsed ? undefined : setIsCollapsed}
      />
      <nav>
        <ul>
          <SidebarItem icon={<VscHome />} text="Home" to="/" />
          <SidebarItem icon={<VscPerson />} text="Customers" to="/customers" />
          <SidebarItem icon={<PiFactory />} text="Suppliers" to="/suppliers" />
          <SidebarItem icon={<LiaDropbox />} text="Stock" to="/stock" />
        </ul>
      </nav>
    </div>
  );
};
