/**
 * Mission Control OS — Depth System
 * 3-layer glass elevation with blur, shadow, and background
 */

export const depth = {
    /** Flush with surface — subtle separation */
    level1: {
        background: 'rgba(15, 23, 42, 0.4)',
        backdropBlur: '12px',
        border: '1px solid rgba(148, 163, 184, 0.06)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    },
    /** Floating panels — clear elevation */
    level2: {
        background: 'rgba(15, 23, 42, 0.6)',
        backdropBlur: '24px',
        border: '1px solid rgba(148, 163, 184, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
    },
    /** Modals & overlays — maximum depth */
    level3: {
        background: 'rgba(15, 23, 42, 0.8)',
        backdropBlur: '40px',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        boxShadow:
            '0 24px 64px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(148, 163, 184, 0.1)',
    },
} as const;

export type DepthLevel = keyof typeof depth;
