import React, { useEffect, useRef } from "react";
import "./MatrixRain.css";

/**
 * Matrix Rain (time-based)
 * - charChangeMs: cada cuántos milisegundos cambia la letra (↑ = más lento)
 * - speedPxPerSec: velocidad de caída en píxeles/seg (↑ = más rápido)
 * - Compatibilidad:
 *    - si NO pasás speedPxPerSec, usa `speed` (legacy) normalizado con dt
 *    - si NO pasás charChangeMs, usa `charChangeRate` (legacy, frames)
 */
const MatrixRain = ({
  fontSize = 16,            // px
  fadeAlpha = 0.08,         // 0.05–0.12: estela
  color = "#00ff66",
  spawnChance = 0.035,
  speed = 0.1,              // legacy
  speedPxPerSec,            // ✅ recomendado (p.ej. 40–80)
  maxActiveRatio = 0.2,
  charChangeRate = 8,       // legacy (frames)
  charChangeMs = 200,       // ✅ recomendado (p.ej. 160–300)
  respectReducedMotion = true,
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const runningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const chars =
      "アイウエオカキクケコｱｲｳｴｵｶｷｸｹｺ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArr = chars.split("");

    let width = 0;
    let height = 0;
    let columns = 0;

    // Estado por columna
    let yPositions = [];
    let active = [];
    let currentChar = [];
    let charDueAt = [];   // próximo cambio (ms) por columna
    let charAge = [];     // frames (modo legacy)

    const prefersReduced =
      respectReducedMotion &&
      (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false);

    const nowMs = () => performance.now();

    // ✅ Declaramos lastTime ANTES de resize/tick (fix TDZ)
    let lastTime = 0;

    const resize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Canvas + DPR
      canvas.style.width = vw + "px";
      canvas.style.height = vh + "px";
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      width = vw;
      height = vh;
      columns = Math.max(1, Math.floor(width / fontSize));
      ctx.font = `${fontSize}px monospace`;

      // Inicializamos columnas
      yPositions = new Array(columns);
      active = new Array(columns);
      currentChar = new Array(columns);
      charDueAt = new Array(columns);
      charAge = new Array(columns);

      const t0 = nowMs();
      for (let i = 0; i < columns; i++) {
        yPositions[i] = -Math.random() * height;
        active[i] = false;
        currentChar[i] = null;
        charAge[i] = 0;
        // Arranque desfasado para no sincronizar cambios
        charDueAt[i] = t0 + (charChangeMs ?? 0) * Math.random();
      }

      // ✅ seteamos lastTime acá (ya está declarado)
      lastTime = t0;
    };

    resize();
    window.addEventListener("resize", resize);

    const onVisibility = () => {
      runningRef.current = document.visibilityState === "visible";
      if (runningRef.current) {
        lastTime = nowMs();
        tick(lastTime);
      }
    };
    const onBlur = () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };
    const onFocus = () => {
      runningRef.current = true;
      lastTime = nowMs();
      tick(lastTime);
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    const tick = (t) => {
      if (!runningRef.current || prefersReduced) return;

      const now = t ?? nowMs();
      let dt = (now - lastTime) / 1000; // segundos
      lastTime = now;
      if (dt > 0.05) dt = 0.05; // cap reanudación pestaña

      // Estela
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;
      ctx.fillRect(0, 0, width, height);

      // Color
      ctx.fillStyle = color;

      // Densidad
      let activeCount = 0;
      for (let i = 0; i < columns; i++) if (active[i]) activeCount++;
      const maxActive = Math.max(1, Math.floor(columns * maxActiveRatio));

      for (let col = 0; col < columns; col++) {
        // Activación “cada tanto”
        if (!active[col] && activeCount < maxActive && Math.random() < spawnChance) {
          active[col] = true;
          activeCount++;
          if (yPositions[col] > height) yPositions[col] = -Math.random() * height;
        }

        if (active[col]) {
          const x = col * fontSize;

          // === Cambio de carácter ===
          if (charChangeMs != null) {
            // Modo por tiempo
            if (now >= charDueAt[col] || !currentChar[col]) {
              currentChar[col] = charArr[Math.floor(Math.random() * charArr.length)];
              charDueAt[col] = now + charChangeMs;
            }
          } else {
            // Legacy por frames
            charAge[col] += 1;
            if (charAge[col] > charChangeRate || !currentChar[col]) {
              currentChar[col] = charArr[Math.floor(Math.random() * charArr.length)];
              charAge[col] = 0;
            }
          }

          // Brillo de “cabeza”
          ctx.shadowColor = color;
          ctx.shadowBlur = 12;
          ctx.fillText(currentChar[col], x, yPositions[col]);
          ctx.shadowBlur = 0;

          // === Caída ===
          if (speedPxPerSec != null) {
            yPositions[col] += speedPxPerSec * dt;
          } else {
            yPositions[col] += (fontSize * (speed * 60)) * dt; // legacy normalizado
          }

          // Reseteo al salir
          if (yPositions[col] > height + fontSize * 2) {
            active[col] = false;
            activeCount--;
            yPositions[col] = -Math.random() * height;
            currentChar[col] = null;
            if (charChangeMs != null) {
              charDueAt[col] = now + charChangeMs * Math.random();
            } else {
              charAge[col] = 0;
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (!prefersReduced) {
      runningRef.current = true;
      lastTime = nowMs();
      tick(lastTime);
    }

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [
    fontSize,
    fadeAlpha,
    color,
    spawnChance,
    speed,
    speedPxPerSec,
    maxActiveRatio,
    charChangeRate,
    charChangeMs,
    respectReducedMotion,
  ]);

  return <canvas className="matrix-rain-canvas" ref={canvasRef} aria-hidden="true" />;
};

export default MatrixRain;
