/**
 * Mission Control OS — Motion System
 * GPU-optimized animation curves and durations
 */

export const durations = {
    micro: 150,
    fast: 200,
    normal: 300,
    panel: 400,
    slow: 600,
    dramatic: 1000,
} as const;

export const easings = {
    /** Quick snappy interactions */
    micro: [0.25, 0.1, 0.25, 1.0] as const,
    /** Panel transitions */
    panel: [0.16, 1, 0.3, 1] as const,
    /** Slower reveal animations */
    slow: [0.4, 0, 0.2, 1] as const,
    /** Bouncy spring-like feel */
    spring: [0.34, 1.56, 0.64, 1] as const,
    /** Ease out for exits */
    easeOut: [0, 0, 0.2, 1] as const,
    /** Ease in for entries */
    easeIn: [0.4, 0, 1, 1] as const,
} as const;

export const springConfigs = {
    gentle: { stiffness: 120, damping: 20, mass: 1 },
    snappy: { stiffness: 300, damping: 25, mass: 0.8 },
    bouncy: { stiffness: 400, damping: 15, mass: 0.5 },
    heavy: { stiffness: 200, damping: 30, mass: 1.5 },
} as const;

/** Framer Motion transition presets */
export const transitions = {
    micro: { duration: durations.micro / 1000, ease: easings.micro },
    panel: { duration: durations.panel / 1000, ease: easings.panel },
    slow: { duration: durations.slow / 1000, ease: easings.slow },
    spring: { type: 'spring' as const, ...springConfigs.snappy },
    springGentle: { type: 'spring' as const, ...springConfigs.gentle },
} as const;

export type DurationToken = keyof typeof durations;
export type EasingToken = keyof typeof easings;
