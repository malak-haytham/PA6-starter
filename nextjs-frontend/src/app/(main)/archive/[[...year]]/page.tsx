export const dynamic = "force-dynamic";

export default async function ArchivePage({ params }: { params: Promise<{ year?: string[] }> }) {
  const { year } = await params;
  return (
    <section className="stack">
      <p className="eyebrow">Archive</p>
      <h1>{year?.length ? year.join(" / ") : "All years"}</h1>
      <p>Optional catch-all segment: <code>{year ? JSON.stringify(year) : "no segment"}</code></p>
    </section>
  );
}
