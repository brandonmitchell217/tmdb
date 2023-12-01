import Link from "next/link";
import React from "react";

export default function NavMenu() {
  return (
    <ul className="flex text-center md:text-left flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0 md:items-center font-medium">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/movies">Movies</Link>
      </li>
      <li>
        <Link href="/tvShows">TV Shows</Link>
      </li>
      <li>
        <Link href="/people">People</Link>
      </li>
    </ul>
  );
}
