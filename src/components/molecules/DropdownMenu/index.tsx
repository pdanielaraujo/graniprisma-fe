import { Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./DropdownMenu.module.css";
import type { TMenuProps } from "./types";

export const DropdownMenu = ({
  items,
  opener,
  isNavigationMenu,
}: TMenuProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [alignEnd, setAlignEnd] = useState(true); // default: stick to right edge

  const openStyle = isOpen ? styles.open : "";
  const alignStyle = isOpen
    ? alignEnd
      ? styles["align-end"]
      : styles["align-start"]
    : "";

  const handleToggleDropdownMenu = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (!isOpen) return;
    if (!menuRef.current) return;

    const rect = menuRef.current.getBoundingClientRect();

    if (rect.left < 0) {
      setAlignEnd(false);
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;

      if (!root) return;

      // If click is outside the whole component (opener + menu), close it
      if (!root.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    // Use capture so we catch the event before it’s stopped in children.
    addEventListener("pointerdown", onPointerDown, true);
    addEventListener("keydown", onKeyDown);

    return () => {
      removeEventListener("pointerdown", onPointerDown, true);
      removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.opener} onClick={handleToggleDropdownMenu}>
        {opener}
      </div>
      <menu
        className={[styles.menu, openStyle, alignStyle].join(" ")}
        ref={menuRef}
      >
        {items.map(({ action, label }) =>
          isNavigationMenu ? (
            <div className={styles["menu-item"]}>
              <Link to=".">
                <span>{label}</span>
              </Link>
            </div>
          ) : (
            <button className={styles["menu-item"]} onClick={action}>
              {label}
            </button>
          ),
        )}
      </menu>
    </div>
  );
};
