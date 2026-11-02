export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    const response = await fetch(`${process.env.API_URL ?? "http://localhost:3000"}/todos/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    const body = await response.json();
    return Response.json(body, { status: response.status });
  } catch {
    return Response.json({ message: "Todo backend is unavailable" }, { status: 502 });
  }
}
