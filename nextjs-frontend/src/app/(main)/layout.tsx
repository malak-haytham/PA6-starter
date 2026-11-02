import { Suspense } from "react";
import type { ReactNode } from "react";
import { Navbar } from "../_components/navbar";

export default function MainLayout({
  children,
  modal,
}: { children: ReactNode; modal: ReactNode }) {
  return (
    <>
      <Suspense fallback={<nav className="nav"><span className="brand">Todo App</span></nav>}>
        <Navbar />
      </Suspense>
      <main className="container">{children}</main>
      {modal}
    </>
  );
}