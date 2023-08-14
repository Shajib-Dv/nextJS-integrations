/** @format */

"use client";
import { ThemeToggle } from "@/context/theme/ThemeContext";
import React, { useContext } from "react";

const ThemeChanger = () => {
  const { toggle, theme } = useContext(ThemeToggle);

  return (
    <div onClick={toggle} className="relative flex items-center cursor-pointer">
      <span
        title="dark"
        className={`absolute top-0 left-0 ${theme !== "light" && "hidden"}`}
      >
        🌙
      </span>
      <input
        type="checkbox"
        onChange={() => ""}
        className="toggle toggle-primary "
        checked={theme === "dark" ? false : true}
      />
      <span
        title="light"
        className={`absolute top-0 right-0 ${theme !== "dark" && "hidden"}`}
      >
        ☀️
      </span>
    </div>
  );
};

export default ThemeChanger;
