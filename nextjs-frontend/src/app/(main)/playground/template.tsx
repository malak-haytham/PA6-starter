import type { ReactNode } from "react";
import { Counter } from "../../_components/counter";

export default function PlaygroundTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="stack">
      <Counter label="Template counter" />
      {children}
    </div>
  );
}
