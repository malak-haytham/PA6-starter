import { getTodos } from "../../../_lib/todos";

export const dynamic = "force-dynamic";

export default async function RecentSlot() {
  const todos = await getTodos();
  const recent = todos.slice(-3);

  return (
    <ul className="todoList">
      {recent.length ? (
        recent.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span className="muted">{todo.done ? "Done" : "Open"}</span>
          </li>
        ))
      ) : (
        <li className="muted">No todos yet.</li>
      )}
    </ul>
  );
}
