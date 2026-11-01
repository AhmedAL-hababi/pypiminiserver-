import { useMemo } from "react";
import { GraphNode, GraphEdge } from "../../types/node";
import { useGraphLayout } from "../../hooks/useGraphLayout";
import { edgePath } from "../../utils/calculateLayout";
import { CentralNode } from "./CentralNode";
import { SecondaryNode } from "./SecondaryNode";
import { TerminalList } from "./TerminalList";

interface NetworkGraphProps { nodes: GraphNode[]; edges: GraphEdge[]; selectedId: string | null; onSelect: (id: string) => void; scale: number }
export function NetworkGraph({ nodes, edges, selectedId, onSelect, scale }: NetworkGraphProps) {
  const { ref, width, layout } = useGraphLayout(nodes);
  const map = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);
  const { positions, height } = layout;
  const kind = (k: GraphNode["kind"]) => nodes.filter((n) => n.kind === k);

  return (
    <div ref={ref} className="relative min-h-0 flex-1 overflow-auto">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(139,124,255,.12),transparent_55%)]" />
      <div style={{ width: width * scale, height: height * scale }}>
        <div className="relative origin-top-left" style={{ width, height, transform: `scale(${scale})` }}>
          <svg width={width} height={height} className="absolute inset-0" fill="none">
            {edges.map((e) => {
              const hot = e.source === selectedId || e.target === selectedId;
              return <path key={e.id} d={edgePath(e, map, positions)}
                stroke={hot ? "var(--color-accent-gold)" : "var(--color-border)"}
                strokeWidth={hot ? 1 : 1.2} opacity={hot ? 0.9 : 0.8} className={hot ? "edge-gold" : ""} />;
            })}
          </svg>
          {kind("central").map((n) => <CentralNode key={n.id} node={n} pos={positions[n.id]} />)}
          {kind("secondary").map((n) => (
            <SecondaryNode key={n.id} node={n} pos={positions[n.id]} selected={n.id === selectedId} onSelect={onSelect} />
          ))}
          <TerminalList nodes={kind("terminal")} positions={positions} selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
}