"use server";

import Link from "next/link";
import { JSX } from "react";

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen">
      <main>
        <Link href="/algorithms/binary-search">Binary Search</Link>
      </main>
    </div>
  );
}
