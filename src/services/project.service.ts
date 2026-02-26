/**
 * Mission Control OS — Project Service
 */

import type { Project, ProjectStatus } from '@/lib/schema';

export async function getProjects(_userId: string): Promise<Project[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function getProjectById(_projectId: string): Promise<Project | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function createProject(
    _userId: string,
    _data: {
        name: string;
        description?: string;
        color: string;
        icon?: string;
        startDate?: string;
        targetDate?: string;
    },
): Promise<Project | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function updateProjectStatus(
    _projectId: string,
    _status: ProjectStatus,
): Promise<Project | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function deleteProject(_projectId: string): Promise<boolean> {
    // TODO: Connect to Supabase
    return false;
}
