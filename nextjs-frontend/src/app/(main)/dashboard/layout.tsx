import { Suspense } from "react";
import type { ReactNode } from "react";

export default function DashboardLayout({ children, stats, recent }: { children: ReactNode; stats: ReactNode; recent: ReactNode }) {
  return (
    <div className="stack">
      <header><p className="eyebrow">Workspace</p><h1>Dashboard</h1></header>
      <div className="dashboardGrid">
        <section className="dashboardPanel">
          <h2>Stats</h2>
          <Suspense fallback={<p className="muted">Loading stats…</p>}>{stats}</Suspense>
        </section>
        <section className="dashboardPanel">
          <h2>Recent todos</h2>
          <Suspense fallback={<p className="muted">Loading recent…</p>}>{recent}</Suspense>
        </section>
      </div>
      {children}
    </div>
  );
}
