"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteTodoButton({ id }: { id: number }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);

  async function removeTodo() {
    setDeleting(true);
    setError("");
    try {
      const response = await fetch(`/api/todos/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const result = await response.json();
        setError(typeof result.message === "string" ? result.message : "Could not delete todo");
        return;
      }
      router.push("/todos");
      router.refresh();
    } catch {
      setError("Todo backend is unavailable");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="stack compact">
      <button className="button buttonDanger" disabled={deleting} onClick={removeTodo} type="button">
        {deleting ? "Deleting…" : "Delete todo"}
      </button>
      {error ? <p className="formError" role="alert">{error}</p> : null}
    </div>
  );
}
