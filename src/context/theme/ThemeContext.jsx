/** @format */

"use client";

import { createContext, useState } from "react";

export const ThemeToggle = createContext({});

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeToggle.Provider value={{ theme, toggle }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeToggle.Provider>
  );
};

export default ThemeContext;
