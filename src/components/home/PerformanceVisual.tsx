'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PerformanceVisual.module.css';

export function PerformanceVisual() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const size = 500;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);

        let animationId: number;
        let time = 0;

        function draw() {
            if (!ctx) return;
            time += 0.005;
            ctx.clearRect(0, 0, size, size);

            const cx = size / 2;
            const cy = size / 2;

            // Ring metrics
            const rings = [
                { radius: 160, progress: 0.78, color: '#22C55E', label: 'PERFORMANCE', width: 6 },
                { radius: 130, progress: 0.62, color: '#38BDF8', label: 'FOCUS', width: 5 },
                { radius: 100, progress: 0.91, color: '#D946EF', label: 'RECOVERY', width: 4 },
                { radius: 70, progress: 0.45, color: '#F59E0B', label: 'NUTRITION', width: 3 },
            ];

            rings.forEach((ring) => {
                // Track
                ctx.beginPath();
                ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
                ctx.lineWidth = ring.width;
                ctx.stroke();

                // Progress arc
                const startAngle = -Math.PI / 2;
                const animatedProgress = ring.progress * Math.min(1, time * 0.8);
                const endAngle = startAngle + Math.PI * 2 * animatedProgress;

                ctx.beginPath();
                ctx.arc(cx, cy, ring.radius, startAngle, endAngle);
                ctx.strokeStyle = ring.color;
                ctx.lineWidth = ring.width;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Glow on the tip
                const tipX = cx + Math.cos(endAngle) * ring.radius;
                const tipY = cy + Math.sin(endAngle) * ring.radius;
                const tipGlow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 12);
                tipGlow.addColorStop(0, ring.color + '80');
                tipGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = tipGlow;
                ctx.beginPath();
                ctx.arc(tipX, tipY, 12, 0, Math.PI * 2);
                ctx.fill();
            });

            // Center score
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#F8FAFC';
            ctx.font = '700 48px Inter, sans-serif';
            ctx.fillText('96', cx, cy - 8);
            ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
            ctx.font = '500 11px Inter, sans-serif';
            ctx.letterSpacing = '0.1em';
            ctx.fillText('SYSTEM SCORE', cx, cy + 22);

            animationId = requestAnimationFrame(draw);
        }

        draw();
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.bgGlow} />
            <motion.div className={styles.content} style={{ opacity, scale }}>
                <div className={styles.textSide}>
                    <span className={styles.label}>SYSTEM METRICS</span>
                    <h2 className={styles.title}>
                        EVERY METRIC.
                        <br />
                        <span className={styles.titleAccent}>QUANTIFIED.</span>
                    </h2>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>96%</span>
                            <span className={styles.statLabel}>System Score</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>4.2h</span>
                            <span className={styles.statLabel}>Deep Focus</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>12</span>
                            <span className={styles.statLabel}>Tasks Done</span>
                        </div>
                    </div>
                </div>
                <div className={styles.visualSide}>
                    <canvas
                        ref={canvasRef}
                        className={styles.canvas}
                        style={{ width: 500, height: 500 }}
                        aria-hidden="true"
                    />
                </div>
            </motion.div>
        </section>
    );
}
