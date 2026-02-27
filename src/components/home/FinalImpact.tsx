'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FinalImpact.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalImpact() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <section ref={ref} className={styles.section}>
            <motion.div className={styles.content} style={{ scale, opacity }}>
                <motion.h2
                    className={styles.headline}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease }}
                >
                    <span className={styles.line1}>CONTROL</span>
                    <span className={styles.line2}>EVERYTHING.</span>
                </motion.h2>
                <motion.div
                    className={styles.rule}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease }}
                />
                <motion.button
                    type="button"
                    className={styles.cta}
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                    BEGIN NOW
                </motion.button>
            </motion.div>

            <footer className={styles.footer}>
                <span className={styles.footerText}>MISSION CONTROL OS</span>
                <span className={styles.footerDivider}>—</span>
                <span className={styles.footerText}>V3.0</span>
            </footer>
        </section>
    );
}
