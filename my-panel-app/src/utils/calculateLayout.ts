import { GraphNode, GraphEdge, Point } from "../types/node";
import { LAYOUT } from "../config/constants";

export interface Layout { positions: Record<string, Point>; height: number }

export function calculateLayout(nodes: GraphNode[], width: number): Layout {
  const { xCentral, xSecondary, xTerminal, rowHeight, minHeight, padding } = LAYOUT;
  const by = (k: GraphNode["kind"]) => nodes.filter((n) => n.kind === k);
  const terminals = by("terminal");
  const height = Math.max(minHeight, terminals.length * rowHeight + padding * 2);
  const positions: Record<string, Point> = {};

  by("central").forEach((n, i, a) => (positions[n.id] = { x: width * xCentral, y: (height * (i + 1)) / (a.length + 1) }));
  const sec = by("secondary");
  const span = Math.min(height, minHeight);
  sec.forEach((n, i) => (positions[n.id] = { x: width * xSecondary, y: (height - span) / 2 + (span * (i + 0.5)) / sec.length }));
  terminals.forEach((n, i) => (positions[n.id] = { x: width * xTerminal, y: padding + i * rowHeight }));
  return { positions, height };
}

export function edgePath(edge: GraphEdge, nodes: Record<string, GraphNode>, pos: Record<string, Point>): string {
  const s = pos[edge.source], t = pos[edge.target];
  const sn = nodes[edge.source], tn = nodes[edge.target];
  if (!s || !t || !sn || !tn) return "";
  const sx = s.x + LAYOUT.halfWidth[sn.kind];
  const ex = t.x - (tn.kind === "terminal" ? 6 : LAYOUT.halfWidth[tn.kind]);
  const mx = (sx + ex) / 2;
  return `M ${sx} ${s.y} C ${mx} ${s.y}, ${mx} ${t.y}, ${ex} ${t.y}`;
}