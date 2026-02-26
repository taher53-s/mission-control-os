'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollSection.module.css';

interface ScrollSectionProps {
    children: ReactNode;
    index: number;
    lightColor?: string;
}

/**
 * Wraps each homepage section to create:
 * - Section depth stacking illusion (scale-down on exit)
 * - Light sweep transitions between sections
 * - Background temperature shift per section
 */
export function ScrollSection({ children, index, lightColor = 'rgba(56,189,248,0.03)' }: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Depth stacking: scale down slightly as section leaves
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.98, 1, 1, 0.97]);
    // Light sweep opacity
    const sweepOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.7, 0.85, 1], [0, 0.6, 0, 0, 0.4, 0]);
    // Shadow depth for stacking illusion
    const shadowOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 0.3]);

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
