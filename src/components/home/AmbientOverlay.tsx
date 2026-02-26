'use client';

import styles from './AmbientOverlay.module.css';

/**
 * Global ambient systems:
 * - Soft noise texture overlay
 * - Vignette mask on edges
 * - Fixed, always-on, GPU composited
 */
export function AmbientOverlay() {
    return (
        <div className={styles.overlay} aria-hidden="true">
            <div className={styles.noise} />
            <div className={styles.vignette} />
        </div>
    );
}
