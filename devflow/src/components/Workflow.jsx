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
import { useTheme } from "../context/ThemeContext";

export default function Workflow() {
  const [workflowMode, setWorkflowMode] = useState("devflow"); // "chaos" | "devflow"
  const { isDark } = useTheme();

  const chaosPoints = [
    {
      title: "15 Open Browser Tabs",
      description: "GitHub PRs, Linear issues, Jira backlogs, and Google Docs competing for your RAM and focus.",
      icon: AlertTriangle,
      bgImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Scattered Task Notes",
      description: "Half your todos are in Apple Notes, half in Slack saved messages, and the rest in sticky notes.",
      icon: Layers,
      bgImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Lost Git Context",
      description: "Returning after a weekend and spending 45 minutes figuring out which branch was doing what.",
      icon: GitMerge,
      bgImg: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Heavyweight SaaS Lag",
      description: "Spinning loading spinners for 8 seconds just to check off a 2-minute bugfix task.",
      icon: ShieldAlert,
      bgImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const devflowPoints = [
    {
      title: "Single Command Center",
      description: "All your active repositories, milestones, and daily tasks in one lightning-fast pane.",
      icon: Zap,
      bgImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Local-First Instant State",
      description: "Zero network latency (<4ms response). Works entirely offline on flights, trains, and coffee shops.",
      icon: Cpu,
      bgImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Git-Native Velocity",
      description: "Automatically tracks real commits and PR momentum directly connected to your goals.",
      icon: Code2,
      bgImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Zero Context Switching",
      description: "Keyboard-driven Cmd+K palette and terminal access so your hands never have to leave the home row.",
      icon: Target,
      bgImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      id="workflow"
      className={`relative overflow-hidden border-t px-6 py-28 lg:px-8 lg:py-36 transition-colors duration-300 ${
        isDark ? "border-white/10" : "border-slate-200"
      }`}
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
          <p
            className={`text-sm font-medium uppercase tracking-[0.2em] ${
              isDark ? "text-lime-300" : "text-lime-700 font-bold"
            }`}
          >
            Workflow Architecture
          </p>

          <h2
            className={`mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Compare the reality of
            <br />
            <span className={isDark ? "text-white/40" : "text-slate-400"}>
              developer friction.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
              isDark ? "text-white/50" : "text-slate-600"
            }`}
          >
            Software engineering shouldn't feel like administrative busywork.
            Toggle between traditional fragmented workflows and the DevFlow unified model.
          </p>

          {/* Interactive Comparison Switch */}
          <div
            className={`mt-10 inline-flex items-center rounded-2xl border p-1.5 shadow-xl backdrop-blur-md ${
              isDark ? "border-white/10 bg-[#0e1015]" : "border-slate-200 bg-slate-100"
            }`}
          >
            <button
              onClick={() => setWorkflowMode("chaos")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition ${
                workflowMode === "chaos"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : isDark
                  ? "text-white/45 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <AlertTriangle size={14} className={workflowMode === "chaos" ? "text-rose-400" : ""} />
              <span>The Fragmented Chaos</span>
            </button>

            <button
              onClick={() => setWorkflowMode("devflow")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition ${
                workflowMode === "devflow"
                  ? "bg-lime-300 text-black shadow-lg shadow-lime-300/20"
                  : isDark
                  ? "text-white/45 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap size={14} />
              <span>The DevFlow Unified Engine</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Interactive Cards Grid with In-Card Images */}
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
                {chaosPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:scale-[1.02] shadow-md ${
                        isDark
                          ? "border-rose-500/20 bg-[#0e0c10] hover:border-rose-500/50"
                          : "border-rose-200 bg-rose-50/40 hover:border-rose-300"
                      }`}
                    >
                      {/* Card In-Card Image Thumbnail */}
                      <div className="mb-4 h-28 w-full overflow-hidden rounded-xl border border-rose-500/30 shadow-md">
                        <img
                          src={point.bgImg}
                          alt={point.title}
                          className="h-full w-full object-cover brightness-90 contrast-110 transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-500">
                        <Icon size={18} />
                      </div>
                      <h3
                        className={`mt-4 text-base font-semibold ${
                          isDark ? "text-rose-200" : "text-rose-950"
                        }`}
                      >
                        {point.title}
                      </h3>
                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isDark ? "text-white/50" : "text-slate-600"
                        }`}
                      >
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
                {devflowPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-300 hover:scale-[1.02] shadow-xl ${
                        isDark
                          ? "border-lime-300/30 bg-[#0a0d10] hover:border-lime-300/70"
                          : "border-slate-200 bg-white hover:border-lime-400 hover:shadow-slate-200"
                      }`}
                    >
                      {/* Card In-Card Image Thumbnail */}
                      <div
                        className={`mb-4 h-28 w-full overflow-hidden rounded-xl border shadow-md ${
                          isDark ? "border-lime-300/30" : "border-slate-200"
                        }`}
                      >
                        <img
                          src={point.bgImg}
                          alt={point.title}
                          className="h-full w-full object-cover brightness-100 contrast-110 transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                          isDark
                            ? "border-lime-300/20 bg-lime-300/10 text-lime-300"
                            : "border-lime-500/30 bg-lime-50 text-lime-700"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <h3
                        className={`mt-4 text-base font-semibold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {point.title}
                      </h3>
                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isDark ? "text-white/60" : "text-slate-600"
                        }`}
                      >
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Unified Banner Callout Card with Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div
            className={`relative overflow-hidden rounded-3xl border p-8 sm:p-10 lg:p-12 shadow-2xl ${
              isDark
                ? "border-lime-300/30 bg-gradient-to-r from-[#0e141a] via-[#101720] to-[#0e141a]"
                : "border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
            }`}
          >
            {/* Banner Background Image - Clearly Visible */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Cyber Matrix Banner"
                className="h-full w-full object-cover opacity-45 brightness-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080a0e]/85 via-[#080a0e]/40 to-[#080a0e]/85" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-black shadow-lg shadow-lime-300/20">
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

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
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