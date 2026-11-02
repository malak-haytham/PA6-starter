import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTodo } from "../../../_lib/todos";
import { DeleteTodoButton } from "../../../_components/delete-todo-button";

export const dynamic = "force-dynamic";

type TodoRouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: TodoRouteProps): Promise<Metadata> {
  const { id } = await params;
  const todo = await getTodo(id);
  return { title: todo?.title ?? "Todo not found" };
}

export default async function TodoDetailPage({ params }: TodoRouteProps) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo) notFound();

  return (
    <article className="stack">
      <p className="eyebrow">Todo #{todo.id}</p>
      <h1>{todo.title}</h1>
      <p><strong>Status:</strong> {todo.done ? "Done" : "Open"}</p>
      <div className="actionRow">
        <Link className="textLink" href="/todos">← Back to todos</Link>
        <DeleteTodoButton id={todo.id} />
      </div>
    </article>
  );
}