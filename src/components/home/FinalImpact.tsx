'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FinalImpact.module.css';

export function FinalImpact() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.6, 1]);

    return (
        <section ref={ref} className={styles.section}>
            <motion.div className={styles.content} style={{ scale, opacity }}>
                <h2 className={styles.headline}>
                    <span className={styles.line1}>CONTROL</span>
                    <span className={styles.line2}>EVERYTHING.</span>
                </h2>
                <div className={styles.rule} />
                <button type="button" className={styles.cta}>
                    BEGIN NOW
                </button>
            </motion.div>

            <footer className={styles.footer}>
                <span className={styles.footerText}>MISSION CONTROL OS</span>
                <span className={styles.footerDivider}>—</span>
                <span className={styles.footerText}>V3.0</span>
                <span className={styles.footerDivider}>—</span>
                <span className={styles.footerText}>BUILT FOR THE RELENTLESS</span>
            </footer>
        </section>
    );
}
