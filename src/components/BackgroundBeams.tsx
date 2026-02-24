"use client";
import { useEffect, useRef } from "react";

export default function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (prefersReduced) return;
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + i * 0.15);
        const grad = ctx.createLinearGradient(x, 0, x + 100, canvas.height);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, `rgba(184, 150, 11, ${0.03 + Math.sin(time + i) * 0.015})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + i * 0.7) * 50, 0);
        ctx.bezierCurveTo(
          x + Math.sin(time * 0.8 + i) * 80, canvas.height * 0.33,
          x + Math.cos(time * 0.6 + i) * 80, canvas.height * 0.66,
          x + Math.sin(time * 0.9 + i * 1.2) * 50, canvas.height
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
