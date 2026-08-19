import { useEffect, useRef, useState } from "react";
import { Sparkles, Eye, EyeOff } from "lucide-react";

export default function AmbientBackground() {
  const canvasRef = useRef(null);
  const [interactive, setInteractive] = useState(true);

  useEffect(() => {
    if (!interactive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 3,
      radius: 180,
    };

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor(width / 22), 55);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.8 + 0.8;
        this.baseAlpha = Math.random() * 0.4 + 0.15;
        this.color = Math.random() > 0.65 ? "#a3e635" : "#38bdf8"; // lime or cyan
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle mouse pull
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.2;
          this.y -= (dy / dist) * force * 1.2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.baseAlpha;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect close particles with delicate glowing threads
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              particles[i].color === "#a3e635"
                ? "rgba(163, 230, 53, 0.12)"
                : "rgba(56, 189, 248, 0.10)";
            ctx.lineWidth = 0.8 * (1 - dist / 130);
            ctx.globalAlpha = 1 - dist / 130;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Animated Aurora Orbs */}
      <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-lime-400/12 to-emerald-500/5 blur-[160px] animate-pulse-glow" />
      <div className="absolute top-[35%] -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-cyan-500/10 to-indigo-600/5 blur-[180px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-lime-300/8 blur-[160px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Interactive Particle Canvas */}
      {interactive && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-60"
        />
      )}

      {/* Ambient Cyber Beam lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/20 to-transparent" />
    </div>
  );
}
