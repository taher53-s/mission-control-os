import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Nutrition — Mission Control OS',
    description: 'Nutrition tracking system',
};

export default function NutritionPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Nutrition</h1>
                <p className={styles.subtitle}>Fuel your performance</p>
            </header>
            <section className={styles.content}>
                <div className={`${styles.panel} glass-panel`}>
                    <h2 className={styles.panelTitle}>Today&apos;s Intake</h2>
                    <div className={styles.macros}>
                        <div className={styles.macro}>
                            <span className={styles.macroLabel}>Calories</span>
                            <span className={styles.macroValue}>—</span>
                        </div>
                        <div className={styles.macro}>
                            <span className={styles.macroLabel}>Protein</span>
                            <span className={styles.macroValue}>—</span>
                        </div>
                        <div className={styles.macro}>
                            <span className={styles.macroLabel}>Carbs</span>
                            <span className={styles.macroValue}>—</span>
                        </div>
                        <div className={styles.macro}>
                            <span className={styles.macroLabel}>Fat</span>
                            <span className={styles.macroValue}>—</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
