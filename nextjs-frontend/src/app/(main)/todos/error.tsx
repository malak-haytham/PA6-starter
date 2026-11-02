"use client";

export default function TodosError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="stack" role="alert">
      <h1>Could not load todos</h1>
      <p>Check that the backend is running, then try again.</p>
      <button className="button" onClick={reset} type="button">Try again</button>
    </section>
  );
}
