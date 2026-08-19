import { useState, useEffect, useRef } from "react";
import {
  Check,
  Circle,
  Clock3,
  Target,
  Plus,
  Trash2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Flame,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const defaultTasks = [
  {
    id: 1,
    title: "Implement zero-latency WebRTC data stream",
    category: "Project",
    time: "45 min",
    completed: true,
  },
  {
    id: 2,
    title: "Review dynamic memory indexing in Rust",
    category: "Learning",
    time: "30 min",
    completed: false,
  },
  {
    id: 3,
    title: "Optimize IndexedDB query cache latency",
    category: "Project",
    time: "25 min",
    completed: false,
  },
  {
    id: 4,
    title: "Plan edge deployment topology & healthchecks",
    category: "Architecture",
    time: "15 min",
    completed: false,
  },
];

export default function InteractiveDemo() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("devflow_demo_tasks");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultTasks;
      }
    }
    return defaultTasks;
  });

  const [activeFilter, setActiveFilter] = useState("All");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Project");
  const [showAddForm, setShowAddForm] = useState(false);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("devflow_demo_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Pomodoro countdown timer loop
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(25 * 60);
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id, e) => {
    e.stopPropagation();
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      time: "25 min",
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
    setShowAddForm(false);
  };

  const resetDefaultTasks = () => {
    setTasks(defaultTasks);
  };

  const filteredTasks =
    activeFilter === "All"
      ? tasks
      : tasks.filter((t) => t.category === activeFilter);

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent =
    tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section
      id="product"
      className="relative border-t border-white/10 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-lime-300">
              Interactive Focus Workbench
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Your day,
              <br />
              <span className="text-white/40">completely in control.</span>
            </h2>
          </div>

          <div className="lg:ml-auto max-w-xl">
            <p className="text-base leading-7 text-white/50 lg:text-lg">
              Experience the actual developer flow. Add real tasks, toggle completion states,
              run deep work sprints, and feel the friction-free responsiveness.
            </p>
          </div>
        </div>

        {/* Workbench Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0c10] shadow-2xl"
        >
          <div className="grid lg:grid-cols-[1fr_360px]">
            {/* Task list container */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Header with Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono text-white/40">
                    FOCUS SPRINT QUEUE
                  </span>
                  <h3 className="mt-0.5 text-xl font-bold text-white">
                    Today's Priority Stack
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAddForm((prev) => !prev)}
                    className="flex items-center gap-1.5 rounded-xl bg-lime-300 px-3.5 py-2 text-xs font-bold text-black transition hover:bg-lime-200"
                  >
                    <Plus size={15} />
                    <span>Add Task</span>
                  </button>

                  <button
                    onClick={resetDefaultTasks}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-mono text-white/50 transition hover:text-white"
                    title="Reset to default tasks"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Inline Add Task Form */}
              <AnimatePresence>
                {showAddForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleAddTask}
                    className="mt-6 rounded-2xl border border-lime-300/30 bg-lime-300/[0.04] p-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        placeholder="What are you building or solving next?"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        autoFocus
                        className="flex-1 rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-white/40 focus:border-lime-300 focus:outline-none"
                      />
                      <select
                        value={newTaskCategory}
                        onChange={(e) => setNewTaskCategory(e.target.value)}
                        className="rounded-xl border border-white/10 bg-[#12151c] px-3 py-2 text-xs text-white focus:outline-none"
                      >
                        <option value="Project">Project</option>
                        <option value="Learning">Learning</option>
                        <option value="Architecture">Architecture</option>
                      </select>
                      <button
                        type="submit"
                        className="rounded-xl bg-lime-300 px-4 py-2 text-xs font-bold text-black hover:bg-lime-200"
                      >
                        Save
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Category Filter Pills */}
              <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
                {["All", "Project", "Learning", "Architecture"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-medium transition ${activeFilter === cat
                        ? "bg-white/15 text-white font-semibold"
                        : "text-white/40 hover:text-white"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Task Items */}
              <div className="mt-6 space-y-3">
                <AnimatePresence>
                  {filteredTasks.length === 0 ? (
                    <div className="py-10 text-center text-sm text-white/40 font-mono">
                      No tasks in this category. Click "Add Task" above!
                    </div>
                  ) : (
                    filteredTasks.map((task) => (
                      <motion.div
                        key={task.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => toggleTask(task.id)}
                        className={`group flex cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition-all duration-200 ${task.completed
                            ? "border-white/5 bg-white/[0.01] opacity-60"
                            : "border-white/10 bg-white/[0.025] hover:border-lime-300/30 hover:bg-white/[0.05]"
                          }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <button
                            type="button"
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${task.completed
                                ? "border-lime-300 bg-lime-300 text-black font-bold"
                                : "border-white/20 text-transparent group-hover:border-lime-300/50"
                              }`}
                          >
                            <Check size={13} strokeWidth={3} />
                          </button>

                          <div className="min-w-0">
                            <p
                              className={`truncate text-sm font-medium transition ${task.completed
                                  ? "text-white/35 line-through"
                                  : "text-white/90"
                                }`}
                            >
                              {task.title}
                            </p>
                            <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-white/35">
                              <span className="rounded bg-white/[0.04] px-1.5 py-0.5">
                                {task.category}
                              </span>
                              <span>•</span>
                              <span>{task.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => deleteTask(task.id, e)}
                            className="p-1.5 text-white/20 opacity-0 group-hover:opacity-100 transition hover:text-rose-400"
                            title="Delete task"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side: Live Focus Engine & Pomodoro */}
            <div className="border-t border-white/10 bg-[#0d1015] p-6 sm:p-8 lg:border-l lg:border-t-0 flex flex-col justify-between">
              <div>
                {/* Sprint Progress Gauge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                    Sprint Completion
                  </span>
                  <span className="font-mono text-xs font-bold text-lime-300">
                    {completedCount} / {tasks.length} DONE
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-5xl font-extrabold tracking-tight text-white font-mono">
                    {progressPercent}%
                  </span>
                </div>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-lime-300 shadow-lg shadow-lime-300/40"
                  />
                </div>

                {/* Pomodoro Timer Engine */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50">
                    <Flame size={14} className="text-amber-400" />
                    <span>DEEP FOCUS TIMER</span>
                  </div>

                  <p className="mt-3 font-mono text-4xl font-extrabold tracking-tight text-white">
                    {formatTimer(timerSeconds)}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <button
                      onClick={toggleTimer}
                      className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition ${isTimerRunning
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                          : "bg-lime-300 text-black hover:bg-lime-200"
                        }`}
                    >
                      {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
                      <span>{isTimerRunning ? "Pause Sprint" : "Start Sprint"}</span>
                    </button>

                    <button
                      onClick={resetTimer}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/60 hover:text-white"
                      title="Reset timer to 25m"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>
                </div>

                {/* Dynamic Context Feedback */}
                <div className="mt-6 rounded-2xl border border-lime-300/15 bg-lime-300/[0.03] p-4 text-center">
                  <p className="text-xs leading-relaxed text-white/60">
                    {progressPercent === 100
                      ? "🎉 All priority sprint tasks checked! High throughput achieved."
                      : progressPercent >= 50
                        ? "⚡ Outstanding momentum. Over halfway through today's priorities."
                        : "🎯 Start your deep focus sprint. One commit at a time."}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 text-center">
                <span className="font-mono text-[11px] text-white/30">
                  Local-first storage synced automatically
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}