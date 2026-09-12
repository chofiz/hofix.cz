"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxEl = canvasEl.getContext("2d");
    if (!ctxEl) return;
    const canvas = canvasEl;
    const ctx = ctxEl;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;

    const ACCENT = "#ef590d";

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      // density scales with area, capped
      const target = Math.min(70, Math.floor((w * h) / 16000));
      nodes = [];
      for (let i = 0; i < target; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 1.1 + Math.random() * 1.4,
        });
      }
    }

    const LINK_DIST = 150;
    const MOUSE_DIST = 200;

    function step() {
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const mActive = mouse.current.active;

      // update
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        if (mActive) {
          const dx = n.x - mx;
          const dy = n.y - my;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_DIST && d > 0.01) {
            const f = (1 - d / MOUSE_DIST) * 0.6;
            n.x += (dx / d) * f;
            n.y += (dy / d) * f;
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const t = 1 - d / LINK_DIST;
            // highlight links near mouse
            let near = 0;
            if (mActive) {
              const cx = (a.x + b.x) / 2;
              const cy = (a.y + b.y) / 2;
              const dm = Math.hypot(cx - mx, cy - my);
              if (dm < MOUSE_DIST) near = 1 - dm / MOUSE_DIST;
            }
            const baseA = t * 0.22;
            const a2 = baseA + near * 0.5;
            if (near > 0.05) {
              ctx.strokeStyle = `rgba(239, 89, 13, ${Math.min(a2, 0.8)})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${baseA})`;
            }
            ctx.lineWidth = near > 0.05 ? 1 + near : 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        let near = 0;
        if (mActive) {
          const dm = Math.hypot(n.x - mx, n.y - my);
          if (dm < MOUSE_DIST) near = 1 - dm / MOUSE_DIST;
        }
        if (near > 0.1) {
          ctx.fillStyle = ACCENT;
          ctx.shadowColor = ACCENT;
          ctx.shadowBlur = 12 * near;
        } else {
          ctx.fillStyle = "rgba(237, 237, 237, 0.55)";
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + near * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }
    function onLeave() {
      mouse.current.active = false;
    }

    resize();
    if (reduce) {
      step();
      cancelAnimationFrame(raf);
      // single frame only
      return () => {};
    }
    raf = requestAnimationFrame(step);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
