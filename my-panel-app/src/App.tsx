import { useEffect, useState } from "react";
import { TopBar } from "./components/layout/TopBar";
import { NotificationBar } from "./components/layout/NotificationBar";
import { RightPanel } from "./components/layout/RightPanel";
import { ChatBar } from "./components/layout/ChatBar";
import { NetworkGraph } from "./components/graph/NetworkGraph";
import { fetchGraph, fetchLaw, fetchStats } from "./services/api";
import { GraphNode, GraphEdge } from "./types/node";
import { Law } from "./types/law";
import { Stat } from "./types/stat";
import { useSelection } from "./hooks/useSelection";
import { useZoom } from "./hooks/useZoom";
import { DEFAULT_SELECTED_ID, UI_TEXT, TOOLBAR } from "./config/constants";

export default function App() {
  const [graph, setGraph] = useState<{ nodes: GraphNode[]; edges: GraphEdge[] } | null>(null);
  const [law, setLaw] = useState<Law | null>(null);
  const [stats, setStats] = useState<Stat[]>([]);
  const { selectedId, select } = useSelection(DEFAULT_SELECTED_ID);
  const { scale, zoomIn, zoomOut } = useZoom();

  useEffect(() => { fetchGraph().then(setGraph); }, []);
  
  useEffect(() => {
    const lawId = graph?.nodes.find((n) => n.id === selectedId)?.lawId;
    fetchLaw(lawId).then(setLaw);
    fetchStats(lawId).then(setStats);
  }, [graph, selectedId]);

  const onTool = (id: string) => {
    if (id === "zoom-in") zoomIn();
    if (id === "zoom-out") zoomOut();
    if (id === "fullscreen") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  };

  return (
    <div className="flex min-h-full flex-col lg:h-full">
      <TopBar brand={UI_TEXT.brand} tools={TOOLBAR} onTool={onTool} newLabel={UI_TEXT.newSimulation} userName={UI_TEXT.user} />
      <NotificationBar text={UI_TEXT.notification} />
      <main className="flex min-h-0 flex-1 flex-col gap-4 p-4 lg:flex-row">
        <section className="flex h-[520px] min-w-0 flex-1 lg:h-auto">
          {graph
            ? <NetworkGraph nodes={graph.nodes} edges={graph.edges} selectedId={selectedId} onSelect={select} scale={scale} />
            : <p className="m-auto text-sm text-text-muted">{UI_TEXT.loading}</p>}
        </section>
        {law && (
          <RightPanel law={law} stats={stats}
            text={{ explore: UI_TEXT.exploreDetails, sentiment: UI_TEXT.sentimentTitle, analysis: UI_TEXT.analysisTitle }}>
            <ChatBar placeholder={UI_TEXT.chatPlaceholder} agentLabel={UI_TEXT.agentLabel}
              agentCount={UI_TEXT.agentCount} analysisLabel={UI_TEXT.analysisTitle} />
          </RightPanel>
        )}
      </main>
    </div>
  );
}