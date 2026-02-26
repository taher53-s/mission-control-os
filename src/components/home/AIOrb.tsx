'use client';

import { useEffect, useRef } from 'react';
import styles from './AIOrb.module.css';

export function AIOrb() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const size = 400;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);

        let animationId: number;
        let time = 0;

        const draw = () => {
            time += 0.008;
            ctx.clearRect(0, 0, size, size);

            const cx = size / 2;
            const cy = size / 2;

            // Outer glow
            const outerGlow = ctx.createRadialGradient(cx, cy, 60, cx, cy, 200);
            outerGlow.addColorStop(0, 'rgba(217, 70, 239, 0.08)');
            outerGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
            outerGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
            ctx.fillStyle = outerGlow;
            ctx.fillRect(0, 0, size, size);

            // Core orb
            const coreRadius = 50 + Math.sin(time * 2) * 3;
            const coreGrad = ctx.createRadialGradient(
                cx - 10,
                cy - 10,
                10,
                cx,
                cy,
                coreRadius,
            );
            coreGrad.addColorStop(0, 'rgba(248, 250, 252, 0.9)');
            coreGrad.addColorStop(0.3, 'rgba(217, 70, 239, 0.7)');
            coreGrad.addColorStop(0.6, 'rgba(139, 92, 246, 0.5)');
            coreGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');

            ctx.beginPath();
            ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();

            // Orbiting particles
            for (let i = 0; i < 6; i++) {
                const angle = time * (0.5 + i * 0.15) + (i * Math.PI * 2) / 6;
                const orbitRadius = 80 + Math.sin(time + i) * 15;
                const px = cx + Math.cos(angle) * orbitRadius;
                const py = cy + Math.sin(angle) * orbitRadius;
                const particleSize = 2 + Math.sin(time * 3 + i) * 1;

                const particleGrad = ctx.createRadialGradient(
                    px, py, 0, px, py, particleSize * 3,
                );
                particleGrad.addColorStop(0, 'rgba(56, 189, 248, 0.8)');
                particleGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

                ctx.beginPath();
                ctx.arc(px, py, particleSize * 3, 0, Math.PI * 2);
                ctx.fillStyle = particleGrad;
                ctx.fill();
            }

            // Pulsing ring
            const ringRadius = 90 + Math.sin(time * 1.5) * 8;
            const ringAlpha = 0.1 + Math.sin(time * 2) * 0.05;
            ctx.beginPath();
            ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(217, 70, 239, ${ringAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className={styles.orbContainer}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                style={{ width: 400, height: 400 }}
                aria-hidden="true"
            />
        </div>
    );
}
