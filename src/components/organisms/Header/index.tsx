import { Avatar } from "@atoms/Avatar";
import styles from "./Header.module.css";

export const Header = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error('Failed to find the root element with id="root".');
  }

  const changeToAutoMode = () => {
    rootElement.style.setProperty("color-scheme", "light dark");
    localStorage.setItem("mode", "light dark");
  };
  const changeToLightMode = () => {
    rootElement.style.setProperty("color-scheme", "light");
    localStorage.setItem("mode", "light");
  };
  const changeToDarkMode = () => {
    rootElement.style.setProperty("color-scheme", "dark");
    localStorage.setItem("mode", "dark");
  };

  // rootElement.style.getPropertyValue("color-scheme") === "dark"
  //   ? changeToLightMode()
  //   : changeToDarkMode();
  return (
    <div className={styles["header-root"]}>
      header <Avatar />
      <button onClick={changeToAutoMode}>Auto</button>
      <button onClick={changeToLightMode}>Light</button>
      <button onClick={changeToDarkMode}>Dark</button>
    </div>
  );
};
