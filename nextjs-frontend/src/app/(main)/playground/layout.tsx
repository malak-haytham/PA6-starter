import type { ReactNode } from "react";
import { Counter } from "../../_components/counter";

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return (
    <section className="stack">
      <Counter label="Layout counter" />
      {children}
    </section>
  );
}
