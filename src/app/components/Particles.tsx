"use client";
import { useEffect, useRef } from "react";

interface P {
  x: number; y: number;
  vx: number; vy: number;
  r: number; a: number; da: number;
  type: "dot" | "star" | "cross";
  twinkleSpeed: number;
  twinklePhase: number;
}

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = document.documentElement.scrollHeight;
    const setSize = () => {
      W = window.innerWidth;
      H = document.documentElement.scrollHeight;
      canvas.width = W;
      canvas.height = H;
    };
    setSize();

    const COUNT = Math.min(Math.floor((W * H) / 7000), 320);

    const particles: P[] = Array.from({ length: COUNT }, () => {
      const roll = Math.random();
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        // mix of tiny, medium, and a few larger "bright" stars
        r: roll < 0.65
          ? Math.random() * 0.8 + 0.3          // tiny — majority
          : roll < 0.92
          ? Math.random() * 1.2 + 1.0          // medium
          : Math.random() * 1.6 + 2.0,         // bright accent (few)
        a: Math.random() * 0.55 + 0.25,
        da: 0,                                 // driven by twinkle now
        type: roll < 0.80 ? "dot" : roll < 0.93 ? "star" : "cross",
        twinkleSpeed: Math.random() * 0.012 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    });

    // draw a 4-point star (×) glyph
    const drawStar4 = (x: number, y: number, r: number, a: number) => {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = "rgba(148,163,184,1)";
      ctx.lineWidth = r * 0.55;
      ctx.lineCap = "round";
      const arm = r * 2.2;
      // long horizontal + vertical spikes
      ctx.beginPath(); ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm); ctx.stroke();
      // short diagonal spikes
      const d = arm * 0.45;
      ctx.lineWidth = r * 0.3;
      ctx.beginPath(); ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d); ctx.stroke();
      // glow core
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * 1.8);
      g.addColorStop(0, `rgba(148,163,184,${a * 0.9})`);
      g.addColorStop(1, "rgba(148,163,184,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r * 1.8, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    };

    // draw a simpler 4-point cross with a glow halo
    const drawCross = (x: number, y: number, r: number, a: number) => {
      ctx.save();
      ctx.globalAlpha = a * 0.7;
      ctx.strokeStyle = "rgba(148,163,184,1)";
      ctx.lineWidth = r * 0.4;
      ctx.lineCap = "round";
      const arm = r * 1.5;
      ctx.beginPath(); ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm); ctx.stroke();
      ctx.restore();
    };

    let frame = 0;
    let raf: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        // sinusoidal twinkle
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(p.twinklePhase);
        const alpha = p.a * (0.45 + 0.55 * twinkle);

        if (p.type === "star") {
          drawStar4(p.x, p.y, p.r, alpha);
        } else if (p.type === "cross") {
          drawCross(p.x, p.y, p.r, alpha);
        } else {
          // plain dot — add a soft glow for larger ones
          if (p.r > 1.5) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
            g.addColorStop(0, `rgba(148,163,184,${alpha * 0.6})`);
            g.addColorStop(1, "rgba(148,163,184,0)");
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148,163,184,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", setSize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", setSize); };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
