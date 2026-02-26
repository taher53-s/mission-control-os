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
        description:
            'One shortcut. Infinite possibilities. A Raycast-level command system powered by AI that understands context, anticipates actions, and executes at the speed of thought.',
        accent: '#38BDF8',
        visual: '⌘',
        align: 'left',
    },
    {
        title: 'PERFORMANCE',
        subtitle: 'ENGINE',
        description:
            'Track every dimension of physical performance. Workouts, nutrition, recovery, sleep — all quantified, all analyzed, all optimized by AI.',
        accent: '#22C55E',
        visual: '▲',
        align: 'right',
    },
    {
        title: 'NEURAL',
        subtitle: 'KNOWLEDGE GRAPH',
        description:
            'Your ideas don\'t live in folders. They live in networks. Build a living knowledge graph where AI discovers connections you never saw.',
        accent: '#8B5CF6',
        visual: '◎',
        align: 'left',
    },
    {
        title: 'AUTOMATION',
        subtitle: 'SYSTEM',
        description:
            'Define triggers. Set conditions. Let the system handle the rest. Event-driven automation that runs your life on autopilot — intelligently.',
        accent: '#D946EF',
        visual: '⚡',
        align: 'right',
    },
];

/* Stagger container per feature section */
const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function FeatureStorySection({ story, index }: { story: FeatureStory; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.4, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

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
                viewport={{ once: true, amount: 0.4 }}
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
                {/* Feature card with 3D hover tilt + spring return */}
                <motion.div
                    className={styles.visualInner}
                    style={{
                        boxShadow: `0 0 80px ${story.accent}20, 0 0 160px ${story.accent}10`,
                        borderColor: `${story.accent}15`,
                    }}
                    whileHover={{
                        rotateX: -4,
                        rotateY: 6,
                        scale: 1.04,
                        boxShadow: `0 0 100px ${story.accent}30, 0 0 200px ${story.accent}15`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
