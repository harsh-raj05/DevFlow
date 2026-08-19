import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, BatteryCharging, Zap, ArrowRight } from "lucide-react";

export default function DevCalculator() {
  const [activeProjects, setActiveProjects] = useState(4);
  const [toolsSwitched, setToolsSwitched] = useState(6);
  const [hoursCodingDaily, setHoursCodingDaily] = useState(6);

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
    <section id="calculator" className="relative border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-300">
            Interactive Analysis
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            The hidden cost of
            <br />
            <span className="text-white/40">context switching.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
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
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f14] shadow-2xl"
        >
          <div className="grid lg:grid-cols-[1fr_380px]">
            {/* Interactive Sliders Form */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300/10 text-lime-300">
                  <Calculator size={18} />
                </div>
                <h3 className="text-xl font-semibold">Your Workflow Profile</h3>
              </div>

              <div className="mt-8 space-y-8">
                {/* Slider 1: Active Projects */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white/80">Active Projects & Repos</span>
                    <span className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono font-semibold text-lime-300">
                      {activeProjects} {activeProjects === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={activeProjects}
                    onChange={(e) => setActiveProjects(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-300 cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-white/30">
                    <span>1 (Single Focus)</span>
                    <span>10 (Heavy Multitasking)</span>
                  </div>
                </div>

                {/* Slider 2: Daily Tools/Tabs */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white/80">Tools & Services Switched Daily</span>
                    <span className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono font-semibold text-lime-300">
                      {toolsSwitched} tools
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    value={toolsSwitched}
                    onChange={(e) => setToolsSwitched(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-300 cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-white/30">
                    <span>2 (Git + IDE)</span>
                    <span>15 (Jira, Slack, Notion, PRs, Notes, CI)</span>
                  </div>
                </div>

                {/* Slider 3: Daily Coding Hours */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white/80">Daily Engineering Time</span>
                    <span className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono font-semibold text-lime-300">
                      {hoursCodingDaily} hrs/day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={hoursCodingDaily}
                    onChange={(e) => setHoursCodingDaily(Number(e.target.value))}
                    className="mt-3 w-full accent-lime-300 cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-white/30">
                    <span>3 hrs (Part-time)</span>
                    <span>12 hrs (Intense Shipping)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Results Card */}
            <div className="border-t border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:border-l lg:border-t-0 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/40 font-mono">
                  Weekly Impact Analysis
                </p>

                <div className="mt-6 space-y-6">
                  {/* Metric 1 */}
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
                    <div className="flex items-center gap-2 text-rose-400">
                      <Clock size={16} />
                      <span className="text-xs font-medium">Cognitive Tax Lost</span>
                    </div>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      ~{hoursLostPerWeek} <span className="text-sm font-normal text-white/50">hrs / week</span>
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Wasted in tab searches, lost context, and mental restarts
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="rounded-2xl border border-lime-300/20 bg-lime-300/[0.05] p-4">
                    <div className="flex items-center gap-2 text-lime-300">
                      <BatteryCharging size={16} />
                      <span className="text-xs font-medium">Reclaimed Deep Work</span>
                    </div>
                    <p className="mt-2 text-3xl font-semibold text-lime-300">
                      +{focusHoursRecovered} <span className="text-sm font-normal text-lime-200/60">hrs / week</span>
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Directly returned to writing code and shipping features
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#product"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.05] py-3 text-sm font-medium text-white transition hover:bg-lime-300 hover:text-black"
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
