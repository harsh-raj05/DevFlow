import { useState } from "react";
import {
  ArrowRight,
  Play,
  GitBranch,
  GitPullRequest,
  CheckCircle2,
  Clock,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  Flame,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Hero({ onOpenTerminal }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeframe, setTimeframe] = useState("7d");
  const [hoveredBar, setHoveredBar] = useState(null);
  const { isDark } = useTheme();

  // Commit and activity data depending on timeframe
  const activityData = {
    "today": [
      { label: "09:00", commits: 2, height: 40 },
      { label: "11:00", commits: 4, height: 75 },
      { label: "13:00", commits: 1, height: 25 },
      { label: "15:00", commits: 6, height: 95 },
      { label: "17:00", commits: 3, height: 60 },
      { label: "19:00", commits: 5, height: 85 },
    ],
    "7d": [
      { label: "Mon", commits: 6, height: 50 },
      { label: "Tue", commits: 12, height: 92 },
      { label: "Wed", commits: 8, height: 68 },
      { label: "Thu", commits: 14, height: 100 },
      { label: "Fri", commits: 9, height: 75 },
      { label: "Sat", commits: 4, height: 35 },
      { label: "Sun", commits: 7, height: 58 },
    ],
    "sprint": [
      { label: "W1", commits: 38, height: 65 },
      { label: "W2", commits: 52, height: 88 },
      { label: "W3", commits: 61, height: 100 },
      { label: "W4", commits: 44, height: 74 },
    ],
  };

  const currentBars = activityData[timeframe] || activityData["7d"];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-8 lg:pb-36 lg:pt-28 transition-colors duration-300">
      {/* Central Radiant Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-10 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full blur-[150px] transition-colors duration-500 ${
          isDark ? "bg-lime-300/10" : "bg-lime-400/15"
        }`}
      />

      <div className="mx-auto max-w-7xl">
        {/* Hero Header Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-mono backdrop-blur-md ${
              isDark
                ? "border-lime-300/20 bg-lime-300/[0.05] text-lime-300"
                : "border-lime-600/30 bg-lime-500/10 text-lime-700 font-semibold"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full animate-ping ${
                isDark ? "bg-lime-300" : "bg-lime-600"
              }`}
            />
            <span>DEV COMMAND CENTER</span>
            <span className={isDark ? "text-white/30" : "text-slate-400"}>•</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>Local-First & Git-Native</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-8xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Build more.
            <br />
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-white/90 via-white/50 to-white/20 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 bg-clip-text text-transparent"
              }
            >
              Track less.
            </span>
          </motion.h1>

          {/* Value Prop Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mx-auto mt-7 max-w-2xl text-base leading-7 sm:text-lg lg:text-xl font-normal ${
              isDark ? "text-white/60" : "text-slate-600"
            }`}
          >
            One unified, keyboard-driven workspace for your active codebases,
            daily focus sessions, and Git momentum. Zero Jira bloat. No context-switch tax.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
          >
            <a
              href="#product"
              className={`group relative flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-4 font-bold text-black shadow-xl transition hover:scale-[1.02] sm:w-auto text-sm ${
                isDark
                  ? "bg-lime-300 shadow-lime-300/25 hover:bg-lime-200"
                  : "bg-lime-400 shadow-lime-500/25 hover:bg-lime-300"
              }`}
            >
              <span>Launch Live Sandbox</span>
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <button
              onClick={onOpenTerminal}
              className={`flex w-full items-center justify-center gap-2 rounded-2xl border px-6 py-4 font-medium backdrop-blur-md transition sm:w-auto text-sm ${
                isDark
                  ? "border-white/10 bg-white/[0.04] text-white hover:border-lime-300/30 hover:bg-white/[0.08]"
                  : "border-slate-300 bg-white text-slate-800 shadow-sm hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <Terminal size={16} className={isDark ? "text-lime-300" : "text-lime-600"} />
              <span>Open Dev Terminal</span>
              <kbd
                className={`hidden sm:inline-block rounded px-1.5 py-0.5 font-mono text-[10px] ${
                  isDark ? "bg-white/10 text-white/40" : "bg-slate-100 text-slate-500"
                }`}
              >
                ~
              </kbd>
            </button>
          </motion.div>
        </div>

        {/* Feature Hero Banner Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className={`mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border p-2 shadow-2xl ${
            isDark
              ? "border-white/15 bg-gradient-to-r from-[#0d1117] via-[#121824] to-[#0d1117]"
              : "border-slate-200 bg-white shadow-slate-200"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            {/* Banner Background Image */}
            <div className="relative h-48 sm:h-60 lg:h-72 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80"
                alt="DevFlow Command Center Banner"
                className="h-full w-full object-cover object-center brightness-95 contrast-110"
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-[#090b0f] via-[#090b0f]/40 to-transparent"
                    : "bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
                }`}
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-r from-[#090b0f]/70 via-transparent to-[#090b0f]/70"
                    : "bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"
                }`}
              />

              {/* Banner Text Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="rounded-full bg-lime-300/25 px-3 py-1 font-mono text-[11px] font-bold text-lime-300 backdrop-blur-md border border-lime-300/30">
                    ⚡ DEV COMMAND DECK v2.4
                  </span>
                  <h3 className="mt-2.5 text-xl sm:text-3xl font-extrabold text-white drop-shadow-md">
                    Engineered for Maximum Coding Throughput
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 font-mono mt-1 drop-shadow">
                    Local Git Repos • Unified Task Stream • Zero Telemetry
                  </p>
                </div>

                <a
                  href="#product"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-lime-300 px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-lime-300/30 transition hover:bg-lime-200 shrink-0 w-fit"
                >
                  <span>Explore Features</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Dashboard Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-12 max-w-6xl"
        >
          {/* Radiant Backdrop Glow */}
          <div
            className={`absolute inset-0 -z-10 rounded-[36px] blur-3xl ${
              isDark
                ? "bg-gradient-to-b from-lime-300/10 via-cyan-400/5 to-transparent"
                : "bg-gradient-to-b from-lime-400/15 via-sky-400/10 to-transparent"
            }`}
          />

          {/* Window Container */}
          <div
            className={`overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-2xl transition-colors duration-300 ${
              isDark
                ? "border-white/15 bg-[#0b0d11]/95 shadow-black/80 text-white"
                : "border-slate-200 bg-white/95 shadow-slate-300/60 text-slate-900"
            }`}
          >
            {/* Window Topbar */}
            <div
              className={`flex h-12 items-center justify-between border-b px-4 sm:px-6 ${
                isDark
                  ? "border-white/10 bg-[#101318]"
                  : "border-slate-200 bg-slate-100/90"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-lime-400/80" />
                <span
                  className={`ml-3 hidden font-mono text-xs sm:inline-block ${
                    isDark ? "text-white/40" : "text-slate-500"
                  }`}
                >
                  workspace ~/devflow-core
                </span>
              </div>

              {/* Window Tabs */}
              <div
                className={`flex items-center gap-1 rounded-xl p-1 border ${
                  isDark
                    ? "bg-white/[0.04] border-white/5"
                    : "bg-slate-200/70 border-slate-300"
                }`}
              >
                {[
                  { id: "overview", label: "Overview", icon: Activity },
                  { id: "git", label: "Git & PRs", icon: GitBranch },
                  { id: "focus", label: "Focus Sprint", icon: Flame },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        isActive
                          ? "bg-lime-300 text-black shadow font-bold"
                          : isDark
                          ? "text-white/60 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Icon size={12} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div
                className={`hidden items-center gap-2 font-mono text-xs md:flex ${
                  isDark ? "text-white/40" : "text-slate-500"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>IndexedDB Sync: 3ms</span>
              </div>
            </div>

            {/* Main Window Dashboard Body */}
            <div className="grid min-h-[460px] grid-cols-1 md:grid-cols-[210px_1fr]">
              {/* Sidebar */}
              <div
                className={`hidden border-r p-5 md:flex md:flex-col md:justify-between ${
                  isDark
                    ? "border-white/10 bg-[#0d1015]"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div>
                  <div
                    className={`mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${
                      isDark ? "text-lime-300" : "text-lime-700"
                    }`}
                  >
                    <span>◈ DevFlow Command</span>
                  </div>

                  <div className="space-y-1 text-sm font-medium">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 transition text-left ${
                        activeTab === "overview"
                          ? isDark
                            ? "bg-lime-300/10 text-lime-300 border border-lime-300/20 font-semibold"
                            : "bg-lime-100 text-lime-800 border border-lime-300 font-semibold"
                          : isDark
                          ? "text-white/50 hover:bg-white/[0.04] hover:text-white"
                          : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                      }`}
                    >
                      <Activity size={15} />
                      <span>Workspace</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("git")}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 transition text-left ${
                        activeTab === "git"
                          ? isDark
                            ? "bg-lime-300/10 text-lime-300 border border-lime-300/20 font-semibold"
                            : "bg-lime-100 text-lime-800 border border-lime-300 font-semibold"
                          : isDark
                          ? "text-white/50 hover:bg-white/[0.04] hover:text-white"
                          : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                      }`}
                    >
                      <GitPullRequest size={15} />
                      <span>Active Repos</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("focus")}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 transition text-left ${
                        activeTab === "focus"
                          ? isDark
                            ? "bg-lime-300/10 text-lime-300 border border-lime-300/20 font-semibold"
                            : "bg-lime-100 text-lime-800 border border-lime-300 font-semibold"
                          : isDark
                          ? "text-white/50 hover:bg-white/[0.04] hover:text-white"
                          : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                      }`}
                    >
                      <Flame size={15} />
                      <span>Deep Focus</span>
                    </button>
                  </div>
                </div>

                {/* Local repo status */}
                <div
                  className={`rounded-xl border p-3 ${
                    isDark
                      ? "border-white/5 bg-white/[0.02]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p
                    className={`text-[11px] font-mono ${
                      isDark ? "text-white/40" : "text-slate-400"
                    }`}
                  >
                    BRANCH
                  </p>
                  <p
                    className={`text-xs font-semibold font-mono flex items-center gap-1 mt-0.5 ${
                      isDark ? "text-lime-300" : "text-lime-700"
                    }`}
                  >
                    <GitBranch size={12} /> main (clean)
                  </p>
                </div>
              </div>

              {/* Dashboard Content Panes */}
              <div className="p-5 sm:p-7">
                <AnimatePresence mode="wait">
                  {/* TAB 1: OVERVIEW */}
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {/* Top status bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p
                            className={`text-xs font-mono ${
                              isDark ? "text-white/40" : "text-slate-500"
                            }`}
                          >
                            SESSION: PRODUCTION SPRINT
                          </p>
                          <h2
                            className={`mt-0.5 text-xl font-bold tracking-tight ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            Developer Command Center
                          </h2>
                        </div>

                        {/* Interactive Timeframe Filter */}
                        <div
                          className={`flex items-center gap-1 rounded-xl border p-1 text-xs ${
                            isDark
                              ? "border-white/10 bg-white/[0.03]"
                              : "border-slate-200 bg-slate-100"
                          }`}
                        >
                          {["today", "7d", "sprint"].map((tf) => (
                            <button
                              key={tf}
                              onClick={() => setTimeframe(tf)}
                              className={`rounded-lg px-2.5 py-1 font-mono transition ${
                                timeframe === tf
                                  ? isDark
                                    ? "bg-lime-300/20 text-lime-300 font-semibold"
                                    : "bg-white text-lime-700 font-bold shadow-sm"
                                  : isDark
                                  ? "text-white/40 hover:text-white"
                                  : "text-slate-500 hover:text-slate-800"
                              }`}
                            >
                              {tf === "today" ? "Today" : tf === "7d" ? "7 Days" : "Sprint"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Stat Metrics Cards with Clearly Visible Card Background Images */}
                      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                        {/* Stat 1 */}
                        <div
                          className={`group relative overflow-hidden rounded-2xl border p-4 transition duration-300 hover:scale-[1.02] shadow-lg ${
                            isDark
                              ? "border-white/15 bg-[#0d0f13] hover:border-lime-300/40"
                              : "border-slate-200 bg-white hover:border-lime-400"
                          }`}
                        >
                          {/* Card Background Image */}
                          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                              alt="Builds Background"
                              className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
                                isDark
                                  ? "opacity-35 brightness-110 contrast-125"
                                  : "opacity-20 brightness-125"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 ${
                                isDark
                                  ? "bg-gradient-to-t from-[#0d0f13] via-[#0d0f13]/60 to-[#0d0f13]/30"
                                  : "bg-gradient-to-t from-white via-white/70 to-white/40"
                              }`}
                            />
                          </div>
                          <div className="relative z-10">
                            <p
                              className={`text-xs font-mono font-semibold ${
                                isDark ? "text-white/60" : "text-slate-500"
                              }`}
                            >
                              ACTIVE BUILDS
                            </p>
                            <p
                              className={`mt-2 text-2xl font-bold font-mono ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              08
                            </p>
                            <span
                              className={`text-[11px] font-mono ${
                                isDark ? "text-lime-300" : "text-lime-600 font-bold"
                              }`}
                            >
                              ● All Passing
                            </span>
                          </div>
                        </div>

                        {/* Stat 2 */}
                        <div
                          className={`group relative overflow-hidden rounded-2xl border p-4 transition duration-300 hover:scale-[1.02] shadow-lg ${
                            isDark
                              ? "border-white/15 bg-[#0d0f13] hover:border-lime-300/40"
                              : "border-slate-200 bg-white hover:border-lime-400"
                          }`}
                        >
                          {/* Card Background Image */}
                          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                              alt="Velocity Background"
                              className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
                                isDark
                                  ? "opacity-35 brightness-110 contrast-125"
                                  : "opacity-20 brightness-125"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 ${
                                isDark
                                  ? "bg-gradient-to-t from-[#0d0f13] via-[#0d0f13]/60 to-[#0d0f13]/30"
                                  : "bg-gradient-to-t from-white via-white/70 to-white/40"
                              }`}
                            />
                          </div>
                          <div className="relative z-10">
                            <p
                              className={`text-xs font-mono font-semibold ${
                                isDark ? "text-white/60" : "text-slate-500"
                              }`}
                            >
                              VELOCITY
                            </p>
                            <p
                              className={`mt-2 text-2xl font-bold font-mono ${
                                isDark ? "text-lime-300" : "text-lime-600"
                              }`}
                            >
                              88%
                            </p>
                            <span
                              className={`text-[11px] font-mono ${
                                isDark ? "text-white/50" : "text-slate-600"
                              }`}
                            >
                              +12% vs last wk
                            </span>
                          </div>
                        </div>

                        {/* Stat 3 */}
                        <div
                          className={`group relative overflow-hidden rounded-2xl border p-4 transition duration-300 hover:scale-[1.02] shadow-lg ${
                            isDark
                              ? "border-white/15 bg-[#0d0f13] hover:border-lime-300/40"
                              : "border-slate-200 bg-white hover:border-lime-400"
                          }`}
                        >
                          {/* Card Background Image */}
                          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
                              alt="Deep Work Background"
                              className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
                                isDark
                                  ? "opacity-35 brightness-110 contrast-125"
                                  : "opacity-20 brightness-125"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 ${
                                isDark
                                  ? "bg-gradient-to-t from-[#0d0f13] via-[#0d0f13]/60 to-[#0d0f13]/30"
                                  : "bg-gradient-to-t from-white via-white/70 to-white/40"
                              }`}
                            />
                          </div>
                          <div className="relative z-10">
                            <p
                              className={`text-xs font-mono font-semibold ${
                                isDark ? "text-white/60" : "text-slate-500"
                              }`}
                            >
                              DEEP WORK
                            </p>
                            <p
                              className={`mt-2 text-2xl font-bold font-mono ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              4.8h
                            </p>
                            <span
                              className={`text-[11px] font-mono ${
                                isDark ? "text-cyan-300" : "text-cyan-600 font-bold"
                              }`}
                            >
                              In the zone
                            </span>
                          </div>
                        </div>

                        {/* Stat 4 */}
                        <div
                          className={`group relative overflow-hidden rounded-2xl border p-4 transition duration-300 hover:scale-[1.02] shadow-lg ${
                            isDark
                              ? "border-white/15 bg-[#0d0f13] hover:border-lime-300/40"
                              : "border-slate-200 bg-white hover:border-lime-400"
                          }`}
                        >
                          {/* Card Background Image */}
                          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                              alt="Context Background"
                              className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
                                isDark
                                  ? "opacity-35 brightness-110 contrast-125"
                                  : "opacity-20 brightness-125"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 ${
                                isDark
                                  ? "bg-gradient-to-t from-[#0d0f13] via-[#0d0f13]/60 to-[#0d0f13]/30"
                                  : "bg-gradient-to-t from-white via-white/70 to-white/40"
                              }`}
                            />
                          </div>
                          <div className="relative z-10">
                            <p
                              className={`text-xs font-mono font-semibold ${
                                isDark ? "text-white/60" : "text-slate-500"
                              }`}
                            >
                              CONTEXT TAX
                            </p>
                            <p
                              className={`mt-2 text-2xl font-bold font-mono ${
                                isDark ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            >
                              0h
                            </p>
                            <span
                              className={`text-[11px] font-mono ${
                                isDark ? "text-white/50" : "text-slate-600"
                              }`}
                            >
                              Single pane
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Commit Activity Chart */}
                      <div
                        className={`rounded-2xl border p-5 ${
                          isDark
                            ? "border-white/10 bg-white/[0.02]"
                            : "border-slate-200 bg-slate-50/70"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Activity
                              size={16}
                              className={isDark ? "text-lime-300" : "text-lime-600"}
                            />
                            <span className="text-sm font-semibold">Git Commit Velocity</span>
                          </div>
                          <span
                            className={`text-xs font-mono ${
                              isDark ? "text-white/40" : "text-slate-500"
                            }`}
                          >
                            Hover bars for details
                          </span>
                        </div>

                        {/* Bars */}
                        <div className="mt-6 flex h-28 items-end gap-2 sm:gap-3">
                          {currentBars.map((bar, index) => (
                            <div
                              key={index}
                              onMouseEnter={() => setHoveredBar(bar)}
                              onMouseLeave={() => setHoveredBar(null)}
                              className="group relative flex flex-1 flex-col items-center h-full justify-end cursor-pointer"
                            >
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${bar.height}%` }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`w-full rounded-t-md transition-all duration-200 ${
                                  hoveredBar?.label === bar.label
                                    ? isDark
                                      ? "bg-lime-300 shadow-lg shadow-lime-300/40"
                                      : "bg-lime-500 shadow-lg shadow-lime-500/40"
                                    : isDark
                                    ? "bg-lime-300/60 group-hover:bg-lime-300"
                                    : "bg-lime-400/80 group-hover:bg-lime-500"
                                }`}
                              />
                              <span
                                className={`mt-2 font-mono text-[10px] ${
                                  isDark
                                    ? "text-white/40 group-hover:text-white"
                                    : "text-slate-500 group-hover:text-slate-900 font-medium"
                                }`}
                              >
                                {bar.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tooltip feedback */}
                        <div className="mt-3 text-center h-4">
                          {hoveredBar ? (
                            <span
                              className={`font-mono text-xs ${
                                isDark ? "text-lime-300 font-medium" : "text-lime-700 font-bold"
                              }`}
                            >
                              {hoveredBar.label}: {hoveredBar.commits} commits recorded
                            </span>
                          ) : (
                            <span
                              className={`text-[11px] ${
                                isDark ? "text-white/30" : "text-slate-400"
                              }`}
                            >
                              Consistent shipping cadence across all repositories
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Active Projects Status Rows */}
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div
                          className={`rounded-2xl border p-4 ${
                            isDark
                              ? "border-white/10 bg-white/[0.02]"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-semibold ${
                                isDark ? "text-white/90" : "text-slate-800"
                              }`}
                            >
                              DevFlow Web Engine
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? "text-lime-300" : "text-lime-700 font-bold"
                              }`}
                            >
                              92% Ready
                            </span>
                          </div>
                          <div
                            className={`mt-3 h-1.5 overflow-hidden rounded-full ${
                              isDark ? "bg-white/10" : "bg-slate-200"
                            }`}
                          >
                            <div
                              className={`h-full w-[92%] rounded-full ${
                                isDark ? "bg-lime-300" : "bg-lime-500"
                              }`}
                            />
                          </div>
                        </div>

                        <div
                          className={`rounded-2xl border p-4 ${
                            isDark
                              ? "border-white/10 bg-white/[0.02]"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-semibold ${
                                isDark ? "text-white/90" : "text-slate-800"
                              }`}
                            >
                              Distributed Task Cache
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? "text-cyan-300" : "text-cyan-600 font-bold"
                              }`}
                            >
                              76% Active
                            </span>
                          </div>
                          <div
                            className={`mt-3 h-1.5 overflow-hidden rounded-full ${
                              isDark ? "bg-white/10" : "bg-slate-200"
                            }`}
                          >
                            <div className="h-full w-[76%] rounded-full bg-cyan-500" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: GIT & PRS */}
                  {activeTab === "git" && (
                    <motion.div
                      key="git"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p
                            className={`text-xs font-mono ${
                              isDark ? "text-white/40" : "text-slate-500"
                            }`}
                          >
                            GIT WORKTREE
                          </p>
                          <h3 className="text-lg font-bold">Active Branches & Reviews</h3>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-xs ${
                            isDark
                              ? "bg-lime-300/10 text-lime-300"
                              : "bg-lime-100 text-lime-800 font-bold"
                          }`}
                        >
                          3 Open PRs
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            title: "feat(stream): WebRTC live data pipeline",
                            branch: "feat/stream-pipeline",
                            author: "you",
                            reviews: "2 Approvals",
                            ci: "Passing",
                            time: "12m ago",
                          },
                          {
                            title: "perf(indexeddb): reduce query latency to <2ms",
                            branch: "perf/db-index",
                            author: "you",
                            reviews: "Review Needed",
                            ci: "Passing",
                            time: "1h ago",
                          },
                          {
                            title: "fix(theme): prevent hydration flicker in SSR",
                            branch: "fix/theme-flicker",
                            author: "core",
                            reviews: "Merged",
                            ci: "Deployed",
                            time: "3h ago",
                          },
                        ].map((pr, i) => (
                          <div
                            key={i}
                            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border p-4 transition ${
                              isDark
                                ? "border-white/10 bg-white/[0.02] hover:border-lime-300/30"
                                : "border-slate-200 bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <GitPullRequest
                                size={17}
                                className={`mt-0.5 shrink-0 ${
                                  isDark ? "text-lime-300" : "text-lime-600"
                                }`}
                              />
                              <div>
                                <p
                                  className={`text-sm font-semibold ${
                                    isDark ? "text-white/90" : "text-slate-800"
                                  }`}
                                >
                                  {pr.title}
                                </p>
                                <div
                                  className={`mt-1 flex items-center gap-3 font-mono text-xs ${
                                    isDark ? "text-white/40" : "text-slate-500"
                                  }`}
                                >
                                  <span className={isDark ? "text-white/60" : "text-slate-700"}>
                                    {pr.branch}
                                  </span>
                                  <span>•</span>
                                  <span>{pr.time}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                                {pr.ci}
                              </span>
                              <span
                                className={`rounded-lg px-2.5 py-1 text-xs font-mono ${
                                  isDark
                                    ? "bg-white/[0.05] text-white/60"
                                    : "bg-slate-200 text-slate-700 font-medium"
                                }`}
                              >
                                {pr.reviews}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: FOCUS SPRINT */}
                  {activeTab === "focus" && (
                    <motion.div
                      key="focus"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p
                            className={`text-xs font-mono ${
                              isDark ? "text-white/40" : "text-slate-500"
                            }`}
                          >
                            DEEP WORK ENGINE
                          </p>
                          <h3 className="text-lg font-bold">Current Focus Session</h3>
                        </div>
                        <span
                          className={`flex items-center gap-1.5 font-mono text-xs ${
                            isDark ? "text-lime-300" : "text-lime-700 font-bold"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full animate-pulse ${
                              isDark ? "bg-lime-300" : "bg-lime-600"
                            }`}
                          />
                          25m Sprint Active
                        </span>
                      </div>

                      <div
                        className={`rounded-2xl border p-6 text-center ${
                          isDark
                            ? "border-lime-300/20 bg-lime-300/[0.04]"
                            : "border-lime-200 bg-lime-50"
                        }`}
                      >
                        <p
                          className={`font-mono text-4xl font-extrabold tracking-tight sm:text-5xl ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          18 : 42
                        </p>
                        <p
                          className={`mt-2 text-sm ${
                            isDark ? "text-white/60" : "text-slate-600"
                          }`}
                        >
                          Target: Complete edge cache revalidation logic
                        </p>
                        <div className="mt-4 flex justify-center gap-3">
                          <a
                            href="#product"
                            className="rounded-xl bg-lime-300 px-4 py-2 text-xs font-bold text-black hover:bg-lime-200 shadow-md"
                          >
                            Open Interactive Workbench
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}