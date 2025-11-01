import { useEffect, useState } from "react";

/*
    Could possible change in the future to receive a query prop, so when we call we can control what media query we need, instead of just mobile.
*/
export const useIsTablet = () => {
  const initialMediaQueryList = window.matchMedia("(max-width: 1160px)");
  const [matches, setMatches] = useState(initialMediaQueryList.matches);

  useEffect(() => {
    const mql = initialMediaQueryList;

    setMatches(mql.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mql.addEventListener("change", handleMediaChange);

    return () => mql.removeEventListener("change", handleMediaChange);
  }, [initialMediaQueryList]);

  return matches;
};
