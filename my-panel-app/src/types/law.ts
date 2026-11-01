export type Tone = "success" | "danger" | "neutral" | "purple";
export interface Law {
  id: string; sector: string; sectorIcon: string; title: string; subtitle: string;
  status: string; statusTone: Tone; updatedText: string;
  sentiment: { rate: number; label: string; trend: "up" | "down"; bars: number[] };
  analysis: { heading: string; text: string };
}