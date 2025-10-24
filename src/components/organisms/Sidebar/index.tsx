import { SidebarHeader } from "@molecules/SidebarHeader";
import { SidebarItem } from "@molecules/SidebarItem";
import { useState } from "react";
import { PiFactory } from "react-icons/pi";
import { VscHome, VscPerson } from "react-icons/vsc";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  console.count("SideBar");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const rootStyle = `${styles["sidebar-root"]} ${isCollapsed ? styles.collapsed : ""}`;
  // const textStyleHidden = isCollapsed ? "none" : undefined;

  return (
    <div className={rootStyle}>
      <SidebarHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      {/* <Divider /> */}
      <nav>
        <ul>
          <SidebarItem icon={<VscHome />} text="Home" to="/" />
          <SidebarItem icon={<VscPerson />} text="Customers" to="/customers" />
          <SidebarItem icon={<PiFactory />} text="Suppliers" to="/suppliers" />
        </ul>
      </nav>
    </div>
  );
};
