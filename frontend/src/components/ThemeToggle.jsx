import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("nfp-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("nfp-theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      data-testid="theme-toggle"
      aria-label={dark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5DCC4] bg-white text-[#2C5E3B] transition-colors duration-300 hover:bg-[#F0F2E9] dark:border-white/15 dark:bg-[#1B2118] dark:text-[#E5A93D] dark:hover:bg-[#243021]"
    >
      {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
    </button>
  );
};
