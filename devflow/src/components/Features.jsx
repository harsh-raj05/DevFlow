import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FolderKanban,
  Target,
  TrendingUp,
  GitBranch,
  Flame,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  const [selectedBranch, setSelectedBranch] = useState("main");
  const [isZenActive, setIsZenActive] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Commit heatmap mock matrix for visual 2
  const heatmapWeeks = Array.from({ length: 14 }, (_, w) =>
    Array.from({ length: 5 }, (_, d) => {
      const level = Math.floor(Math.random() * 4);
      return { week: w, day: d, count: level * 3 + (level > 0 ? 1 : 0), level };
    })
  );

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-300">
            Engineered For Speed
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Less managing.
            <br />
            <span className="text-white/40">More shipping.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Every feature in DevFlow is built around one premise: reducing friction between
            your thoughts and working code.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* CARD 1: Git-Native Multi-Branch State */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f13] p-7 transition duration-300 hover:border-lime-300/30 hover:scale-[1.01] sm:p-8 shadow-xl"
          >
            <div>
              {/* In-Card Media Banner */}
              <div className="mb-6 h-36 w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="Git Terminal Worktrees"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium tracking-[0.15em] text-white/30">
                  01 / ARCHITECTURE
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-300">
                  <GitBranch size={16} />
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                Git-Native Worktrees
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-white/45">
                Switch branch contexts without losing your sprint task list or active notes.
              </p>
            </div>

            {/* Interactive Branch Switcher Visual */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                <span>SELECT BRANCH</span>
                <span className="text-lime-300">Local Git State</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["main", "feat/auth-v2", "perf/render-mesh"].map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-mono transition ${
                      selectedBranch === branch
                        ? "bg-lime-300 text-black font-semibold shadow"
                        : "bg-white/[0.04] text-white/60 hover:text-white"
                    }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs font-mono">
                <div className="flex items-center justify-between text-white/70">
                  <span>HEAD @ {selectedBranch}</span>
                  <span className="text-emerald-400">clean</span>
                </div>
                <p className="mt-1 text-[11px] text-white/30 truncate">
                  Latest: update build pipeline hooks & tests
                </p>
              </div>
            </div>
          </motion.article>

          {/* CARD 2: Commit Velocity Heatmap */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f13] p-7 transition duration-300 hover:border-lime-300/30 hover:scale-[1.01] sm:p-8 shadow-xl"
          >
            <div>
              {/* In-Card Media Banner */}
              <div className="mb-6 h-36 w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Analytics Velocity"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium tracking-[0.15em] text-white/30">
                  02 / VELOCITY
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-300">
                  <TrendingUp size={16} />
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                Real Coding Momentum
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-white/45">
                Authentic commit analytics aggregated across all your local project folders.
              </p>
            </div>

            {/* Interactive Heatmap Matrix Visual */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                <span>COMMIT DENSITY</span>
                <span className="text-lime-300 font-semibold">+18% this month</span>
              </div>

              <div className="flex gap-1 overflow-x-auto pb-1">
                {heatmapWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((cell, dIdx) => {
                      const colors = [
                        "bg-white/[0.05]",
                        "bg-lime-900/60",
                        "bg-lime-500/70",
                        "bg-lime-300",
                      ];
                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredCell(cell)}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`h-3 w-3 rounded-sm ${colors[cell.level]} transition-transform hover:scale-125 cursor-pointer`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="mt-3 text-[11px] font-mono text-white/40 text-center h-4">
                {hoveredCell ? (
                  <span className="text-lime-300 font-medium">
                    {hoveredCell.count} contributions on Day {hoveredCell.day + 1}
                  </span>
                ) : (
                  <span>Hover grid blocks to inspect daily commits</span>
                )}
              </div>
            </div>
          </motion.article>

          {/* CARD 3: Deep Work Zen Mode */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f13] p-7 transition duration-300 hover:border-lime-300/30 hover:scale-[1.01] sm:p-8 shadow-xl"
          >
            <div>
              {/* In-Card Media Banner */}
              <div className="mb-6 h-36 w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Zen Focus Workspace"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium tracking-[0.15em] text-white/30">
                  03 / FOCUS
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-300">
                  <Flame size={16} />
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                Deep Work Zen Lock
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-white/45">
                Block distractions and keep your single active priority front and center.
              </p>
            </div>

            {/* Interactive Zen Mode Trigger Visual */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                <span>FOCUS MODE</span>
                <button
                  onClick={() => setIsZenActive((prev) => !prev)}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-mono transition ${
                    isZenActive
                      ? "bg-lime-300 text-black font-bold shadow-md shadow-lime-300/20"
                      : "bg-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  {isZenActive ? "ZEN ACTIVE" : "TOGGLE ZEN"}
                </button>
              </div>

              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  isZenActive
                    ? "border-lime-300/40 bg-lime-300/[0.07]"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isZenActive ? "bg-lime-300 animate-ping" : "bg-white/30"
                    }`}
                  />
                  <span className="text-xs font-semibold text-white">
                    {isZenActive ? "Deep Focus: Zero Distractions" : "Standard Workspace View"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-white/50">
                  {isZenActive
                    ? "All non-essential badges muted. High throughput unlocked."
                    : "Click 'TOGGLE ZEN' to preview distraction-free mode."}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}