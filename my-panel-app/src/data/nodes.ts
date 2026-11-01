import { GraphNode } from "../types/node";
import { entities } from "./entities";

export const nodes: GraphNode[] = [
  { id: "central", kind: "central", label: "Federal Decree-Law No. 45 of 2021", sublabel: "UAE AI", icon: "compass" },
  { id: "n-18", kind: "secondary", parentId: "central", value: 18, label: "Cabinet Decision", icon: "file" },
  { id: "n-3", kind: "secondary", parentId: "central", value: 3, label: "Ministerial Decree", icon: "file" },
  { id: "fed-law", kind: "secondary", parentId: "central", value: 24, label: "Federal Law", icon: "file", lawId: "law-42" },
  { id: "n-32", kind: "secondary", parentId: "central", value: 32, label: "Local Order", icon: "file" },
  { id: "n-12", kind: "secondary", parentId: "central", value: 12, label: "Guideline", icon: "file" },
  ...entities.map((e): GraphNode => ({
    id: e.id, kind: "terminal", label: e.name, value: e.count, flag: e.flag, parentId: e.parentId,
  })),
];