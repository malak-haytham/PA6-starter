import Link from "next/link";

export default function PlaygroundAPage() {
  return <div className="stack"><p className="eyebrow">Playground</p><h1>Page A</h1><Link className="textLink" href="/playground/b">Go to page B →</Link></div>;
}
