const rows: [string, number][] = [
  ["Bank of New York", 18], ["Emirates NBD", 3], ["Federal Law No. 42", 24], ["Abu Dhabi Commercial Bank", 12],
  ["Dubai Islamic Bank", 7], ["Mashreq Bank", 9], ["First Abu Dhabi Bank", 15], ["Ministry of Justice", 21],
  ["Ministry of Health", 5], ["Dubai Courts", 11], ["Abu Dhabi Judicial Dept", 6], ["Central Bank of UAE", 19],
  ["Federal Authority for Identity", 4], ["Emirates Post", 2], ["Etisalat", 8], ["du Telecom", 10],
  ["Dubai Health Authority", 14], ["SEHA", 13], ["Emirates Airline", 1], ["Dubai Municipality", 16],
];
import { Entity } from "../types/entity";

export const entities: Entity[] = rows.map(([name, count], i) => ({
  id: `entity-${i}`, name, count, flag: "🇦🇪", parentId: "fed-law",
}));