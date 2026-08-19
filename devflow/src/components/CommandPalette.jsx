import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
  GitBranch,
  Calculator,
  ExternalLink,
  X,
  Code2,
} from "lucide-react";

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      id: "demo",
      title: "Interactive Focus Workbench",
      category: "Product",
      icon: Target,
      shortcut: "↵",
      perform: () => {
        document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "workflow",
      title: "Explore Developer Workflow",
      category: "Navigation",
      icon: Layers,
      shortcut: "W",
      perform: () => {
        document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "features",
      title: "Engineered For Speed & Privacy",
      category: "Navigation",
      icon: Zap,
      shortcut: "F",
      perform: () => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "calculator",
      title: "Context-Switch ROI Calculator",
      category: "Tools",
      icon: Calculator,
      shortcut: "C",
      perform: () => {
        document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "terminal",
      title: "Open DevFlow CLI & Matrix Rain",
      category: "Easter Egg",
      icon: Terminal,
      shortcut: "Konami",
      badge: "Secret",
      perform: () => {
        onClose();
        if (onOpenTerminal) onOpenTerminal();
      },
    },
    {
      id: "manifesto",
      title: "Read Engineering Philosophy & Architecture",
      category: "Honesty",
      icon: Code2,
      shortcut: "M",
      perform: () => {
        document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [isOpen, filtered, selectedIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0f1115] shadow-2xl shadow-black/80"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search size={18} className="text-lime-300 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="rounded p-1 text-white/40 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-white/40">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={item.id}
                      onClick={() => item.perform()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition ${
                        isSelected
                          ? "bg-lime-300/10 text-white border border-lime-300/20"
                          : "text-white/70 hover:bg-white/[0.03] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                            isSelected
                              ? "bg-lime-300 text-black font-semibold"
                              : "bg-white/[0.05] text-white/60"
                          }`}
                        >
                          <Icon size={15} />
                        </div>
                        <div>
                          <span className="font-medium text-white/90">
                            {item.title}
                          </span>
                          <span className="ml-2 text-xs text-white/35">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="rounded-full bg-lime-300/20 px-2 py-0.5 text-[10px] font-mono text-lime-300">
                            {item.badge}
                          </span>
                        )}
                        <span className="rounded border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                          {item.shortcut}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Tip */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/40">
              <span>Navigate with ↑ ↓ and ↵ to select</span>
              <span className="font-mono text-[11px] text-lime-300/80">ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
