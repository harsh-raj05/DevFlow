import { ArrowRight, ArrowUpRight, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function CTA({ onOpenTerminal }) {
  const { isDark } = useTheme();

  return (
    <section id="cta" className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className={`relative overflow-hidden rounded-[2.5rem] border px-6 py-16 text-center shadow-2xl sm:px-10 lg:px-16 lg:py-24 ${
            isDark
              ? "border-white/15 bg-gradient-to-b from-[#12151d] to-[#0a0c10] text-white shadow-black/80"
              : "border-slate-300 bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-slate-300"
          }`}
        >
          {/* In-Card Media Backdrop */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1600&q=80"
              alt="Developer Launch Banner"
              className="h-full w-full object-cover mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-[#0a0c10]" />
          </div>

          {/* Ambient Glows */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-[130px]" />
          <div className="pointer-events-none absolute right-10 top-10 h-64 w-64 rounded-full bg-cyan-400/5 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-1.5 text-xs font-mono text-lime-300 mb-6">
              <Sparkles size={13} />
              <span>SHIPPING AT SPEED</span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-7xl text-white">
              Your next build
              <br />
              <span className="bg-gradient-to-r from-lime-200 via-white to-white/40 bg-clip-text text-transparent">
                starts with focus.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              No bloated sprints. No sprint poker. Just your code, your goals,
              and uninterrupted momentum.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="#product"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-300 px-8 py-4 text-sm font-bold text-black shadow-xl shadow-lime-300/25 transition hover:bg-lime-200 hover:scale-105 sm:w-auto"
              >
                <span>Start Building Now</span>
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.08] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:border-lime-300/40 hover:bg-white/[0.15] sm:w-auto"
              >
                <Terminal size={16} className="text-lime-300" />
                <span>Launch CLI Mode</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/60">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>100% Free For Solo Engineers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>Local-First & Offline Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>Zero Tracking Pixels</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}