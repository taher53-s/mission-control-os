/**
 * Mission Control OS — Task Service
 */

import type { Task, TaskStatus, TaskPriority } from '@/lib/schema';

export async function getTasks(_userId: string): Promise<Task[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function getTaskById(_taskId: string): Promise<Task | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function createTask(
    _userId: string,
    _data: {
        title: string;
        description?: string;
        projectId?: string;
        priority?: TaskPriority;
        dueDate?: string;
        tags?: string[];
        estimatedMinutes?: number;
    },
): Promise<Task | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function updateTaskStatus(
    _taskId: string,
    _status: TaskStatus,
): Promise<Task | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function deleteTask(_taskId: string): Promise<boolean> {
    // TODO: Connect to Supabase
    return false;
}

export async function getTasksByProject(
    _projectId: string,
): Promise<Task[]> {
    // TODO: Connect to Supabase
    return [];
}
