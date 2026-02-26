/**
 * Mission Control OS — Database Schema Types
 * Event-driven architecture with unified domain models
 * Supabase connection will be added later
 */

// ============================================
// Core Identity
// ============================================

export interface User {
    id: string;
    email: string;
    displayName: string;
    avatarUrl: string | null;
    timezone: string;
    preferences: UserPreferences;
    createdAt: string;
    updatedAt: string;
}

export interface UserPreferences {
    theme: 'dark' | 'light' | 'system';
    reducedMotion: boolean;
    commandShortcut: string;
    dashboardLayout: string;
}

// ============================================
// Event System (Core Architecture)
// ============================================

export interface MCEvent {
    id: string;
    userId: string;
    entityType: EntityType;
    entityId: string;
    action: string;
    payload: Record<string, unknown>;
    metadata: EventMetadata;
    createdAt: string;
}

export interface EventMetadata {
    source: 'user' | 'system' | 'ai' | 'automation';
    sessionId: string | null;
    correlationId: string | null;
}

export type EntityType =
    | 'project'
    | 'task'
    | 'workout'
    | 'nutrition_log'
    | 'knowledge_node'
    | 'automation'
    | 'session'
    | 'metric';

// ============================================
// Entities
// ============================================

export interface Entity {
    id: string;
    userId: string;
    type: EntityType;
    name: string;
    description: string | null;
    status: EntityStatus;
    metadata: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}

export type EntityStatus = 'active' | 'archived' | 'deleted';

// ============================================
// Projects
// ============================================

export interface Project {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    status: ProjectStatus;
    color: string;
    icon: string | null;
    startDate: string | null;
    targetDate: string | null;
    completedAt: string | null;
    metadata: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}

export type ProjectStatus = 'planning' | 'active' | 'paused' | 'completed' | 'archived';

// ============================================
// Tasks
// ============================================

export interface Task {
    id: string;
    userId: string;
    projectId: string | null;
    title: string;
    description: string | null;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string | null;
    completedAt: string | null;
    tags: string[];
    estimatedMinutes: number | null;
    actualMinutes: number | null;
    createdAt: string;
    updatedAt: string;
}

export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';

// ============================================
// Workouts
// ============================================

export interface Workout {
    id: string;
    userId: string;
    name: string;
    type: WorkoutType;
    startedAt: string;
    completedAt: string | null;
    durationMinutes: number | null;
    exercises: Exercise[];
    notes: string | null;
    mood: number | null;
    createdAt: string;
}

export type WorkoutType = 'strength' | 'cardio' | 'flexibility' | 'sport' | 'mixed';

export interface Exercise {
    name: string;
    sets: ExerciseSet[];
    notes: string | null;
}

export interface ExerciseSet {
    reps: number | null;
    weight: number | null;
    duration: number | null;
    distance: number | null;
}

// ============================================
// Nutrition
// ============================================

export interface NutritionLog {
    id: string;
    userId: string;
    date: string;
    mealType: MealType;
    items: NutritionItem[];
    totalCalories: number;
    totalProtein: number;
    totalCarbs: number;
    totalFat: number;
    notes: string | null;
    createdAt: string;
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface NutritionItem {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    quantity: number;
    unit: string;
}

// ============================================
// Knowledge Graph
// ============================================

export interface KnowledgeNode {
    id: string;
    userId: string;
    title: string;
    content: string | null;
    type: NodeType;
    tags: string[];
    embedding: number[] | null;
    createdAt: string;
    updatedAt: string;
}

export type NodeType = 'note' | 'idea' | 'reference' | 'person' | 'concept' | 'resource';

export interface Relationship {
    id: string;
    userId: string;
    sourceNodeId: string;
    targetNodeId: string;
    type: RelationshipType;
    weight: number;
    metadata: Record<string, unknown>;
    createdAt: string;
}

export type RelationshipType =
    | 'related_to'
    | 'depends_on'
    | 'inspired_by'
    | 'contradicts'
    | 'extends'
    | 'part_of';

// ============================================
// Metrics & Sessions
// ============================================

export interface Metric {
    id: string;
    userId: string;
    name: string;
    value: number;
    unit: string;
    category: string;
    recordedAt: string;
    metadata: Record<string, unknown>;
}

export interface Session {
    id: string;
    userId: string;
    type: SessionType;
    startedAt: string;
    endedAt: string | null;
    duration: number | null;
    metadata: Record<string, unknown>;
}

export type SessionType = 'focus' | 'break' | 'meeting' | 'exercise' | 'planning';

// ============================================
// Automations
// ============================================

export interface Automation {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    trigger: AutomationTrigger;
    actions: AutomationAction[];
    isActive: boolean;
    lastRunAt: string | null;
    runCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface AutomationTrigger {
    type: 'schedule' | 'event' | 'condition';
    config: Record<string, unknown>;
}

export interface AutomationAction {
    type: string;
    config: Record<string, unknown>;
    order: number;
}
