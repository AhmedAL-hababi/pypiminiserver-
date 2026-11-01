import { type ButtonHTMLAttributes } from "react";

export function Button({ className = "", ...p }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...p}
    className={`rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text-primary transition-colors hover:bg-surface-elevated ${className}`} />;
}