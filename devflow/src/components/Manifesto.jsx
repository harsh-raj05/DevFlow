import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Terminal, Lock, Code2, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Manifesto() {
  const { isDark } = useTheme();

  const principles = [
    {
      icon: ShieldCheck,
      title: "Zero Fake Social Proof",
      description:
        "No made-up testimonials from imaginary enterprise VPs. If software is genuinely fast and useful, engineers recognize the craftsmanship without artificial hype.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Cpu,
      title: "Local-First Architecture",
      description:
        "Your task notes and focus sprints belong to you. Instant 4ms response times, zero cloud lag, and full offline readiness right in your browser storage.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Terminal,
      title: "Keyboard-Driven Flow",
      description:
        "Built for developers who live on hotkeys. Cmd+K command palette, quick CLI terminal access, and instantaneous category switching without mouse fatigue.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Lock,
      title: "Zero Creepy Telemetry",
      description:
        "No surveillance trackers, third-party analytics pixels, or recording scripts. We build software we are genuinely proud to keep running on our own daily machines.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section
      id="manifesto"
      className={`relative overflow-hidden border-t px-6 py-28 lg:px-8 lg:py-36 transition-colors duration-300 ${
        isDark ? "border-white/10" : "border-slate-200"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-mono ${
              isDark
                ? "border-lime-300/20 bg-lime-300/[0.05] text-lime-300"
                : "border-lime-600/30 bg-lime-50 text-lime-700 font-bold"
            }`}
          >
            <Code2 size={13} />
            <span>THE HONEST DEV MANIFESTO</span>
          </div>

          <h2
            className={`mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Software built for engineers,
            <br />
            <span className={isDark ? "text-white/40" : "text-slate-400"}>
              not enterprise sales quotas.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
              isDark ? "text-white/50" : "text-slate-600"
            }`}
          >
            We were tired of heavyweight project management tools that feel like filling out taxes.
            DevFlow is our answer: minimal, responsive, and respectful of developer focus.
          </p>
        </motion.div>

        {/* Principles Grid with In-Card Images */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:scale-[1.02] shadow-xl ${
                  isDark
                    ? "border-white/10 bg-[#0c0e12] hover:border-lime-300/30 hover:bg-[#11141a] text-white"
                    : "border-slate-200 bg-white hover:border-lime-400 text-slate-900 shadow-slate-200/50"
                }`}
              >
                {/* In-Card Media Thumbnail */}
                <div
                  className={`mb-4 h-24 w-full overflow-hidden rounded-xl border ${
                    isDark ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <img
                    src={principle.img}
                    alt={principle.title}
                    className="h-full w-full object-cover brightness-90 transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-lime-300 group-hover:bg-lime-300/10"
                      : "border-lime-300 bg-lime-50 text-lime-700"
                  }`}
                >
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {principle.title}
                </h3>

                <p
                  className={`mt-2 text-xs leading-relaxed ${
                    isDark ? "text-white/45" : "text-slate-600"
                  }`}
                >
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
