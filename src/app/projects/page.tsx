import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Projects — Mission Control OS',
    description: 'Project management system',
};

export default function ProjectsPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.subtitle}>Strategic execution space</p>
            </header>
            <section className={styles.content}>
                <div className={`${styles.emptyState} glass-panel`}>
                    <div className={styles.emptyIcon}>◇</div>
                    <h2 className={styles.emptyTitle}>No projects yet</h2>
                    <p className={styles.emptyText}>Create your first project to get started</p>
                </div>
            </section>
        </main>
    );
}
