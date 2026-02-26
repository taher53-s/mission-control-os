import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Insights — Mission Control OS',
    description: 'AI-powered insights and analytics',
};

export default function InsightsPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Insights</h1>
                <p className={styles.subtitle}>AI-driven intelligence</p>
            </header>
            <section className={styles.content}>
                <div className={`${styles.insightCard} glass-panel ai-glow`}>
                    <div className={styles.insightHeader}>
                        <span className={styles.badge}>AI Generated</span>
                    </div>
                    <p className={styles.insightText}>
                        Insights will appear here as you use Mission Control OS.
                        The AI engine analyzes your patterns to surface actionable intelligence.
                    </p>
                </div>
            </section>
        </main>
    );
}
