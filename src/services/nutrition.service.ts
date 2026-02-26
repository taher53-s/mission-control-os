/**
 * Mission Control OS — Nutrition Service
 */

import type { NutritionLog, MealType, NutritionItem } from '@/lib/schema';

export async function getNutritionLogs(
    _userId: string,
    _date?: string,
): Promise<NutritionLog[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function createNutritionLog(
    _userId: string,
    _data: {
        date: string;
        mealType: MealType;
        items: NutritionItem[];
        notes?: string;
    },
): Promise<NutritionLog | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function getDailyNutritionSummary(
    _userId: string,
    _date: string,
): Promise<{
    totalCalories: number;
    totalProtein: number;
    totalCarbs: number;
    totalFat: number;
    meals: number;
}> {
    // TODO: Connect to Supabase
    return { totalCalories: 0, totalProtein: 0, totalCarbs: 0, totalFat: 0, meals: 0 };
}
