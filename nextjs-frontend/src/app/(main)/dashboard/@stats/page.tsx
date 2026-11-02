import { getTodos } from "../../../_lib/todos";

export const dynamic = "force-dynamic";

export default async function StatsSlot() {
  const todos = await getTodos();
  const done = todos.filter((todo) => todo.done).length;

  return (
    <ul className="statList">
      <li><strong>{todos.length}</strong> total</li>
      <li><strong>{done}</strong> done</li>
      <li><strong>{todos.length - done}</strong> open</li>
    </ul>
  );
}
