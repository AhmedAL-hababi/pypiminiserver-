import { GraphNode, GraphEdge } from "../types/node";

export const buildGraphEdges = (nodes: GraphNode[]): GraphEdge[] =>
  nodes.filter((n) => n.parentId).map((n) => ({ id: `${n.parentId}->${n.id}`, source: n.parentId!, target: n.id }));