"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function TodoForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSaving(true);
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(typeof result.message === "string" ? result.message : "Could not create todo");
        return;
      }
      router.push("/todos");
      router.refresh();
    } catch {
      setError("Todo backend is unavailable");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo-title">Title</label>
      <input id="todo-title" name="title" onChange={(event) => setTitle(event.target.value)} value={title} />
      {error ? <p className="formError" role="alert">{error}</p> : null}
      <button className="button" disabled={saving} type="submit">{saving ? "Creating…" : "Create todo"}</button>
    </form>
  );
}
