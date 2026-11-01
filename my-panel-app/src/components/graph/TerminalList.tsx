import { GraphNode, Point } from "../../types/node";

interface TerminalListProps { nodes: GraphNode[]; positions: Record<string, Point>; selectedId: string | null }
export function TerminalList({ nodes, positions, selectedId }: TerminalListProps) {
  return (
    <>
      {nodes.map((n) => {
        const p = positions[n.id];
        if (!p) return null;
        const on = n.parentId === selectedId;
        return (
          <div key={n.id} className={`absolute flex -translate-y-1/2 items-center gap-2 whitespace-nowrap text-xs transition-opacity ${on ? "opacity-100" : "opacity-40"}`}
            style={{ left: p.x, top: p.y }}>
            <span aria-hidden>{n.flag}</span>
            <span className="text-text-primary">{n.label}</span>
            <span className="text-text-muted">{n.value}</span>
          </div>
        );
      })}
    </>
  );
}