'use client';

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { AIOrb } from './AIOrb';

export function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gridOverlay} />
            </div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.p
                    className={styles.eyebrow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Mission Control OS
                </motion.p>

                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    Your Life.
                    <br />
                    <span className={styles.headlineAccent}>Under Intelligent Control.</span>
                </motion.h1>

                <motion.p
                    className={styles.subheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    An AI-native operating system for your projects, health, knowledge, and everything
                    that matters.
                </motion.p>

                <motion.div
                    className={styles.orbWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AIOrb />
                </motion.div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <button type="button" className={styles.ctaButton}>
                        Enter Mission Control
                    </button>
                    <span className={styles.ctaHint}>⌘K to open command</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
