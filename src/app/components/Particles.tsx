"use client";
import { useEffect, useRef } from "react";

interface P {
  x: number; y: number;
  vx: number; vy: number;
  r: number; baseAlpha: number;
  type: "dot" | "star" | "cross";
  twinkleSpeed: number;
  twinklePhase: number;
  layer: number; // 0 = far (slow), 1 = mid, 2 = close (fast)
}

// parallax speeds per layer (fraction of scroll delta applied per frame)
const LAYER_SPEED = [0.08, 0.22, 0.42];
// base opacity per layer — closer = brighter
const LAYER_ALPHA = [0.22, 0.35, 0.52];

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight; // viewport height — canvas is fixed
    canvas.width  = W;
    canvas.height = H;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };

    // track scroll with lerp for smooth motion
    let scrollY    = window.scrollY;
    let targetScrollY = scrollY;
    // per-layer current offset (y px offset applied to drawing)
    const layerOffset = [0, 0, 0];
    // per-layer lerp target
    const layerTarget = [0, 0, 0];

    const onScroll = () => {
      const newScroll = window.scrollY;
      const delta = newScroll - scrollY;
      scrollY = newScroll;
      // each layer accumulates its own offset
      for (let i = 0; i < 3; i++) {
        layerTarget[i] -= delta * LAYER_SPEED[i];
      }
    };

    const COUNT = Math.min(Math.floor((W * H) / 3200), 380);

    const particles: P[] = Array.from({ length: COUNT }, () => {
      const roll  = Math.random();
      const layer = roll < 0.55 ? 0 : roll < 0.85 ? 1 : 2; // 55% far, 30% mid, 15% close
      const sizeRoll = Math.random();
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        r: layer === 0
          ? sizeRoll * 0.7 + 0.25
          : layer === 1
          ? sizeRoll * 1.0 + 0.7
          : sizeRoll * 1.4 + 1.4,
        baseAlpha: (Math.random() * 0.35 + 0.18) * LAYER_ALPHA[layer],
        type: roll < 0.78 ? "dot" : roll < 0.93 ? "star" : "cross",
        twinkleSpeed: Math.random() * 0.014 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        layer,
      };
    });

    const drawStar4 = (x: number, y: number, r: number, a: number) => {
      ctx.save();
      const arm = r * 2.4;
      ctx.strokeStyle = `rgba(226,232,240,${a})`;
      ctx.lineWidth = r * 0.55;
      ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm); ctx.stroke();
      const d = arm * 0.45;
      ctx.lineWidth = r * 0.3;
      ctx.beginPath(); ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d); ctx.stroke();
      // glow core
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g.addColorStop(0, `rgba(226,232,240,${a * 0.85})`);
      g.addColorStop(1, "rgba(226,232,240,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r * 2, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    };

    const drawCross = (x: number, y: number, r: number, a: number) => {
      ctx.save();
      ctx.strokeStyle = `rgba(226,232,240,${a * 0.7})`;
      ctx.lineWidth = r * 0.4;
      ctx.lineCap = "round";
      const arm = r * 1.6;
      ctx.beginPath(); ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm); ctx.stroke();
      ctx.restore();
    };

    let raf: number;
    const LERP = 0.09; // smoothing factor

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // lerp layer offsets toward targets
      for (let i = 0; i < 3; i++) {
        layerOffset[i] += (layerTarget[i] - layerOffset[i]) * LERP;
      }

      for (const p of particles) {
        // ambient drift
        p.x += p.vx;
        p.y += p.vy;

        // wrap within viewport (canvas is fixed)
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
        if (p.y < -4) p.y = H + 4;
        if (p.y > H + 4) p.y = -4;

        // apply parallax offset for this layer (mod H so stars recycle)
        const offsetY = layerOffset[p.layer] % H;
        const drawY   = ((p.y + offsetY) % H + H) % H;

        // twinkle
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(p.twinklePhase);
        const alpha   = p.baseAlpha * (0.4 + 0.6 * twinkle);

        if (p.type === "star") {
          drawStar4(p.x, drawY, p.r, alpha);
        } else if (p.type === "cross") {
          drawCross(p.x, drawY, p.r, alpha);
        } else {
          if (p.r > 1.2) {
            const g = ctx.createRadialGradient(p.x, drawY, 0, p.x, drawY, p.r * 3);
            g.addColorStop(0, `rgba(226,232,240,${alpha * 0.55})`);
            g.addColorStop(1, "rgba(226,232,240,0)");
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(p.x, drawY, p.r * 3, 0, Math.PI * 2); ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(p.x, drawY, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226,232,240,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
