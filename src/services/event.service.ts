/**
 * Mission Control OS — Event Service
 * Core event logging service for the event-driven architecture
 */

import type { MCEvent, EntityType, EventMetadata } from '@/lib/schema';

/** Log an event to the event store */
export async function logEvent(
    userId: string,
    entityType: EntityType,
    entityId: string,
    action: string,
    payload: Record<string, unknown> = {},
    metadata: Partial<EventMetadata> = {},
): Promise<MCEvent> {
    // TODO: Connect to Supabase
    const event: MCEvent = {
        id: crypto.randomUUID(),
        userId,
        entityType,
        entityId,
        action,
        payload,
        metadata: {
            source: metadata.source ?? 'user',
            sessionId: metadata.sessionId ?? null,
            correlationId: metadata.correlationId ?? null,
        },
        createdAt: new Date().toISOString(),
    };

    return event;
}

/** Query events by entity */
export async function getEventsByEntity(
    _entityType: EntityType,
    _entityId: string,
): Promise<MCEvent[]> {
    // TODO: Connect to Supabase
    return [];
}

/** Query events by user within a time range */
export async function getEventsByUser(
    _userId: string,
    _from: string,
    _to: string,
): Promise<MCEvent[]> {
    // TODO: Connect to Supabase
    return [];
}
