import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#12160F]/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          to="/"
          data-testid="logo-link"
          className="flex items-center gap-2.5 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C5E3B] text-white transition-transform duration-300 group-hover:rotate-12 dark:bg-[#4C8C4A]">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-heading text-2xl font-semibold leading-none text-[#2C5E3B] dark:text-[#8FCB7E]">
            Nano<span className="text-[#E5A93D]"> Fruits</span> Pedia
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/"
            data-testid="nav-lobby"
            className={`rounded-full px-4 py-2 transition-colors duration-200 ${
              pathname === "/"
                ? "bg-[#E9EED9] text-[#2C5E3B] dark:bg-[#243021] dark:text-[#8FCB7E]"
                : "text-[#5C6B61] hover:bg-[#F0F2E9] hover:text-[#2C5E3B] dark:text-[#A2AE9F] dark:hover:bg-[#1B2118] dark:hover:text-[#8FCB7E]"
            }`}
          >
            Lobby
          </Link>
          <a
            href="#koleksi"
            data-testid="nav-koleksi"
            className="hidden rounded-full px-4 py-2 text-[#5C6B61] transition-colors duration-200 hover:bg-[#F0F2E9] hover:text-[#2C5E3B] dark:text-[#A2AE9F] dark:hover:bg-[#1B2118] dark:hover:text-[#8FCB7E] sm:block"
          >
            Koleksi
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};
