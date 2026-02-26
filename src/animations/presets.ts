/**
 * Mission Control OS — Animation Utilities
 * Shared animation presets for scroll reveal and transitions
 */

export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
};

export const slideInFromBottom = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export function staggerChildren(staggerDelay = 0.08) {
    return {
        animate: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };
}
