import { useState } from "react";
import { Icon } from "../ui/Icon";
import { IconButton } from "../ui/IconButton";

interface ChatBarProps { placeholder: string; agentLabel: string; agentCount: number; analysisLabel: string; onSend?: (t: string) => void }
export function ChatBar({ placeholder, agentLabel, agentCount, analysisLabel, onSend }: ChatBarProps) {
  const [text, setText] = useState("");
  const send = () => { if (text.trim()) { onSend?.(text.trim()); setText(""); } };
  return (
    <div className="mt-auto flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3 py-2">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={placeholder} aria-label={placeholder}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-text-muted" />
        <IconButton icon="send" label="Send" variant="accent" size="sm" onClick={send} />
      </div>
      <div className="flex items-center gap-3 text-xs text-text-muted">
        <span className="flex items-center gap-1"><Icon name="bot" size={14} />{agentLabel}
          <span className="rounded bg-surface-elevated px-1.5">{agentCount}</span></span>
        <Icon name="pen" size={14} />
        <span className="ml-auto flex items-center gap-1 text-accent-purple"><Icon name="network" size={14} />{analysisLabel}</span>
      </div>
    </div>
  );
}