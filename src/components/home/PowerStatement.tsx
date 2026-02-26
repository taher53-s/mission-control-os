'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PowerStatement.module.css';

export function PowerStatement() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.bgAccent} />
            <motion.div
                className={styles.content}
                style={{ y, opacity, scale }}
            >
                <h2 className={styles.statement}>
                    <span className={styles.line1}>INTELLIGENCE</span>
                    <span className={styles.line2}>AT SCALE.</span>
                </h2>
                <div className={styles.rule} />
                <p className={styles.descriptor}>
                    An operating system that learns, adapts, and evolves
                    with every interaction. Not a tool — a system.
                </p>
            </motion.div>
        </section>
    );
}
