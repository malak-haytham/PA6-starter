export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const API_URL = process.env.API_URL ?? "http://localhost:3000";

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos`, { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load todos");
  return response.json();
}

export async function getTodo(id: string): Promise<Todo | null> {
  const response = await fetch(`${API_URL}/todos/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });
  if (!response.ok) return null;
  return response.json();
}
