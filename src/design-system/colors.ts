/**
 * Mission Control OS — Color System
 * Deep spatial palette for a premium AI operating system
 */

export const colors = {
    // Core backgrounds
    primary: '#05080F',
    secondary: '#0F172A',
    surface: '#1E293B',
    surfaceLight: '#334155',

    // Accent palette
    accentBlue: '#38BDF8',
    accentViolet: '#8B5CF6',
    accentEmerald: '#22C55E',
    accentAmber: '#F59E0B',
    accentRose: '#F43F5E',

    // AI Core
    aiCoreGlow: '#D946EF',
    aiCoreGlowSubtle: 'rgba(217, 70, 239, 0.15)',
    aiCoreGlowMedium: 'rgba(217, 70, 239, 0.3)',

    // Text hierarchy
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textMuted: '#475569',
    textInverse: '#05080F',

    // Borders & dividers
    border: 'rgba(148, 163, 184, 0.1)',
    borderActive: 'rgba(56, 189, 248, 0.3)',
    divider: 'rgba(148, 163, 184, 0.06)',

    // State colors
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#38BDF8',

    // Glass
    glassBackground: 'rgba(15, 23, 42, 0.6)',
    glassBorder: 'rgba(148, 163, 184, 0.08)',
    glassHighlight: 'rgba(248, 250, 252, 0.04)',
} as const;

export type ColorToken = keyof typeof colors;
