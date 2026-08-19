import { Terminal, Code2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Footer({ onOpenTerminal, onOpenPalette }) {
  const { isDark } = useTheme();

  return (
    <footer
      className={`border-t px-6 py-12 lg:px-8 transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#060709] text-white"
          : "border-slate-200 bg-slate-100/80 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 font-mono text-black">
                ◈
              </span>
              <span>DevFlow</span>
            </div>

            <p className={`mt-2.5 text-sm max-w-sm ${isDark ? "text-white/40" : "text-slate-500"}`}>
              The developer command center. High throughput, local-first architecture, zero bloat.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            {[
              { href: "#workflow", label: "Workflow" },
              { href: "#features", label: "Features" },
              { href: "#product", label: "Focus Workbench" },
              { href: "#calculator", label: "ROI Calculator" },
              { href: "#manifesto", label: "Manifesto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition ${
                  isDark ? "text-white/50 hover:text-lime-300" : "text-slate-600 hover:text-lime-600"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenPalette}
              className={`transition ${
                isDark ? "text-white/40 hover:text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Cmd+K
            </button>
            <button
              onClick={onOpenTerminal}
              className={`flex items-center gap-1 font-bold transition ${
                isDark ? "text-lime-300/80 hover:text-lime-300" : "text-lime-700 hover:text-lime-800"
              }`}
            >
              <Terminal size={13} />
              <span>Terminal CLI</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 text-xs font-mono ${
            isDark ? "border-white/10 text-white/30" : "border-slate-200 text-slate-500"
          }`}
        >
          <p>© 2026 DevFlow Core Engine. Built with taste for the Acdyon Challenge.</p>
          <div className="flex items-center gap-4">
            <span>Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}