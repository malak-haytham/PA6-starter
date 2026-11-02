"use client";

import { useEffect, useState } from "react";

type Stats = { total: number; done: number; open: number };

export function HomeStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/stats", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Stats unavailable");
        return response.json() as Promise<Stats>;
      })
      .then(setStats)
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  return (
    <section aria-live="polite" className="statsRow">
      {failed ? <p>Stats are unavailable. Check that the backend is running.</p> : null}
      {!failed && !stats ? <p>Loading stats…</p> : null}
      {stats ? (
        <>
          <div><strong>{stats.total}</strong><span>Total</span></div>
          <div><strong>{stats.done}</strong><span>Done</span></div>
          <div><strong>{stats.open}</strong><span>Open</span></div>
        </>
      ) : null}
    </section>
  );
}
