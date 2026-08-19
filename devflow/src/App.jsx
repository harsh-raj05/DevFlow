import { useState, useEffect } from "react";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Features from "./components/Features";
import InteractiveDemo from "./components/InteractiveDemo";
import DevCalculator from "./components/DevCalculator";
import Manifesto from "./components/Manifesto";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
import CommandPalette from "./components/CommandPalette";

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white selection:bg-lime-400/30 selection:text-lime-200">
      {/* Dynamic Ambient Background Canvas & Glow */}
      <AmbientBackground />

      {/* Global Navigation Bar */}
      <Navbar
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Workflow />
        <Features />
        <InteractiveDemo />
        <DevCalculator />
        <Manifesto />
        <CTA onOpenTerminal={() => setIsTerminalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />

      {/* Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Easter Egg & Terminal CLI */}
      <EasterEgg
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
      />
    </div>
  );
}

export default App;