import type { Metadata } from 'next';
import styles from './dashboard.module.css';

export const metadata: Metadata = {
    title: 'Dashboard — Mission Control OS',
    description: 'System overview for Mission Control OS',
};

export default function DashboardPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>System Overview</h1>
                <p className={styles.subtitle}>Your operational snapshot</p>
            </header>
            <section className={styles.grid}>
                <div className={`${styles.card} glass-panel`}>
                    <span className={styles.cardLabel}>Active Projects</span>
                    <span className={styles.cardValue}>—</span>
                </div>
                <div className={`${styles.card} glass-panel`}>
                    <span className={styles.cardLabel}>Tasks In Progress</span>
                    <span className={styles.cardValue}>—</span>
                </div>
                <div className={`${styles.card} glass-panel`}>
                    <span className={styles.cardLabel}>Focus Hours Today</span>
                    <span className={styles.cardValue}>—</span>
                </div>
                <div className={`${styles.card} glass-panel`}>
                    <span className={styles.cardLabel}>Streak</span>
                    <span className={styles.cardValue}>—</span>
                </div>
            </section>
        </main>
    );
}
