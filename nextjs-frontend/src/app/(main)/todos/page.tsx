import Link from "next/link";
import { getTodos } from "../../_lib/todos";

export const dynamic = "force-dynamic";

export default async function TodosPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const [{ status }, todos] = await Promise.all([searchParams, getTodos()]);
  const visibleTodos = status === "done"
    ? todos.filter((todo) => todo.done)
    : status === "open"
      ? todos.filter((todo) => !todo.done)
      : todos;

  return (
    <div className="stack">
      <header className="pageHeader">
        <div><p className="eyebrow">Your list</p><h1>Todos</h1></div>
        <Link className="button" href="/todos/new">New todo</Link>
      </header>
      <nav aria-label="Filter todos" className="filterLinks">
        <Link aria-current={!status ? "page" : undefined} href="/todos">All</Link>
        <Link aria-current={status === "open" ? "page" : undefined} href="/todos?status=open">Open</Link>
        <Link aria-current={status === "done" ? "page" : undefined} href="/todos?status=done">Done</Link>
      </nav>
      {visibleTodos.length ? (
        <ul className="todoList">
          {visibleTodos.map((todo) => (
            <li key={todo.id}>
              <Link className="todoLink" href={`/todos/${todo.id}`}>
                <span className={`statusMark ${todo.done ? "isDone" : ""}`} aria-hidden="true">{todo.done ? "✓" : ""}</span>
                <span>{todo.title}</span>
                <span className="muted">{todo.done ? "Done" : "Open"}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : <p className="emptyState">No todos match this filter.</p>}
    </div>
  );
}