export async function POST(request: Request) {
  try {
    const response = await fetch(`${process.env.API_URL ?? "http://localhost:3000"}/todos`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: await request.text(),
    });
    return Response.json(await response.json(), { status: response.status });
  } catch {
    return Response.json({ message: "Todo backend is unavailable" }, { status: 502 });
  }
}
