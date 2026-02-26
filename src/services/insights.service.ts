/**
 * Mission Control OS — Insights Service
 */

export interface InsightData {
    id: string;
    title: string;
    description: string;
    category: 'productivity' | 'health' | 'knowledge' | 'general';
    severity: 'info' | 'suggestion' | 'warning';
    actionable: boolean;
    createdAt: string;
}

export interface DashboardMetrics {
    tasksCompleted: number;
    tasksTotal: number;
    projectsActive: number;
    workoutsThisWeek: number;
    caloriesAvgDaily: number;
    knowledgeNodesTotal: number;
    focusHoursToday: number;
    streakDays: number;
}

export async function getInsights(_userId: string): Promise<InsightData[]> {
    // TODO: Connect to Supabase + AI analysis
    return [];
}

export async function getDashboardMetrics(_userId: string): Promise<DashboardMetrics> {
    // TODO: Connect to Supabase
    return {
        tasksCompleted: 0,
        tasksTotal: 0,
        projectsActive: 0,
        workoutsThisWeek: 0,
        caloriesAvgDaily: 0,
        knowledgeNodesTotal: 0,
        focusHoursToday: 0,
        streakDays: 0,
    };
}

export async function generateAIInsight(
    _userId: string,
    _context: string,
): Promise<InsightData | null> {
    // TODO: Connect to AI provider
    return null;
}
