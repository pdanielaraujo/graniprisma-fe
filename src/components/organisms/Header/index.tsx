import { Avatar } from "@atoms/Avatar";
import { useIsMobile } from "@hooks/useIsMobile";
import { DropdownMenu } from "@molecules/DropdownMenu";
import { VscMenu } from "react-icons/vsc";
import styles from "./Header.module.css";

export const Header = () => {
  const isMobile = useIsMobile();

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
      <button onClick={changeToAutoMode}>Auto</button>
      <button onClick={changeToLightMode}>Light</button>
      <button onClick={changeToDarkMode}>Dark</button>
      {isMobile && (
        <DropdownMenu
          items={[
            { action: () => console.log("Perfil"), label: "Perfil" },
            { action: () => console.log("Definições"), label: "Definições" },
            {
              action: () => console.log("Terminar sessão"),
              label: "Terminar sessão",
            },
          ]}
          opener={<VscMenu />}
        />
      )}
      <DropdownMenu
        items={[
          { action: () => console.log("Perfil"), label: "Perfil" },
          { action: () => console.log("Definições"), label: "Definições" },
          {
            action: () => console.log("Terminar sessão"),
            label: "Terminar sessão",
          },
        ]}
        opener={<Avatar />}
        isNavigationMenu={true}
      />
    </div>
  );
};
