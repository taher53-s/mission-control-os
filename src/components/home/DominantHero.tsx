'use client';

import { motion } from 'framer-motion';
import styles from './DominantHero.module.css';
import { AIEnergyVisual } from './AIEnergyVisual';

export function DominantHero() {
    return (
        <section className={styles.hero}>
            {/* Background gradient layers */}
            <div className={styles.bgLayer1} />
            <div className={styles.bgLayer2} />

            <div className={styles.content}>
                {/* Left — Typography */}
                <div className={styles.left}>
                    <motion.div
                        className={styles.titleBlock}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className={styles.title}>
                            <span className={styles.titleLine1}>MISSION</span>
                            <span className={styles.titleLine2}>CONTROL</span>
                            <span className={styles.titleLine3}>OS</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Your Life. Reengineered.
                    </motion.p>

                    <motion.div
                        className={styles.ctas}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <button type="button" className={styles.ctaPrimary}>
                            Launch System
                        </button>
                        <button type="button" className={styles.ctaSecondary}>
                            Explore Features
                        </button>
                    </motion.div>

                    <motion.div
                        className={styles.meta}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <span className={styles.metaItem}>v3.0</span>
                        <span className={styles.metaDivider} />
                        <span className={styles.metaItem}>AI-NATIVE</span>
                        <span className={styles.metaDivider} />
                        <span className={styles.metaItem}>NEXT GEN</span>
                    </motion.div>
                </div>

                {/* Right — Visual */}
                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, scale: 0.85, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AIEnergyVisual />
                </motion.div>
            </div>
        </section>
    );
}
