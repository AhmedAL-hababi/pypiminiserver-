import { Icon } from "./Icon";

interface IconButtonProps { icon: string; label: string; variant?: "ghost" | "solid" | "accent"; size?: "sm" | "md"; onClick?: () => void }
const V = {
  ghost: "text-text-muted hover:text-text-primary hover:bg-surface-elevated",
  solid: "bg-surface border border-border text-text-primary hover:bg-surface-elevated",
  accent: "bg-accent-purple text-white hover:opacity-90",
};
export function IconButton({ icon, label, variant = "solid", size = "md", onClick }: IconButtonProps) {
  const s = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <button type="button" title={label} aria-label={label} onClick={onClick}
      className={`grid place-items-center rounded-md transition-colors ${s} ${V[variant]}`}>
      <Icon name={icon} size={size === "sm" ? 14 : 16} />
    </button>
  );
}