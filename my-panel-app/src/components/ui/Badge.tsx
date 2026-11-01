import { type ReactNode } from "react";
import { type Tone } from "../../types/law";

const C: Record<Tone, string> = {
  success: "text-success", danger: "text-danger", neutral: "text-text-muted", purple: "text-accent-purple",
};
export function Badge({ color = "neutral", children }: { color?: Tone; children: ReactNode }) {
  return <span className={`rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium ${C[color]}`}>{children}</span>;
}