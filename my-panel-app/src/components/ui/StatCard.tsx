import { Card } from "./Card";
import { Icon } from "./Icon";
import { formatNumber } from "../../utils/formatNumber";

export function StatCard({ icon, value, label, trend }: { icon: string; value: number; label: string; trend?: "up" | "down" }) {
  return (
    <Card className="flex flex-col gap-1 p-3">
      <Icon name={icon} className="text-text-muted" />
      <div className="flex items-center gap-1 text-2xl font-semibold">
        {formatNumber(value)}
        {trend && <Icon name={`trend-${trend}`} size={14} className={trend === "up" ? "text-success" : "text-danger"} />}
      </div>
      <div className="text-xs leading-snug text-text-muted">{label}</div>
    </Card>
  );
}