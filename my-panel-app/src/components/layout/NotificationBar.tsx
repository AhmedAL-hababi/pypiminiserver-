export function NotificationBar({ text }: { text: string }) {
  return <div className="border-y border-border bg-surface-elevated/70 px-4 py-1.5 text-xs text-text-muted">{text}</div>;
}