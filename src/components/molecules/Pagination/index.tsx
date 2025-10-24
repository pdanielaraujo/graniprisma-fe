import { Typography } from "@atoms/Typography";
import { MAX_PAGES_SHOWN, MAX_PAGES_SHOWN_MOBILE } from "@constants/pagination";
import { useIsMobile } from "@hooks/useIsMobile";
import { useMemo } from "react";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import styles from "./Pagination.module.css";
import type { TPaginationProps } from "./types";

export const Pagination = ({
  current,
  onChangeCurrent,
  total,
}: TPaginationProps) => {
  console.count("Pagination");

  const isMobile = useIsMobile();

  const maxPagesShownByWindowSize = isMobile
    ? MAX_PAGES_SHOWN_MOBILE
    : MAX_PAGES_SHOWN;

  const goToPrevious = () => {
    onChangeCurrent(current - 1);
  };

  const goToNext = () => {
    onChangeCurrent(current + 1);
  };

  // Generate page numbers with ellipsis
  const pages = useMemo(() => {
    const pages: (number | string)[] = [];

    if (total <= maxPagesShownByWindowSize) {
      // Show all pages if not too many
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current < maxPagesShownByWindowSize - 2) {
        for (let i = 1; i <= maxPagesShownByWindowSize - 2; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(total);
      } else if (
        current >= maxPagesShownByWindowSize - 2 &&
        current <= total - maxPagesShownByWindowSize + 3
      ) {
        if (!isMobile) {
          pages.push(
            1,
            "...",
            current - 2,
            current - 1,
            current,
            current + 1,
            current + 2,
            "...",
            total,
          );
        } else {
          pages.push(1, "...", current - 1, current, current + 1, "...", total);
        }
      } else {
        pages.push(1, "...");
        for (let i = total - maxPagesShownByWindowSize + 3; i <= total; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  }, [current, isMobile, maxPagesShownByWindowSize, total]);

  if (total <= 1) return null;

  return (
    <div className={styles.container}>
      <button className={styles["arrow-container"]} disabled={current === 1}>
        <CiSquareChevLeft
          className={styles.arrow}
          onClick={goToPrevious}
          viewBox="3 3 18 18"
        />
      </button>

      {pages.map((page, index) =>
        typeof page === "string" ? (
          <span key={index} className={styles.ellipsis}>
            <Typography>...</Typography>
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onChangeCurrent(page)}
            className={page === current ? styles.active : styles.inactive}
          >
            {page}
          </button>
        ),
      )}

      <button
        className={styles["arrow-container"]}
        disabled={current === total}
      >
        <CiSquareChevRight
          className={styles.arrow}
          onClick={goToNext}
          viewBox="3 3 18 18"
        />
      </button>
    </div>
  );
};
