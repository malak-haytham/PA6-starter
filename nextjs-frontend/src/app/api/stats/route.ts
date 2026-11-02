import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.API_URL ?? "http://localhost:3000"}/todos`, {
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not load todos" }, { status: response.status });
    const todos: { done: boolean }[] = await response.json();
    const done = todos.filter((todo) => todo.done).length;
    return NextResponse.json({ total: todos.length, done, open: todos.length - done });
  } catch {
    return NextResponse.json({ error: "Todo backend is unavailable" }, { status: 502 });
  }
}
