/**
 * Mission Control OS — Knowledge Graph Service
 */

import type { KnowledgeNode, Relationship, NodeType, RelationshipType } from '@/lib/schema';

export async function getNodes(_userId: string): Promise<KnowledgeNode[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function getNodeById(_nodeId: string): Promise<KnowledgeNode | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function createNode(
    _userId: string,
    _data: {
        title: string;
        content?: string;
        type: NodeType;
        tags?: string[];
    },
): Promise<KnowledgeNode | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function createRelationship(
    _userId: string,
    _data: {
        sourceNodeId: string;
        targetNodeId: string;
        type: RelationshipType;
        weight?: number;
    },
): Promise<Relationship | null> {
    // TODO: Connect to Supabase
    return null;
}

export async function getRelatedNodes(
    _nodeId: string,
): Promise<{ node: KnowledgeNode; relationship: Relationship }[]> {
    // TODO: Connect to Supabase
    return [];
}

export async function searchNodes(
    _userId: string,
    _query: string,
): Promise<KnowledgeNode[]> {
    // TODO: Connect to Supabase
    return [];
}
