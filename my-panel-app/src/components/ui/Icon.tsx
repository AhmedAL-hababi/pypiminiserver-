import { Radar, Compass, FileText, Users, List, Plus, Minus, Share2, Maximize2, Search, ChevronDown, ChevronRight, ShieldPlus, Sparkles, ArrowUp, Pencil, Network, Bot, Building2, Scale, ArrowDown, ConciergeBell, MessageSquare, type LucideIcon } from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  radar: Radar, compass: Compass, file: FileText, users: Users, list: List, plus: Plus, minus: Minus,
  share: Share2, maximize: Maximize2, search: Search, chevron: ChevronDown, "chevron-right": ChevronRight,
  shield: ShieldPlus, sparkles: Sparkles, send: ArrowUp, pen: Pencil, network: Network, bot: Bot,
  building: Building2, scale: Scale, "trend-down": ArrowDown, "trend-up": ArrowUp,
  service: ConciergeBell, message: MessageSquare,
};

export function Icon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  const C = ICONS[name] ?? FileText;
  return <C size={size} className={className} aria-hidden />;
}