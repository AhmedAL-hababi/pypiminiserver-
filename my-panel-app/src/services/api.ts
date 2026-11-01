import { GraphNode, GraphEdge } from "../types/node";
import { Law } from "../types/law";
import { Stat } from "../types/stat";

// 1. جلب الشجرة من سيرفر pypiserver
export const fetchGraph = async (): Promise<{ nodes: GraphNode[]; edges: GraphEdge[] }> => {
  try {
    const res = await fetch("http://localhost:8080/api/graph");
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    
    // تحويل البيانات من شكل الـ API إلى شكل React
    const nodes: GraphNode[] = data.nodes.map((n: any) => ({
      id: n.data.id,
      kind: n.data.type === "server" ? "central" : n.data.type === "package" ? "secondary" : "terminal",
      label: n.data.label,
      value: 1, // قيمة افتراضية لأن الـ API لا يرجع أرقام
      parentId: n.data.id === "server" ? undefined : "server",
      icon: n.data.type === "package" ? "file" : "compass",
      flag: "📦"
    }));

    const edges: GraphEdge[] = data.edges.map((e: any) => ({
      id: `${e.data.source}-${e.data.target}`,
      source: e.data.source,
      target: e.data.target
    }));

    return { nodes, edges };
  } catch (error) {
    console.error("Error fetching graph:", error);
    return { nodes: [], edges: [] };
  }
};

// 2. جلب تفاصيل الحزمة (نستخدم بيانات وهمية مؤقتاً)
export const fetchLaw = async (id?: string): Promise<Law> => {
  return {
    id: id || "pkg",
    sector: "Package",
    sectorIcon: "file",
    title: "Package Details",
    subtitle: "Hover or click to see more",
    status: "Active",
    statusTone: "success",
    updatedText: "Uploaded recently",
    sentiment: { rate: 100, label: "Healthy", trend: "up", bars: [90, 10, 0] },
    analysis: { heading: "Ready", text: "This package is ready for installation." },
  };
};

// 3. جلب الإحصائيات (بيانات وهمية)
export const fetchStats = async (_id?: string): Promise<Stat[]> => {
  return [
    { id: "s1", icon: "building", value: 1, label: "Version" },
    { id: "s2", icon: "file", value: 1, label: "Wheel File" },
  ];
};