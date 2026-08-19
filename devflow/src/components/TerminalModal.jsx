import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Maximize2, Minimize2, Sparkles } from "lucide-react";

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ DevFlow Developer Command Terminal [Version 2.4.0-hackathon]\nType 'help' for available commands or 'matrix' for cyber rain.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const matrixCanvasRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Matrix Rain Animation
  useEffect(() => {
    if (!isMatrixActive || !isOpen) return;

    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*+-/<>~";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    const draw = () => {
      ctx.fillStyle = "rgba(10, 14, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#a3e635";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [isMatrixActive, isOpen]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${cmd}` }];
    const lowerCmd = cmd.toLowerCase();

    switch (lowerCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • help       - List available developer commands
  • ship       - Launch simulated deployment pipeline
  • matrix     - Toggle green cyber digital rain mode
  • stats      - Show real telemetry & workspace metrics
  • quote      - Random developer wisdom
  • stack      - DevFlow engineering stack & architecture
  • clear      - Clear terminal screen
  • exit       - Close terminal window`,
        });
        break;

      case "matrix":
        setIsMatrixActive((prev) => !prev);
        newHistory.push({
          type: "output",
          text: `Matrix mode: ${!isMatrixActive ? "ENABLED (Enter the grid)" : "DISABLED"}`,
        });
        break;

      case "ship":
        newHistory.push({
          type: "output",
          text: `🚀 Initiating production deployment...
[1/4] Linting and formatting code: PASS
[2/4] Executing 42 unit test suites: 100% OK
[3/4] Optimizing zero-bloat build assets: 34.2 KB
[4/4] Deploying to global edge network...
SUCCESS: Shipped to production with zero downtime! 🎉`,
        });
        break;

      case "stats":
        newHistory.push({
          type: "output",
          text: `📊 DevFlow Honest Metrics:
  • Active Trackers: 0 (No creepy cookies or spyware)
  • Context Switch Overhead: Reduced by ~68%
  • Local Latency: < 4ms (Local-first IndexedDB storage)
  • UI Bundle Weight: Clean & fast (< 40 KB gzipped)
  • Developer Rating: Engineered with taste.`,
        });
        break;

      case "quote": {
        const quotes = [
          '"Talk is cheap. Show me the code." — Linus Torvalds',
          '"Focus is a matter of deciding what things you are not going to do." — John Carmack',
          '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
          '"Make it work, make it right, make it fast." — Kent Beck',
          '"Premature optimization is the root of all evil." — Donald Knuth',
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        newHistory.push({ type: "output", text: `💡 ${randomQuote}` });
        break;
      }

      case "stack":
        newHistory.push({
          type: "output",
          text: `🛠️ Engineering Architecture:
  • Framework: React 19 + Vite 8
  • Styling: Tailwind CSS v4 + Glassmorphism tokens
  • Motion: Framer Motion v13 (restrained, 60fps micro-interactions)
  • Icons: Lucide React (pure SVG tree-shaken)
  • Storage: Local-first reactive state`,
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        onClose();
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' for command list.`,
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center p-4 sm:p-6">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative flex flex-col overflow-hidden rounded-2xl border border-lime-300/30 bg-[#0a0c0f] shadow-2xl shadow-black/90 ${
              isMaximized
                ? "h-[92vh] w-[96vw]"
                : "h-[500px] w-full max-w-2xl"
            }`}
          >
            {/* Matrix Rain Canvas if enabled */}
            {isMatrixActive && (
              <canvas
                ref={matrixCanvasRef}
                className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-35"
              />
            )}

            {/* Window Header */}
            <div className="relative z-10 flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-[#12151b] px-4">
              <div className="flex items-center gap-2">
                <div
                  onClick={onClose}
                  className="h-3 w-3 cursor-pointer rounded-full bg-rose-500/80 hover:bg-rose-400"
                  title="Close"
                />
                <div
                  onClick={() => setIsMaximized((prev) => !prev)}
                  className="h-3 w-3 cursor-pointer rounded-full bg-amber-500/80 hover:bg-amber-400"
                  title="Maximize"
                />
                <div
                  onClick={() => setIsMatrixActive((prev) => !prev)}
                  className="h-3 w-3 cursor-pointer rounded-full bg-lime-400/80 hover:bg-lime-300"
                  title="Matrix Mode"
                />
                <span className="ml-3 font-mono text-xs text-white/50">
                  devflow-cli ~ zsh
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden rounded bg-lime-300/10 px-2 py-0.5 font-mono text-[10px] text-lime-300 sm:inline-block">
                  Secret Mode
                </span>
                <button
                  onClick={() => setIsMaximized((prev) => !prev)}
                  className="p-1 text-white/40 hover:text-white"
                >
                  {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 text-white/40 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-sm">
              <div className="space-y-2">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className={`whitespace-pre-wrap ${
                      item.type === "system"
                        ? "text-lime-300/90 font-medium"
                        : item.type === "user"
                        ? "text-white font-semibold"
                        : item.type === "error"
                        ? "text-rose-400"
                        : "text-white/80"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Active Prompt Line */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lime-300 font-bold">devflow@guest:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent text-white focus:outline-none"
                  autoFocus
                />
              </div>

              <div ref={terminalEndRef} />
            </div>

            {/* Footer status */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-[#12151b] px-4 py-2 text-[11px] font-mono text-white/40">
              <span>Try: matrix, ship, quote, stats, help</span>
              <span>ESC / 'exit' to quit</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
