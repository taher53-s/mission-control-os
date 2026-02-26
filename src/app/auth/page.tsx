import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Authentication — Mission Control OS',
    description: 'Sign in to Mission Control OS',
};

export default function AuthPage() {
    return (
        <main className={styles.container}>
            <div className={`${styles.card} glass-panel-elevated`}>
                <div className={styles.logo}>
                    <div className={styles.logoOrb} />
                    <h1 className={styles.logoText}>Mission Control</h1>
                </div>
                <p className={styles.tagline}>Your life, under intelligent control</p>
                <div className={styles.form}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className={styles.input}
                        autoComplete="email"
                    />
                    <button type="button" className={styles.button}>
                        Continue
                    </button>
                </div>
                <p className={styles.terms}>
                    By continuing, you agree to the Terms of Service
                </p>
            </div>
        </main>
    );
}
