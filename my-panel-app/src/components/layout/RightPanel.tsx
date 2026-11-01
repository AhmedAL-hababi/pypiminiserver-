import { type ReactNode } from "react";
import { type Law } from "../../types/law";
import { type Stat } from "../../types/stat";
import { Panel } from "../ui/Panel";
import { Card } from "../ui/Card";
import { Icon } from "../ui/Icon";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { StatCard } from "../ui/StatCard";

interface RightPanelProps {
  law: Law; stats: Stat[]; children?: ReactNode;
  text: { explore: string; sentiment: string; analysis: string };
}
export function RightPanel({ law, stats, text, children }: RightPanelProps) {
  const s = law.sentiment, max = Math.max(...s.bars);
  return (
    <Panel className="w-full lg:w-[340px] xl:w-[380px] lg:overflow-y-auto">
      <div>
        <div className="mb-1 flex items-center gap-1.5 text-xs text-text-muted"><Icon name={law.sectorIcon} size={14} />{law.sector}</div>
        <h2 className="text-lg font-bold leading-snug">{law.title}</h2>
        <p className="text-sm text-text-muted">{law.subtitle}</p>
      </div>
      <Card className="flex flex-wrap items-center gap-2 p-3">
        <Badge color={law.statusTone}>{law.status}</Badge>
        <span className="flex-1 text-xs text-text-muted">{law.updatedText}</span>
        <Button className="text-xs">{text.explore} <Icon name="chevron-right" size={12} className="inline" /></Button>
      </Card>
      <Card className="p-3">
        <div className="flex items-center gap-2 text-sm">{text.sentiment}<Badge>{s.label}</Badge></div>
        <div className="mt-2 flex items-end justify-between">
          <div className="flex items-center gap-1 text-5xl font-bold text-pink">
            {s.rate}%<Icon name={`trend-${s.trend}`} size={18} className="text-danger" />
          </div>
          <div className="flex h-14 items-end gap-2">
            {s.bars.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-[10px] text-text-muted">
                <div className="w-4 rounded-sm bg-pink/50" style={{ height: `${Math.max(6, (b / max) * 40)}px` }} />{b}%
              </div>
            ))}
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((st) => <StatCard key={st.id} {...st} />)}
      </div>
      <Card className="p-3">
        <div className="mb-1 flex items-center gap-1.5 text-sm"><Icon name="sparkles" size={14} className="text-accent-purple" />{text.analysis}</div>
        <div className="text-sm font-bold">{law.analysis.heading}</div>
        <p className="text-xs text-text-muted">{law.analysis.text}</p>
      </Card>
      {children}
    </Panel>
  );
}