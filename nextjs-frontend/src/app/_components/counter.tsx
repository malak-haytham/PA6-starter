"use client";

import { useState } from "react";

export function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span>{label}: <strong>{count}</strong></span>
      <button aria-label={`Increment ${label}`} onClick={() => setCount((value) => value + 1)} type="button">+</button>
    </div>
  );
}
