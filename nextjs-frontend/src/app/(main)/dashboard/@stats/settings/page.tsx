import Link from "next/link";
import { getTodos } from "../../../../_lib/todos";

export const dynamic = "force-dynamic";

export default async function DashboardSettingsPage() {
  const todos = await getTodos();
  const done = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <h3>Settings</h3>
      <p className="muted">This page is rendered inside the stats slot.</p>
      <hr style={{ margin: "12px 0" }} />
      <ul className="statList">
        <li><strong>{todos.length}</strong> total</li>
        <li><strong>{done}</strong> done</li>
        <li><strong>{todos.length - done}</strong> open</li>
      </ul>
      <Link className="textLink" href="/dashboard">← Back to overview</Link>
    </div>
  );
}
