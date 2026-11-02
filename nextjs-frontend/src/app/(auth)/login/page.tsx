"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    document.cookie = "demo-auth=1; path=/";
    router.push("/dashboard");
  }

  return (
    <section className="stack narrow">
      <p className="eyebrow">Welcome</p>
      <h1>Login</h1>
      <p>This demo sets a cookie to unlock the dashboard.</p>
      <button className="button" onClick={handleLogin}>Login</button>
    </section>
  );
}