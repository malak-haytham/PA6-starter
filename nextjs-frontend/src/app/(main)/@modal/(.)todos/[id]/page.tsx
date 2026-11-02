import Link from "next/link";
import { notFound } from "next/navigation";
import { getTodo } from "../../../../_lib/todos";
import { DeleteTodoButton } from "../../../../_components/delete-todo-button";

export const dynamic = "force-dynamic";

export default async function TodoModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo) notFound();

  return (
    <div className="modalBackdrop">
      <section aria-label="Todo details" aria-modal="true" className="modal" role="dialog">
        <Link aria-label="Close todo details" className="modalClose" href="/todos">×</Link>
        <p className="eyebrow">Todo #{todo.id}</p>
        <h2>{todo.title}</h2>
        <p><strong>Status:</strong> {todo.done ? "Done" : "Open"}</p>
        <DeleteTodoButton id={todo.id} />
        <Link className="textLink" href={`/todos/${todo.id}`}>Open full page</Link>
      </section>
    </div>
  );
}