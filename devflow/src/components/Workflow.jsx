import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  FolderKanban,
  Target,
  ListTodo,
  AlertTriangle,
  Zap,
  ArrowRight,
  Layers,
  GitMerge,
  Cpu,
  ShieldAlert,
} from "lucide-react";

export default function Workflow() {
  const [workflowMode, setWorkflowMode] = useState("devflow"); // "chaos" | "devflow"

  const chaosPoints = [
    {
      title: "15 Open Browser Tabs",
      description: "GitHub PRs, Linear issues, Jira backlogs, and Google Docs competing for your RAM and focus.",
      icon: AlertTriangle,
    },
    {
      title: "Scattered Task Notes",
      description: "Half your todos are in Apple Notes, half in Slack saved messages, and the rest in sticky notes.",
      icon: Layers,
    },
    {
      title: "Lost Git Context",
      description: "Returning after a weekend and spending 45 minutes figuring out which branch was doing what.",
      icon: GitMerge,
    },
    {
      title: "Heavyweight SaaS Lag",
      description: "Spinning loading spinners for 8 seconds just to check off a 2-minute bugfix task.",
      icon: ShieldAlert,
    },
  ];

  const devflowPoints = [
    {
      title: "Single Command Center",
      description: "All your active repositories, milestones, and daily tasks in one lightning-fast pane.",
      icon: Zap,
    },
    {
      title: "Local-First Instant State",
      description: "Zero network latency (<4ms response). Works entirely offline on flights, trains, and coffee shops.",
      icon: Cpu,
    },
    {
      title: "Git-Native Velocity",
      description: "Automatically tracks real commits and PR momentum directly connected to your goals.",
      icon: Code2,
    },
    {
      title: "Zero Context Switching",
      description: "Keyboard-driven Cmd+K palette and terminal access so your hands never have to leave the home row.",
      icon: Target,
    },
  ];

  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-300">
            Workflow Architecture
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Compare the reality of
            <br />
            <span className="text-white/40">developer friction.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Software engineering shouldn't feel like administrative busywork.
            Toggle between traditional fragmented workflows and the DevFlow unified model.
          </p>

          {/* Interactive Comparison Switch */}
          <div className="mt-10 inline-flex items-center rounded-2xl border border-white/10 bg-[#0e1015] p-1.5 shadow-xl">
            <button
              onClick={() => setWorkflowMode("chaos")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition ${
                workflowMode === "chaos"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : "text-white/45 hover:text-white"
              }`}
            >
              <AlertTriangle size={14} className={workflowMode === "chaos" ? "text-rose-400" : ""} />
              <span>The Fragmented Chaos</span>
            </button>

            <button
              onClick={() => setWorkflowMode("devflow")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition ${
                workflowMode === "devflow"
                  ? "bg-lime-300 text-black shadow-lg shadow-lime-300/20"
                  : "text-white/45 hover:text-white"
              }`}
            >
              <Zap size={14} />
              <span>The DevFlow Unified Engine</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <AnimatePresence mode="wait">
            {workflowMode === "chaos" ? (
              <motion.div
                key="chaos"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {chaosPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="group relative rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-6 transition duration-300 hover:border-rose-500/40"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-rose-200">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/45">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="devflow"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {devflowPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="group relative rounded-2xl border border-lime-300/25 bg-lime-300/[0.03] p-6 transition duration-300 hover:border-lime-300/50 hover:bg-lime-300/[0.06]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-white">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/50">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Unified Banner Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-lime-300/20 bg-gradient-to-r from-lime-300/[0.06] via-white/[0.02] to-cyan-500/[0.04] p-8 sm:p-10 lg:p-12">
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-black">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime-300">
                  The DevFlow Guarantee
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl text-white">
                Everything you need to write great code,
                without anything that slows down your machine.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
                DevFlow turns messy terminal histories, fragmented PR tabs, and mental backlogs into
                a clean, single-glance focus canvas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}