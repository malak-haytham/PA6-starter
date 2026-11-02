import Link from "next/link";

export default function PlaygroundBPage() {
  return <div className="stack"><p className="eyebrow">Playground</p><h1>Page B</h1><Link className="textLink" href="/playground/a">← Go to page A</Link></div>;
}
