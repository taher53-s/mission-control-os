import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Performance — Mission Control OS',
    description: 'Workout and performance tracking system',
};

export default function GymPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Performance</h1>
                <p className={styles.subtitle}>Track, optimize, dominate</p>
            </header>
            <section className={styles.content}>
                <div className={`${styles.panel} glass-panel`}>
                    <h2 className={styles.panelTitle}>Today&apos;s Session</h2>
                    <p className={styles.panelEmpty}>No workout logged yet</p>
                </div>
                <div className={`${styles.panel} glass-panel`}>
                    <h2 className={styles.panelTitle}>Weekly Progress</h2>
                    <p className={styles.panelEmpty}>Start tracking to see progress</p>
                </div>
            </section>
        </main>
    );
}
