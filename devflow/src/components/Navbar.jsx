import { useState } from "react";
import { ArrowUpRight, Menu, X, Command, Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onOpenPalette, onOpenTerminal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const { theme, toggleTheme, isDark } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    const nextCount = logoClickCount + 1;
    setLogoClickCount(nextCount);
    if (nextCount >= 5) {
      if (onOpenTerminal) onOpenTerminal();
      setLogoClickCount(0);
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-40 w-full border-b transition-all duration-300 overflow-hidden shadow-2xl backdrop-blur-2xl ${
        isDark
          ? "border-lime-300/20 bg-[#07080a]/75 text-white"
          : "border-slate-200/80 bg-white/80 text-slate-900 shadow-slate-200/50"
      }`}
    >
      {/* Navbar Background Image Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
          alt="Developer Matrix Network"
          className={`h-full w-full object-cover object-center ${
            isDark ? "opacity-45 brightness-115 contrast-125" : "opacity-15 brightness-125"
          }`}
        />
        {/* Gradient Overlay for high legibility */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-r from-[#07080a]/90 via-[#07080a]/60 to-[#07080a]/90"
              : "bg-gradient-to-r from-white/95 via-white/80 to-white/95"
          }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 h-px ${
            isDark
              ? "bg-gradient-to-r from-transparent via-lime-300/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-lime-500/40 to-transparent"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={handleLogoClick}
            className="group flex items-center gap-2.5 text-lg font-semibold tracking-tight"
            title="Click 5 times for secret terminal"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl font-mono font-bold shadow-lg transition group-hover:scale-105 ${
                isDark
                  ? "bg-lime-300 text-black shadow-lime-300/30 group-hover:bg-lime-200"
                  : "bg-lime-400 text-black shadow-lime-500/20 group-hover:bg-lime-300"
              }`}
            >
              ◈
            </span>
            <span className="font-bold drop-shadow-sm">DevFlow</span>
          </a>

          {/* Status Badge */}
          <div
            className={`hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-md sm:flex ${
              isDark
                ? "border-lime-300/30 bg-lime-300/10 text-lime-300"
                : "border-lime-600/30 bg-lime-500/10 text-lime-700 font-semibold"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 animate-pulse rounded-full ${
                isDark ? "bg-lime-300" : "bg-lime-600"
              }`}
            />
            <span>v2.4 Live</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {[
            { href: "#workflow", label: "Workflow" },
            { href: "#features", label: "Features" },
            { href: "#product", label: "Focus Workbench" },
            { href: "#calculator", label: "ROI Calculator" },
            { href: "#manifesto", label: "Manifesto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isDark
                  ? "text-white/75 hover:text-lime-300"
                  : "text-slate-600 hover:text-lime-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions & Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Quick Command Palette Button */}
          <button
            type="button"
            onClick={onOpenPalette}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs transition ${
              isDark
                ? "border-white/15 bg-black/40 text-white/80 hover:border-lime-300/40 hover:bg-black/60 hover:text-white"
                : "border-slate-200 bg-slate-100/80 text-slate-700 hover:border-slate-300 hover:bg-slate-200"
            }`}
            title="Press Cmd+K or Ctrl+K to search"
          >
            <Command size={13} className={isDark ? "text-lime-300" : "text-lime-600"} />
            <span>Search</span>
            <kbd
              className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                isDark ? "bg-white/10 text-white/60" : "bg-slate-200 text-slate-600"
              }`}
            >
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button (Light / Dark) */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition hover:scale-105 ${
              isDark
                ? "border-white/15 bg-white/[0.05] text-amber-300 hover:border-amber-300/40 hover:bg-white/[0.1]"
                : "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark and light theme"
          >
            {isDark ? (
              <Sun size={16} className="transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon size={16} className="transition-transform duration-300 -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#product"
            className={`group flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-black shadow-lg transition hover:scale-105 ${
              isDark
                ? "bg-lime-300 shadow-lime-300/25 hover:bg-lime-200"
                : "bg-lime-400 shadow-lime-400/25 hover:bg-lime-300"
            }`}
          >
            <span>Try Live Demo</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              isDark
                ? "border-white/15 bg-black/40 text-amber-300"
                : "border-slate-200 bg-slate-100 text-slate-700"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={onOpenPalette}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              isDark
                ? "border-white/15 bg-black/40 text-lime-300"
                : "border-slate-200 bg-slate-100 text-lime-600"
            }`}
            aria-label="Open Command Palette"
          >
            <Command size={16} />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              isDark
                ? "border-white/15 bg-black/40 text-white"
                : "border-slate-200 bg-slate-100 text-slate-800"
            }`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div
          className={`relative z-10 border-t px-6 py-6 backdrop-blur-2xl md:hidden ${
            isDark
              ? "border-white/10 bg-[#07080a]/95 text-white"
              : "border-slate-200 bg-white/95 text-slate-900"
          }`}
        >
          <div className="flex flex-col gap-4">
            {[
              { href: "#workflow", label: "Workflow" },
              { href: "#features", label: "Features" },
              { href: "#product", label: "Focus Workbench" },
              { href: "#calculator", label: "ROI Calculator" },
              { href: "#manifesto", label: "Manifesto" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`text-sm font-medium transition ${
                  isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#product"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black shadow-lg"
              >
                <span>Try Live Demo</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}