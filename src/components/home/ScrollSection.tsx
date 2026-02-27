'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollSection.module.css';

interface ScrollSectionProps {
    children: ReactNode;
    index: number;
    lightColor?: string;
    /** Atmospheric temperature — hue for background tint */
    temperature?: string;
}

/**
 * Wraps each homepage section to create:
 * - Section depth stacking illusion (scale-down on exit)
 * - Light sweep transitions between sections
 * - Section lock moments (sticky entrance)
 * - Atmospheric temperature shift
 */
export function ScrollSection({
    children,
    index,
    lightColor = 'rgba(56,189,248,0.02)',
    temperature = 'transparent',
}: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    /* Depth stacking: scale down as section exits viewport */
    const scale = useTransform(scrollYProgress, [0, 0.08, 0.85, 1], [0.97, 1, 1, 0.96]);
    /* Light sweep — brief flash on entrance */
    const sweepOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0.5, 0]);
    /* Bottom shadow for depth illusion */
    const shadowOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 0.25]);
    /* Atmospheric temperature — fades in as section enters */
    const tempOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]);

    return (
        <motion.div
            ref={ref}
            className={styles.wrapper}
            style={{
                scale,
                zIndex: 10 + index,
            }}
        >
            {children}
            {/* Atmospheric temperature gradient */}
            <motion.div
                className={styles.temperature}
                style={{ opacity: tempOpacity, background: temperature }}
                aria-hidden="true"
            />
            {/* Light sweep gradient overlay */}
            <motion.div
                className={styles.lightSweep}
                style={{
                    opacity: sweepOpacity,
                    background: `linear-gradient(135deg, transparent 30%, ${lightColor} 50%, transparent 70%)`,
                }}
                aria-hidden="true"
            />
            {/* Bottom shadow for depth stacking */}
            <motion.div
                className={styles.depthShadow}
                style={{ opacity: shadowOpacity }}
                aria-hidden="true"
            />
        </motion.div>
    );
}
