import { Terminal, Code2 } from "lucide-react";

export default function Footer({ onOpenTerminal, onOpenPalette }) {
  return (
    <footer className="border-t border-white/10 bg-[#060709] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 font-mono text-black">
                ◈
              </span>
              <span className="text-white">DevFlow</span>
            </div>

            <p className="mt-2.5 text-sm text-white/40 max-w-sm">
              The developer command center. High throughput, local-first architecture, zero bloat.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50 font-medium">
            <a href="#workflow" className="transition hover:text-lime-300">
              Workflow
            </a>
            <a href="#features" className="transition hover:text-lime-300">
              Features
            </a>
            <a href="#product" className="transition hover:text-lime-300">
              Focus Workbench
            </a>
            <a href="#calculator" className="transition hover:text-lime-300">
              ROI Calculator
            </a>
            <a href="#manifesto" className="transition hover:text-lime-300">
              Manifesto
            </a>
            <button
              onClick={onOpenPalette}
              className="text-white/40 transition hover:text-white"
            >
              Cmd+K
            </button>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1 text-lime-300/80 transition hover:text-lime-300"
            >
              <Terminal size={13} />
              <span>Terminal CLI</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 font-mono">
          <p>© 2026 DevFlow Core Engine. Built with taste for the Acdyon Challenge.</p>
          <div className="flex items-center gap-4">
            <span>Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}