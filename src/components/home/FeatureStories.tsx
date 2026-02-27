'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FeatureStories.module.css';

const ease = [0.22, 1, 0.36, 1] as const;

interface FeatureStory {
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    visual: string;
    align: 'left' | 'right';
}

const stories: FeatureStory[] = [
    {
        title: 'AI COMMAND',
        subtitle: 'INTERFACE',
        description: 'One shortcut. Infinite actions. Context-aware AI that executes at the speed of thought.',
        accent: '#38BDF8',
        visual: '⌘',
        align: 'left',
    },
    {
        title: 'PERFORMANCE',
        subtitle: 'ENGINE',
        description: 'Every dimension of physical output. Quantified. Analyzed. Optimized.',
        accent: '#22C55E',
        visual: '▲',
        align: 'right',
    },
    {
        title: 'NEURAL',
        subtitle: 'KNOWLEDGE GRAPH',
        description: 'Ideas live in networks. AI discovers connections you never saw.',
        accent: '#8B5CF6',
        visual: '◎',
        align: 'left',
    },
    {
        title: 'AUTOMATION',
        subtitle: 'SYSTEM',
        description: 'Triggers. Conditions. Execution. Your life runs on autopilot — intelligently.',
        accent: '#D946EF',
        visual: '⚡',
        align: 'right',
    },
];

/* Stagger — tighter timing */
const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function FeatureStorySection({ story, index }: { story: FeatureStory; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            className={`${styles.story} ${story.align === 'right' ? styles.storyReverse : ''}`}
            style={{ y, opacity, scale }}
        >
            <motion.div
                className={styles.textBlock}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.span
                    className={styles.index}
                    style={{ color: story.accent }}
                    variants={fadeUp}
                >
                    {String(index + 1).padStart(2, '0')}
                </motion.span>
                <motion.h3 className={styles.featureTitle} variants={fadeUp}>
                    <span>{story.title}</span>
                    <span className={styles.featureSubtitle} style={{ color: story.accent }}>
                        {story.subtitle}
                    </span>
                </motion.h3>
                <motion.p className={styles.featureDescription} variants={fadeUp}>
                    {story.description}
                </motion.p>
                <motion.div
                    className={styles.featureLine}
                    style={{ background: story.accent }}
                    variants={fadeUp}
                />
            </motion.div>

            <div className={styles.visualBlock}>
                <motion.div
                    className={styles.visualInner}
                    style={{
                        boxShadow: `0 0 60px ${story.accent}15, 0 0 120px ${story.accent}08`,
                        borderColor: `${story.accent}12`,
                    }}
                    whileHover={{
                        rotateX: -3,
                        rotateY: 5,
                        scale: 1.03,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                >
                    <span className={styles.visualIcon} style={{ color: story.accent }}>
                        {story.visual}
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
}

export function FeatureStories() {
    return (
        <section className={styles.section}>
            {stories.map((story, i) => (
                <FeatureStorySection key={story.title} story={story} index={i} />
            ))}
        </section>
    );
}
