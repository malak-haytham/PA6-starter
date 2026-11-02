export const dynamic = "force-dynamic";

export default async function TodoCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <section className="stack">
      <p className="eyebrow">Route priority</p>
      <h1>Todo catch-all route</h1>
      <p>Slug: <code>{JSON.stringify(slug)}</code></p>
      <p><code>/todos/new</code> and <code>/todos/5</code> use their more specific routes; extra segments such as <code>/todos/5/edit</code> arrive here.</p>
    </section>
  );
}