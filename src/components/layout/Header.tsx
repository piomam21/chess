import { LogIn } from "lucide-react";
import type { Tab } from "../../types";
type Props = { tab: Tab; onChange: (tab: Tab) => void };
export function Header({ tab, onChange }: Props) {
  const tabs: [Tab, string][] = [
    ["gra", "Graj"],
    ["turnieje", "Turnieje"],
    ["ranking", "Ranking"],
    ["historia", "Historia"],
  ];
  return (
    <header>
      <div className="brand">
        <span>♞</span>
        <b>ChessHub</b>
      </div>
      <nav>
        {tabs.map(([key, label]) => (
          <button
            key={key}
            className={tab === key ? "active" : ""}
            onClick={() => onChange(key)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="user">
        <span className="dot" />
        Piotr <b>1542</b>
        <button className="icon" aria-label="Wyloguj">
          <LogIn size={18} />
        </button>
      </div>
    </header>
  );
}
