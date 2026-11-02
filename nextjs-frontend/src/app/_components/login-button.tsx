"use client";

export function LoginButton() {
  function logIn() {
    document.cookie = "demo-auth=1; path=/; SameSite=Lax";
    window.location.assign("/dashboard");
  }

  return <button className="button" onClick={logIn} type="button">Continue to dashboard</button>;
}
