import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Knowledge Graph — Mission Control OS',
    description: 'Knowledge graph visualization',
};

export default function GraphPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Knowledge Graph</h1>
                <p className={styles.subtitle}>Map your mind</p>
            </header>
            <section className={styles.canvas}>
                <div className={styles.placeholder}>
                    <div className={styles.orbSmall} />
                    <p className={styles.placeholderText}>
                        Your knowledge graph will render here
                    </p>
                    <p className={styles.placeholderHint}>
                        Create nodes to begin building connections
                    </p>
                </div>
            </section>
        </main>
    );
}
