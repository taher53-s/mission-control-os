/**
 * Mission Control OS — Gym Service
 */

import type { Workout, WorkoutType, Exercise } from '@/lib/schema';

export async function getWorkouts(_userId: string): Promise<Workout[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function getWorkoutById(_workoutId: string): Promise<Workout | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function createWorkout(
    _userId: string,
    _data: {
        name: string;
        type: WorkoutType;
        exercises: Exercise[];
        notes?: string;
    },
): Promise<Workout | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function completeWorkout(
    _workoutId: string,
    _mood?: number,
): Promise<Workout | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function getWorkoutStats(
    _userId: string,
    _from: string,
    _to: string,
): Promise<{ totalWorkouts: number; totalMinutes: number; avgMood: number }> {
    // TODO: Connect to Supabase
    return { totalWorkouts: 0, totalMinutes: 0, avgMood: 0 };
}
