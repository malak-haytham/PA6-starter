import Link from "next/link";

export default function DashboardPage() {
  return <p>Todo activity at a glance. <Link className="textLink" href="/dashboard/settings">Settings</Link></p>;
}
