'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './DominantHero.module.css';
import { AIEnergyVisual } from './AIEnergyVisual';

/* Custom easing — cinematic expo-out */
const ease = [0.22, 1, 0.36, 1] as const;

/* Stagger variant container — tightened timing */
const titleContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

/* Per-line reveal — controlled, not flashy */
const titleLine = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease,
        },
    },
};

export function DominantHero() {
    const sectionRef = useRef<HTMLElement>(null);

    /* Scroll-linked hero compression */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    /* Hero compresses as user scrolls: scale, opacity, background darken */
    const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 1, 0]);
    /* AI visual recedes in Z-space */
    const visualScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.85]);
    const visualOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 0.8, 0]);
    /* Background darkens subtly */
    const bgDarken = useTransform(scrollYProgress, [0, 0.8], [0, 0.4]);

    return (
        <section ref={sectionRef} className={styles.hero}>
            {/* Background gradient layers */}
            <div className={styles.bgLayer1} />
            <div className={styles.bgLayer2} />
            {/* Scroll-linked background darken overlay */}
            <motion.div className={styles.bgDarken} style={{ opacity: bgDarken }} aria-hidden="true" />

            <motion.div
                className={styles.content}
                style={{ scale: heroScale, opacity: heroOpacity }}
            >
                {/* Left — Typography */}
                <div className={styles.left}>
                    <motion.div
                        className={styles.titleBlock}
                        variants={titleContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className={styles.title}>
                            <motion.span className={styles.titleLine1} variants={titleLine}>
                                MISSION
                            </motion.span>
                            <motion.span className={styles.titleLine2} variants={titleLine}>
                                CONTROL
                            </motion.span>
                            <motion.span className={styles.titleLine3} variants={titleLine}>
                                OS
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease }}
                    >
                        Reengineered.
                    </motion.p>

                    <motion.div
                        className={styles.ctas}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65, ease }}
                    >
                        <motion.button
                            type="button"
                            className={styles.ctaPrimary}
                            whileHover={{ scale: 1.03, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                            Launch System
                        </motion.button>
                        <motion.button
                            type="button"
                            className={styles.ctaSecondary}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                            Explore
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className={styles.meta}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <span className={styles.metaItem}>v3.0</span>
                        <span className={styles.metaDivider} />
                        <span className={styles.metaItem}>AI-NATIVE</span>
                    </motion.div>
                </div>

                {/* Right — Visual recedes on scroll */}
                <motion.div
                    className={styles.right}
                    style={{ scale: visualScale, opacity: visualOpacity }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease }}
                >
                    <AIEnergyVisual />
                </motion.div>
            </motion.div>
        </section>
    );
}
