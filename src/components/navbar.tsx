"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="p-4 flex justify-end gap-4">
      {session && <span className="text-sm">Xin chào, {session.user?.name}</span>}
      {session && (
        <Link href="/api/auth/signout">
          Log out
        </Link>
      )}
    </nav>
  );
}
