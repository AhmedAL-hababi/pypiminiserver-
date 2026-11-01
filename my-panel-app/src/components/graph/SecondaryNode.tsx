import { GraphNode, Point } from "../../types/node";
import { Icon } from "../ui/Icon";
import { formatNumber } from "../../utils/formatNumber";

interface SecondaryNodeProps { node: GraphNode; pos: Point; selected: boolean; onSelect: (id: string) => void }
export function SecondaryNode({ node, pos, selected, onSelect }: SecondaryNodeProps) {
  return (
    <button type="button" onClick={() => onSelect(node.id)} aria-pressed={selected}
      className={`absolute flex w-[124px] -translate-x-1/2 -translate-y-1/2 flex-col gap-0.5 rounded-lg border bg-surface px-3 py-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-accent-purple
      ${selected ? "border-accent-gold shadow-[0_0_18px_rgba(232,194,122,.25)]" : "border-border hover:border-text-muted"}`}
      style={{ left: pos.x, top: pos.y }}>
      <Icon name={node.icon ?? "file"} size={14} className="text-text-muted" />
      <span className="text-xl font-semibold">{formatNumber(node.value ?? 0)}</span>
      <span className={`text-xs ${selected ? "text-text-primary" : "text-text-muted"}`}>{node.label}</span>
    </button>
  );
}