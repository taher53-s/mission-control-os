import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Tasks — Mission Control OS',
    description: 'Task engine for Mission Control OS',
};

export default function TasksPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Tasks</h1>
                <p className={styles.subtitle}>Execute with precision</p>
            </header>
            <section className={styles.columns}>
                {(['Backlog', 'To Do', 'In Progress', 'Done'] as const).map((column) => (
                    <div key={column} className={styles.column}>
                        <h2 className={styles.columnTitle}>{column}</h2>
                        <div className={`${styles.columnContent} glass-panel-subtle`}>
                            <p className={styles.emptyText}>No tasks</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
