"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 transition"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-white w-8 h-8 cursor-pointer" />
      ) : (
        <BiMoon className="text-white w-8 h-8 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
