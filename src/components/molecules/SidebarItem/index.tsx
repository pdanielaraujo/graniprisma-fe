import { Link } from "@tanstack/react-router";
import type { TSideBarItemProps } from "./types";

export const SidebarItem = ({ icon, text, to }: TSideBarItemProps) => {
  return (
    <li>
      <Link to={to}>
        <>{icon}</>
        <span>{text}</span>
      </Link>
    </li>
  );
};
