"use client";

import { useTheme } from "next-themes";
import { FC, ChangeEvent } from "react";

const ThemeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <label htmlFor="theme-select">Select Theme:</label>
      <select id="theme-select" value={theme} onChange={handleChange}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
