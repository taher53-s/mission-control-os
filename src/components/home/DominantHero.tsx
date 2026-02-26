'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './DominantHero.module.css';
import { AIEnergyVisual } from './AIEnergyVisual';

/* Custom easing — cinematic expo-out */
const ease = [0.22, 1, 0.36, 1] as const;

/* Stagger variant container */
const titleContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

/* Per-line reveal — vertical translate + opacity */
const titleLine = {
    hidden: { opacity: 0, y: 50, rotateX: -8 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 1,
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
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

    return (
        <section ref={sectionRef} className={styles.hero}>
            {/* Background gradient layers */}
            <div className={styles.bgLayer1} />
            <div className={styles.bgLayer2} />

            <motion.div
                className={styles.content}
                style={{ scale: heroScale, opacity: heroOpacity }}
            >
                {/* Left — Typography with staggered choreography */}
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.55, ease }}
                    >
                        Your Life. Reengineered.
                    </motion.p>

                    <motion.div
                        className={styles.ctas}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease }}
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
                            whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(255,255,255,0.5)' }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                            Explore Features
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className={styles.meta}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <span className={styles.metaItem}>v3.0</span>
                        <span className={styles.metaDivider} />
                        <span className={styles.metaItem}>AI-NATIVE</span>
                        <span className={styles.metaDivider} />
                        <span className={styles.metaItem}>NEXT GEN</span>
                    </motion.div>
                </div>

                {/* Right — Visual with cursor-based parallax */}
                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.25, ease }}
                >
                    <AIEnergyVisual />
                </motion.div>
            </motion.div>
        </section>
    );
}
