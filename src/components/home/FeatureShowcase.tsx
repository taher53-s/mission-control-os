'use client';

import styles from './FeatureShowcase.module.css';
import { ScrollReveal } from './ScrollReveal';

interface Feature {
    title: string;
    description: string;
    accent: string;
    icon: string;
}

const features: Feature[] = [
    {
        title: 'Command Interface',
        description:
            'Raycast-level speed. One shortcut to control everything. AI-powered actions at your fingertips.',
        accent: 'var(--color-accent-blue)',
        icon: '⌘',
    },
    {
        title: 'Knowledge Graph',
        description:
            'Your ideas, connected. Build a living map of everything you know. AI discovers hidden links.',
        accent: 'var(--color-accent-violet)',
        icon: '◇',
    },
    {
        title: 'AI Insights',
        description:
            'Patterns you can\'t see. The AI engine surfaces actionable intelligence from your daily data.',
        accent: 'var(--color-ai-glow)',
        icon: '✦',
    },
    {
        title: 'Performance Tracking',
        description:
            'Body and mind, quantified. Track workouts, nutrition, focus sessions, and sleep in one place.',
        accent: 'var(--color-accent-emerald)',
        icon: '▲',
    },
];

export function FeatureShowcase() {
    return (
        <section className={styles.section}>
            <ScrollReveal>
                <h2 className={styles.sectionTitle}>
                    Every dimension of your life.
                    <br />
                    <span className={styles.titleMuted}>One intelligent system.</span>
                </h2>
            </ScrollReveal>

            <div className={styles.grid}>
                {features.map((feature, i) => (
                    <ScrollReveal key={feature.title} delay={i * 0.1}>
                        <div className={`${styles.card} glass-panel`}>
                            <span
                                className={styles.icon}
                                style={{ color: feature.accent }}
                            >
                                {feature.icon}
                            </span>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                            <div
                                className={styles.accentLine}
                                style={{ background: feature.accent }}
                            />
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
