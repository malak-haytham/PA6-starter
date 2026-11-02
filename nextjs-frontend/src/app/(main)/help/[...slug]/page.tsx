import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HelpPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <section className="stack">
      <p className="eyebrow">Help</p>
      <h1>Help topics</h1>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link href="/help/todos/create">Help</Link>
        {slug.map((part, index) => (
          <span key={`${part}-${index}`}>
            <span aria-hidden="true"> / </span>
            {index === slug.length - 1 ? part : <Link href={`/help/${slug.slice(0, index + 1).join("/")}`}>{part}</Link>}
          </span>
        ))}
      </nav>
    </section>
  );
}
