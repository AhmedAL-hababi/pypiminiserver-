export type NodeKind = "central" | "secondary" | "terminal";
export interface GraphNode {
  id: string; kind: NodeKind; label: string; sublabel?: string; value?: number;
  icon?: string; flag?: string; parentId?: string; lawId?: string;
}
export interface GraphEdge { id: string; source: string; target: string }
export interface Point { x: number; y: number }