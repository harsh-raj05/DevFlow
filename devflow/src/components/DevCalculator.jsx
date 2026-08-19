import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, BatteryCharging, Zap, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function DevCalculator() {
  const [activeProjects, setActiveProjects] = useState(4);
  const [toolsSwitched, setToolsSwitched] = useState(6);
  const [hoursCodingDaily, setHoursCodingDaily] = useState(6);
  const { isDark } = useTheme();

  // Cognitive context switching tax formula (approx 15-20 min latency per major switch)
  const contextLossDailyMinutes = Math.min(
    Math.round(activeProjects * 18 + toolsSwitched * 12),
    hoursCodingDaily * 35
  );
  const hoursLostPerWeek = ((contextLossDailyMinutes * 5) / 60).toFixed(1);
  const focusHoursRecovered = ((hoursLostPerWeek * 0.72)).toFixed(1);
  const deepWorkEfficiency = Math.round(
    ((hoursCodingDaily * 5 - hoursLostPerWeek) / (hoursCodingDaily * 5)) * 100
  );

  return (
    <section
      id="calculator"
      className={`relative overflow-hidden border-t px-6 py-28 lg:px-8 lg:py-36 transition-colors duration-300 ${
        isDark ? "border-white/10" : "border-slate-200"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-medium uppercase tracking-[0.2em] ${
              isDark ? "text-lime-300" : "text-lime-700 font-bold"
            }`}
          >
            Interactive Analysis
          </p>
          <h2
            className={`mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            The hidden cost of
            <br />
            <span className={isDark ? "text-white/40" : "text-slate-400"}>context switching.</span>
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
              isDark ? "text-white/50" : "text-slate-600"
            }`}
          >
            Every tab switch, missing PR state, and lost task note costs cognitive energy.
            See how much deep work you reclaim by consolidating into one focused workspace.
          </p>
        </div>

        {/* Calculator Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`relative mt-16 overflow-hidden rounded-3xl border shadow-2xl transition-colors duration-300 ${
            isDark
              ? "border-white/10 bg-[#0d0f14] text-white shadow-black/80"
              : "border-slate-200 bg-white text-slate-900 shadow-slate-200"
          }`}
        >
          {/* Card Background Circuit Texture - Clearly Visible */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Microprocessor Texture"
              className={`h-full w-full object-cover transition duration-300 ${
                isDark ? "opacity-35 brightness-110 contrast-125" : "opacity-15 brightness-125"
              }`}
            />
            <div
              className={`absolute inset-0 transition-colors duration-300 ${
                isDark
                  ? "bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/65 to-[#0d0f14]/80"
                  : "bg-gradient-to-t from-white via-white/70 to-white/80"
              }`}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1fr_380px]">
            {/* Interactive Sliders Form */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg shadow-md ${
                    isDark
                      ? "bg-lime-300/10 text-lime-300"
                      : "bg-lime-500/10 text-lime-700 font-bold"
                  }`}
                >
                  <Calculator size={18} />
                </div>
                <h3 className="text-xl font-semibold">Your Workflow Profile</h3>
              </div>

              <div className="mt-8 space-y-8">
                {/* Slider 1: Active Projects */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${isDark ? "text-white/80" : "text-slate-700"}`}>
                      Active Projects & Repos
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono font-bold ${
                        isDark
                          ? "bg-white/[0.06] text-lime-300"
                          : "bg-lime-100 text-lime-800"
                      }`}
                    >
                      {activeProjects} {activeProjects === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={activeProjects}
                    onChange={(e) => setActiveProjects(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-400 cursor-pointer"
                  />
                  <div
                    className={`mt-1 flex justify-between text-[11px] ${
                      isDark ? "text-white/30" : "text-slate-400"
                    }`}
                  >
                    <span>1 (Single Focus)</span>
                    <span>10 (Heavy Multitasking)</span>
                  </div>
                </div>

                {/* Slider 2: Daily Tools/Tabs */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${isDark ? "text-white/80" : "text-slate-700"}`}>
                      Tools & Services Switched Daily
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono font-bold ${
                        isDark
                          ? "bg-white/[0.06] text-lime-300"
                          : "bg-lime-100 text-lime-800"
                      }`}
                    >
                      {toolsSwitched} tools
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    value={toolsSwitched}
                    onChange={(e) => setToolsSwitched(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-400 cursor-pointer"
                  />
                  <div
                    className={`mt-1 flex justify-between text-[11px] ${
                      isDark ? "text-white/30" : "text-slate-400"
                    }`}
                  >
                    <span>2 (Git + IDE)</span>
                    <span>15 (Jira, Slack, Notion, PRs, Notes, CI)</span>
                  </div>
                </div>

                {/* Slider 3: Daily Coding Hours */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${isDark ? "text-white/80" : "text-slate-700"}`}>
                      Daily Engineering Time
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono font-bold ${
                        isDark
                          ? "bg-white/[0.06] text-lime-300"
                          : "bg-lime-100 text-lime-800"
                      }`}
                    >
                      {hoursCodingDaily} hrs/day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={hoursCodingDaily}
                    onChange={(e) => setHoursCodingDaily(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-400 cursor-pointer"
                  />
                  <div
                    className={`mt-1 flex justify-between text-[11px] ${
                      isDark ? "text-white/30" : "text-slate-400"
                    }`}
                  >
                    <span>3 hrs (Part-time)</span>
                    <span>12 hrs (Intense Shipping)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Results Card */}
            <div
              className={`p-6 sm:p-10 lg:border-l lg:border-t-0 flex flex-col justify-between backdrop-blur-md ${
                isDark
                  ? "border-t border-white/10 bg-black/40"
                  : "border-t border-slate-200 bg-slate-50"
              }`}
            >
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.15em] font-mono ${
                    isDark ? "text-white/40" : "text-slate-500 font-bold"
                  }`}
                >
                  Weekly Impact Analysis
                </p>

                <div className="mt-6 space-y-6">
                  {/* Metric 1 */}
                  <div
                    className={`rounded-2xl border p-4 backdrop-blur-sm ${
                      isDark
                        ? "border-rose-500/20 bg-rose-500/[0.04]"
                        : "border-rose-200 bg-rose-50/70"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-rose-500 font-semibold">
                      <Clock size={16} />
                      <span className="text-xs">Cognitive Tax Lost</span>
                    </div>
                    <p className="mt-2 text-3xl font-semibold">
                      ~{hoursLostPerWeek} <span className="text-sm font-normal opacity-60">hrs / week</span>
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        isDark ? "text-white/40" : "text-slate-600"
                      }`}
                    >
                      Wasted in tab searches, lost context, and mental restarts
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div
                    className={`rounded-2xl border p-4 backdrop-blur-sm ${
                      isDark
                        ? "border-lime-300/20 bg-lime-300/[0.05]"
                        : "border-lime-300 bg-lime-50/70"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 font-semibold ${
                        isDark ? "text-lime-300" : "text-lime-700"
                      }`}
                    >
                      <BatteryCharging size={16} />
                      <span className="text-xs">Reclaimed Deep Work</span>
                    </div>
                    <p
                      className={`mt-2 text-3xl font-bold ${
                        isDark ? "text-lime-300" : "text-lime-700"
                      }`}
                    >
                      +{focusHoursRecovered} <span className="text-sm font-normal opacity-70">hrs / week</span>
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        isDark ? "text-white/40" : "text-slate-600"
                      }`}
                    >
                      Directly returned to writing code and shipping features
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div
                className={`mt-8 pt-6 border-t ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <a
                  href="#product"
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition shadow-lg ${
                    isDark
                      ? "bg-white/[0.05] text-white hover:bg-lime-300 hover:text-black"
                      : "bg-slate-900 text-white hover:bg-lime-400 hover:text-black"
                  }`}
                >
                  <span>Experience Unified Focus</span>
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
