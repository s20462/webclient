import { createContext, useContext, useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

// Handles theme changes for document body
const toggleBodyClasses = (isDark: boolean) => {
  if (isDark) {
    document.body.classList.add("bg-dark", "text-light");
    document.body.classList.remove("bg-light", "text-dark");
  } else {
    document.body.classList.add("bg-light", "text-dark");
    document.body.classList.remove("bg-dark", "text-light");
  }
};

// Default theme settings
const defaultContext = {
  isDark: false,
  toggle: () => {}
};

// Dark mode hooks
const DarkModeContext = createContext(defaultContext);
export const useDarkMode = () => useContext(DarkModeContext);

// Helper types for dark mode hooks
interface DarkModeState {
  isDark: boolean,
  hasDarkModeMounted: boolean
}

type DarkModeHookResult = [value: DarkModeState, setter: Dispatch<SetStateAction<DarkModeState>>];

// Loads selected theme
const useEffectDarkMode = (): DarkModeHookResult => {
  const [darkMode, setDarkMode] = useState({
    isDark: false,
    hasDarkModeMounted: false
  });

  useEffect(() => {
    toggleBodyClasses(darkMode.isDark);

    setDarkMode({
      isDark: darkMode.isDark,
      hasDarkModeMounted: true
    });
  }, []);

  return [darkMode, setDarkMode];
};

// Dark mode hook provider component
export const DarkModeProvider = (props: JSX.ElementChildrenAttribute) => {
  const [darkMode, setDarkMode] = useEffectDarkMode();

  if (!darkMode.hasDarkModeMounted) {
    return <></>;
  }

  const toggle = () => {
    const dark = !darkMode.isDark;
    toggleBodyClasses(dark);

    setDarkMode({
      isDark: dark,
      hasDarkModeMounted: darkMode.hasDarkModeMounted
    });
  };

  return (
    <DarkModeContext.Provider value={{
      isDark: darkMode.isDark,
      toggle: toggle
    }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};