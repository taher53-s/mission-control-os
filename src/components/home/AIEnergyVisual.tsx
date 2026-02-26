'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './AIEnergyVisual.module.css';

/**
 * AI Energy Visual — canvas-based animated energy form.
 * Reacts to mouse position for cursor-based parallax.
 */
export function AIEnergyVisual() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
        };
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const size = 600;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);

        let animationId: number;
        let time = 0;

        function draw() {
            if (!ctx) return;
            time += 0.006;
            ctx.clearRect(0, 0, size, size);

            const mouse = mouseRef.current;
            // Cursor parallax offset — subtle depth shift
            const parallaxX = (mouse.x - 0.5) * 20;
            const parallaxY = (mouse.y - 0.5) * 20;
            // Glow intensity varies with cursor distance from center
            const cursorDist = Math.sqrt((mouse.x - 0.5) ** 2 + (mouse.y - 0.5) ** 2);
            const glowIntensity = 1 + cursorDist * 0.5;

            const cx = size / 2 + parallaxX;
            const cy = size / 2 + parallaxY;

            // Deep outer atmospheric glow — intensity varies
            const atmosphere = ctx.createRadialGradient(cx, cy, 80, cx, cy, 300);
            atmosphere.addColorStop(0, `rgba(217, 70, 239, ${0.12 * glowIntensity})`);
            atmosphere.addColorStop(0.3, `rgba(56, 189, 248, ${0.06 * glowIntensity})`);
            atmosphere.addColorStop(0.7, 'rgba(56, 189, 248, 0.02)');
            atmosphere.addColorStop(1, 'transparent');
            ctx.fillStyle = atmosphere;
            ctx.fillRect(0, 0, size, size);

            // Outer energy rings
            for (let r = 0; r < 4; r++) {
                const ringRadius = 120 + r * 40 + Math.sin(time * (1.5 + r * 0.3)) * 8;
                const ringAlpha = 0.06 - r * 0.012;
                ctx.beginPath();
                ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(56, 189, 248, ${ringAlpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Energy arcs
            for (let a = 0; a < 3; a++) {
                const arcStart = time * (0.4 + a * 0.2) + (a * Math.PI * 2) / 3;
                const arcLen = Math.PI * (0.4 + Math.sin(time + a) * 0.2);
                const arcRadius = 140 + a * 30;

                ctx.beginPath();
                ctx.arc(cx, cy, arcRadius, arcStart, arcStart + arcLen);
                const arcGrad = ctx.createLinearGradient(
                    cx + Math.cos(arcStart) * arcRadius,
                    cy + Math.sin(arcStart) * arcRadius,
                    cx + Math.cos(arcStart + arcLen) * arcRadius,
                    cy + Math.sin(arcStart + arcLen) * arcRadius,
                );
                arcGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
                arcGrad.addColorStop(0.5, `rgba(217, 70, 239, ${0.4 * glowIntensity})`);
                arcGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
                ctx.strokeStyle = arcGrad;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // Core sphere
            const coreRadius = 65 + Math.sin(time * 2) * 4;

            // Core outer glow
            const coreGlow = ctx.createRadialGradient(cx, cy, coreRadius * 0.5, cx, cy, coreRadius * 1.8);
            coreGlow.addColorStop(0, `rgba(217, 70, 239, ${0.3 * glowIntensity})`);
            coreGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)');
            coreGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(cx, cy, coreRadius * 1.8, 0, Math.PI * 2);
            ctx.fill();

            // Core solid
            const coreGrad = ctx.createRadialGradient(cx - 15, cy - 15, 8, cx, cy, coreRadius);
            coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
            coreGrad.addColorStop(0.2, 'rgba(217, 70, 239, 0.8)');
            coreGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.6)');
            coreGrad.addColorStop(0.8, 'rgba(56, 189, 248, 0.3)');
            coreGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
            ctx.beginPath();
            ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();

            // Orbiting particles
            for (let i = 0; i < 12; i++) {
                const speed = 0.3 + (i % 4) * 0.15;
                const angle = time * speed + (i * Math.PI * 2) / 12;
                const orbit = 100 + (i % 3) * 50 + Math.sin(time * 2 + i) * 10;
                const px = cx + Math.cos(angle) * orbit;
                const py = cy + Math.sin(angle) * orbit;
                const pSize = 1.5 + Math.sin(time * 3 + i) * 0.8;

                const colors = [
                    'rgba(56, 189, 248, 0.8)',
                    'rgba(217, 70, 239, 0.7)',
                    'rgba(34, 197, 94, 0.6)',
                    'rgba(255, 255, 255, 0.5)',
                ];
                const color = colors[i % colors.length]!;

                const pGlow = ctx.createRadialGradient(px, py, 0, px, py, pSize * 6);
                pGlow.addColorStop(0, color);
                pGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = pGlow;
                ctx.beginPath();
                ctx.arc(px, py, pSize * 6, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(px, py, pSize, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.fill();
            }

            // Data stream lines
            for (let s = 0; s < 6; s++) {
                const streamAngle = (s * Math.PI) / 3 + time * 0.15;
                const startR = coreRadius + 10;
                const endR = 200 + Math.sin(time + s) * 30;
                const sx = cx + Math.cos(streamAngle) * startR;
                const sy = cy + Math.sin(streamAngle) * startR;
                const ex = cx + Math.cos(streamAngle) * endR;
                const ey = cy + Math.sin(streamAngle) * endR;

                const streamGrad = ctx.createLinearGradient(sx, sy, ex, ey);
                streamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
                streamGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                ctx.strokeStyle = streamGrad;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            animationId = requestAnimationFrame(draw);
        }

        draw();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className={styles.container}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                style={{ width: 600, height: 600 }}
                aria-hidden="true"
            />
        </div>
    );
}
