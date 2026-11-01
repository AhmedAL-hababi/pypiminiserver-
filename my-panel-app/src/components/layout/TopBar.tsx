import { Icon } from "../ui/Icon";
import { IconButton } from "../ui/IconButton";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";

interface TopBarProps {
  brand: { title: string; subtitle: string };
  tools: { id: string; icon: string; label: string }[];
  onTool: (id: string) => void; newLabel: string; userName: string;
}
export function TopBar({ brand, tools, onTool, newLabel, userName }: TopBarProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-accent-purple"><Icon name="radar" /></span>
        <div className="leading-tight">
          <div className="text-sm font-bold">{brand.title}</div>
          <div className="text-xs text-text-muted">{brand.subtitle}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {tools.map((t) => <IconButton key={t.id} icon={t.icon} label={t.label} onClick={() => onTool(t.id)} />)}
      </div>
      <div className="flex items-center gap-2">
        <Button>{newLabel}</Button>
        <IconButton icon="search" label="Search" variant="ghost" />
        <IconButton icon="chevron" label="More" variant="ghost" />
        <Avatar name={userName} />
      </div>
    </header>
  );
}