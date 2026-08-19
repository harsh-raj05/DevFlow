import { useEffect, useState } from "react";
import { Terminal, Sparkles } from "lucide-react";
import TerminalModal from "./TerminalModal";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEgg({ isTerminalOpen, setIsTerminalOpen }) {
  const [sequence, setSequence] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Also allow pressing `~` (tilde) for instant developer terminal access!
      if (event.key === "`" || event.key === "~") {
        setIsTerminalOpen((prev) => !prev);
        return;
      }

      const key =
        event.key.length === 1 ? event.key.toLowerCase() : event.key;

      setSequence((current) => {
        const next = [...current, key].slice(-konamiCode.length);

        const matched =
          next.length === konamiCode.length &&
          next.every((value, index) => value === konamiCode[index]);

        if (matched) {
          setShowNotification(true);
          setIsTerminalOpen(true);
          setTimeout(() => setShowNotification(false), 4000);
          return [];
        }

        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsTerminalOpen]);

  return (
    <>
      {/* Floating subtle easter egg trigger pill in bottom corner */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1015]/80 px-3 py-1.5 text-xs text-white/50 shadow-xl backdrop-blur-md transition hover:border-lime-300/40 hover:bg-[#151922] hover:text-white"
        title="Konami code: ↑ ↑ ↓ ↓ ← → ← → B A or press ~"
      >
        <Terminal size={13} className="text-lime-300 transition group-hover:scale-110" />
        <span className="font-mono text-[11px] hidden sm:inline">CLI ~</span>
      </button>

      {/* Terminal Modal Window */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}