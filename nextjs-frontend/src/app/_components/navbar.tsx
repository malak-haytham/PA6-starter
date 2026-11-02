"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/todos", label: "Todos" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/help/todos/create", label: "Help" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="nav">
      <Link className="brand" href="/">Todo App</Link>
      <div className="navLinks">
        {links.map(({ href, label }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link aria-current={active ? "page" : undefined} href={href} key={href}>
              <span style={{ fontWeight: active ? 700 : 400 }}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
