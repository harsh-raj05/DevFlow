import { useState } from "react";
import { ArrowUpRight, Menu, X, Command, Terminal, Sparkles } from "lucide-react";

export default function Navbar({ onOpenPalette, onOpenTerminal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

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
    <nav className="fixed left-0 top-0 z-40 w-full border-b border-lime-300/20 bg-[#07080a]/60 backdrop-blur-2xl transition-all duration-300 overflow-hidden shadow-2xl">
      {/* Crisp Visible Navbar Background Image */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
          alt="Developer Matrix Network"
          className="h-full w-full object-cover object-center opacity-45 brightness-110 contrast-125"
        />
        {/* Transparent Dark Gradient Overlay for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/90 via-[#07080a]/60 to-[#07080a]/90" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/40 to-transparent" />
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
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300 font-mono text-black font-bold shadow-lg shadow-lime-300/30 transition group-hover:scale-105 group-hover:bg-lime-200">
              ◈
            </span>
            <span className="text-white font-bold drop-shadow">DevFlow</span>
          </a>

          {/* Status Badge */}
          <div className="hidden items-center gap-1.5 rounded-full border border-lime-300/30 bg-lime-300/10 px-2.5 py-1 text-[11px] font-medium text-lime-300 backdrop-blur-md sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-300" />
            <span>v2.4 Live</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#workflow"
            className="text-sm font-medium text-white/80 transition hover:text-lime-300 drop-shadow-sm"
          >
            Workflow
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-white/80 transition hover:text-lime-300 drop-shadow-sm"
          >
            Features
          </a>

          <a
            href="#product"
            className="text-sm font-medium text-white/80 transition hover:text-lime-300 drop-shadow-sm"
          >
            Focus Workbench
          </a>

          <a
            href="#calculator"
            className="text-sm font-medium text-white/80 transition hover:text-lime-300 drop-shadow-sm"
          >
            ROI Calculator
          </a>

          <a
            href="#manifesto"
            className="text-sm font-medium text-white/80 transition hover:text-lime-300 drop-shadow-sm"
          >
            Manifesto
          </a>
        </div>

        {/* Desktop Actions & Search */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Quick Command Palette Button */}
          <button
            type="button"
            onClick={onOpenPalette}
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 text-xs text-white/80 backdrop-blur-md transition hover:border-lime-300/40 hover:bg-black/60 hover:text-white"
            title="Press Cmd+K or Ctrl+K to search"
          >
            <Command size={13} className="text-lime-300" />
            <span>Search</span>
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/60">
              ⌘K
            </kbd>
          </button>

          {/* Quick CTA */}
          <a
            href="#product"
            className="group flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-lime-300/25 transition hover:bg-lime-200 hover:scale-105"
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
            onClick={onOpenPalette}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white"
            aria-label="Open Command Palette"
          >
            <Command size={16} className="text-lime-300" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="relative z-10 border-t border-white/10 bg-[#07080a]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#workflow"
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Workflow
            </a>

            <a
              href="#features"
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#product"
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Focus Workbench
            </a>

            <a
              href="#calculator"
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              ROI Calculator
            </a>

            <a
              href="#manifesto"
              onClick={closeMenu}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              Manifesto
            </a>

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