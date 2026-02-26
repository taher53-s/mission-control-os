import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Settings — Mission Control OS',
    description: 'System configuration',
};

export default function SettingsPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Settings</h1>
                <p className={styles.subtitle}>Configure your system</p>
            </header>
            <section className={styles.sections}>
                {[
                    { label: 'Profile', description: 'Manage your identity' },
                    { label: 'Appearance', description: 'Theme and display' },
                    { label: 'Notifications', description: 'Alert preferences' },
                    { label: 'Integrations', description: 'Connected services' },
                    { label: 'Data', description: 'Export and privacy' },
                ].map((section) => (
                    <div key={section.label} className={`${styles.settingRow} glass-panel-subtle`}>
                        <div>
                            <h2 className={styles.settingLabel}>{section.label}</h2>
                            <p className={styles.settingDescription}>{section.description}</p>
                        </div>
                        <span className={styles.arrow}>→</span>
                    </div>
                ))}
            </section>
        </main>
    );
}
