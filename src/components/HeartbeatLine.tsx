import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeartbeatLineProps {
  className?: string;
}

export function HeartbeatLine({ className }: HeartbeatLineProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Resize handler to make canvas razor sharp on retina / high-DPI displays
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);

    // ECG waveform math function: calculates Y position for any X coordinate
    // Single authentic cardiac cycle: Baseline -> P wave -> PR -> Q dip -> R spike -> S dip -> ST -> T wave -> Baseline
    const cycleWidth = 260; // pixel length of one heartbeat cycle

    const getEcgY = (x: number, midY: number, scale: number): number => {
      const relX = ((x % cycleWidth) + cycleWidth) % cycleWidth;

      // 0 - 50: Isoelectric Baseline
      if (relX < 50) {
        return midY;
      }
      // 50 - 75: P Wave (atrial depolarization: gentle rounded upward bump)
      if (relX < 75) {
        const t = (relX - 50) / 25;
        return midY - Math.sin(t * Math.PI) * (7 * scale);
      }
      // 75 - 95: PR Segment (isoelectric delay)
      if (relX < 95) {
        return midY;
      }
      // 95 - 105: Q Wave (septal depolarization: sharp small downward deflection)
      if (relX < 105) {
        const t = (relX - 95) / 10;
        return midY + t * (5 * scale);
      }
      // 105 - 118: R Wave (ventricular depolarization: dramatic sharp upward spike)
      if (relX < 118) {
        const t = (relX - 105) / 13;
        return midY + 5 * scale - t * (35 * scale); // peaks at -30*scale
      }
      // 118 - 132: S Wave (deep downward deflection below baseline)
      if (relX < 132) {
        const t = (relX - 118) / 14;
        return midY - 30 * scale + t * (46 * scale); // dips to +16*scale
      }
      // 132 - 146: Return to baseline
      if (relX < 146) {
        const t = (relX - 132) / 14;
        return midY + 16 * scale - t * (16 * scale);
      }
      // 146 - 165: ST Segment
      if (relX < 165) {
        return midY;
      }
      // 165 - 205: T Wave (ventricular repolarization: smooth dome wave)
      if (relX < 205) {
        const t = (relX - 165) / 40;
        return midY - Math.sin(t * Math.PI) * (11 * scale);
      }
      // 205 - 260: Isoelectric baseline until next beat
      return midY;
    };

    let headX = 0;
    let lastTime = performance.now();
    const speed = 190; // sweep speed in pixels per second

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      headX = (headX + speed * dt) % (width || 1);

      ctx.clearRect(0, 0, width, height);

      const midY = height / 2;
      const scale = Math.min(height / 60, 1.1);

      // 1. Faint continuous background baseline track across entire width
      ctx.beginPath();
      ctx.strokeStyle = "rgba(13, 148, 136, 0.22)";
      ctx.lineWidth = 1.75;
      ctx.shadowBlur = 0;
      ctx.moveTo(0, getEcgY(0, midY, scale));
      for (let x = 1; x <= width; x += 2) {
        ctx.lineTo(x, getEcgY(x, midY, scale));
      }
      ctx.stroke();

      // 2. Active glowing heartbeat line (trailing behind sweep head like a real cardiac monitor video)
      const trailLength = Math.min(width * 0.85, 420);
      const step = 2;

      // Draw active luminous trail with gradient fading persistence
      for (let dist = trailLength; dist >= 0; dist -= step * 3) {
        const segStartDist = dist;
        const segEndDist = Math.max(0, dist - step * 3);

        const alpha = Math.pow(1 - segEndDist / trailLength, 1.8);
        if (alpha <= 0.01) continue;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(8, 102, 87, ${alpha})`;
        ctx.lineWidth = 2.6;
        ctx.shadowColor = "#0d9488";
        ctx.shadowBlur = alpha > 0.4 ? 10 * alpha : 0;

        for (let d = segStartDist; d >= segEndDist; d -= step) {
          const ptX = (headX - d + width * 2) % width;
          const ptY = getEcgY(ptX, midY, scale);
          if (d === segStartDist) {
            ctx.moveTo(ptX, ptY);
          } else {
            // Avoid drawing a connecting line across the canvas wrap boundary
            const prevX = (headX - (d + step) + width * 2) % width;
            if (Math.abs(ptX - prevX) < 50) {
              ctx.lineTo(ptX, ptY);
            } else {
              ctx.moveTo(ptX, ptY);
            }
          }
        }
        ctx.stroke();
      }

      // 3. Leading glowing pulse bead (the bright electrical pulse head)
      const headY = getEcgY(headX, midY, scale);

      // Outer radial glow
      ctx.save();
      ctx.shadowColor = "#0d9488";
      ctx.shadowBlur = 14;
      ctx.fillStyle = "#0284c7";
      ctx.beginPath();
      ctx.arc(headX, headY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Bright core
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(headX, headY, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      aria-label="Heartbeat ECG line animation"
      className={cn(
        "relative w-full overflow-hidden bg-transparent py-2 select-none",
        className,
      )}
    >
      {/* Pure single line heartbeat canvas on transparent background */}
      <canvas
        ref={canvasRef}
        className="w-full h-12 sm:h-14 md:h-16 block bg-transparent"
      />
    </div>
  );
}
