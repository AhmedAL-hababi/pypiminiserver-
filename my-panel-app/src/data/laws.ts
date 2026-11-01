import { Law } from "../types/law";

export const laws: Law[] = [
  {
    id: "law-42", sector: "Healthcare", sectorIcon: "shield",
    title: "Federal Decree-Law No. (42) of 2022", subtitle: "Promulgating the Civil Procedure Code",
    status: "Active", statusTone: "success",
    updatedText: "The last updated on 18th Nov 2024 was listed on 01 Oct 2024",
    sentiment: { rate: 45, label: "Moderate", trend: "down", bars: [39, 4, 2] },
    analysis: { heading: "Propose De-regulation", text: "Multiple regulations were found to be out of date in the following domains." },
  },
];