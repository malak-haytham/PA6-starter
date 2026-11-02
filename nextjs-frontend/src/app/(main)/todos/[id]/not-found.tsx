import Link from "next/link";

export default function TodoNotFound() {
  return (
    <section className="stack">
      <p className="eyebrow">404</p>
      <h1>Todo not found</h1>
      <p>That todo may have been deleted or never existed.</p>
      <Link className="textLink" href="/todos">Back to todos</Link>
    </section>
  );
}
