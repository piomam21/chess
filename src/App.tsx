import { useState } from "react";
import { Header } from "./components/layout/Header";
import { GamePage } from "./pages/GamePage";
import { TournamentsPage } from "./pages/TournamentsPage";
import { RankingPage } from "./pages/RankingPage";
import { HistoryPage } from "./pages/HistoryPage";
import type { Tab } from "./types";
export default function App() {
  const [tab, setTab] = useState<Tab>("gra");
  return (
    <div className="app">
      <Header tab={tab} onChange={setTab} />
      <main>
        {tab === "gra" ? (
          <GamePage />
        ) : tab === "turnieje" ? (
          <TournamentsPage />
        ) : tab === "ranking" ? (
          <RankingPage />
        ) : (
          <HistoryPage />
        )}
      </main>
    </div>
  );
}
