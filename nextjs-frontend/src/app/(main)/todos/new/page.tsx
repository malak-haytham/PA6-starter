import { TodoForm } from "../../../_components/todo-form";

export default function NewTodoPage() {
  return (
    <section className="stack narrow">
      <p className="eyebrow">Add to your list</p>
      <h1>New todo</h1>
      <TodoForm />
    </section>
  );
}