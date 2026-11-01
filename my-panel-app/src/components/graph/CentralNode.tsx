import { GraphNode, Point } from "../../types/node";
import { Icon } from "../ui/Icon";

export function CentralNode({ node, pos }: { node: GraphNode; pos: Point }) {
  return (
    <div className="absolute flex w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center" style={{ left: pos.x, top: pos.y }}>
      <div className="text-sm font-medium">{node.label}</div>
      <div className="grid h-[88px] w-[88px] place-items-center rounded-full border border-accent-purple/60 bg-accent-purple/20 text-accent-purple shadow-[0_0_40px_var(--color-accent-purple)]">
        <Icon name={node.icon ?? "compass"} size={32} />
      </div>
      {node.sublabel && <div className="flex items-center gap-1 text-xs text-text-muted"><Icon name="radar" size={12} />{node.sublabel}</div>}
    </div>
  );
}