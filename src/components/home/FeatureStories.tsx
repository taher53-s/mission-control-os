'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FeatureStories.module.css';

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

function FeatureStorySection({ story, index }: { story: FeatureStory; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

    return (
        <motion.div
            ref={ref}
            className={`${styles.story} ${story.align === 'right' ? styles.storyReverse : ''}`}
            style={{ y, opacity, scale }}
        >
            <div className={styles.textBlock}>
                <span className={styles.index} style={{ color: story.accent }}>
                    {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.featureTitle}>
                    <span>{story.title}</span>
                    <span className={styles.featureSubtitle} style={{ color: story.accent }}>
                        {story.subtitle}
                    </span>
                </h3>
                <p className={styles.featureDescription}>{story.description}</p>
                <div className={styles.featureLine} style={{ background: story.accent }} />
            </div>
            <div className={styles.visualBlock}>
                <div
                    className={styles.visualInner}
                    style={{
                        boxShadow: `0 0 80px ${story.accent}20, 0 0 160px ${story.accent}10`,
                        borderColor: `${story.accent}15`,
                    }}
                >
                    <span className={styles.visualIcon} style={{ color: story.accent }}>
                        {story.visual}
                    </span>
                </div>
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
