import Link from "next/link";
import { HomeStats } from "../_components/home-stats";

const pages = [
  ["Todo list", "/todos"],
  ["Create a todo", "/todos/new"],
  ["Catch-all route demo", "/todos/5/edit"],
  ["Help breadcrumbs", "/help/todos/create"],
  ["Archive years", "/archive/2025"],
  ["Playground layout and template", "/playground/a"],
  ["Dashboard", "/dashboard"],
  ["Login", "/login"],
] as const;

export default function HomePage() {
  return (
    <div className="stack">
      <section className="intro">
        <p className="eyebrow">Exercise 6</p>
        <h1>Todo App</h1>
        <p>A small routing lab, backed by your Todo API.</p>
      </section>
      <section>
        <h2>Overview</h2>
        <HomeStats />
      </section>
      <section>
        <h2>Pages</h2>
        <ul className="linkList">
          {pages.map(([label, href]) => <li key={href}><Link href={href}>{label} <span aria-hidden="true">↗</span></Link></li>)}
        </ul>
      </section>
    </div>
  );
}
