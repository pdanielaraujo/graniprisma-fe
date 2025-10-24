import { useEffect, useState } from "react";

/*
    Could possible change in the future to receive a query prop, so when we call we can control what media query we need, instead of just mobile.
*/
export const useIsMobile = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 500px)");

    setMatches(mql.matches);

    const onChange = (ev: MediaQueryListEvent) => {
      setMatches(ev.matches);
    };

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return matches;
};
