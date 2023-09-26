import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="py-8">
      <div className="container flex items-center justify-between shadow-md px-4 md:px-0">
        <Link href="/" className="text-white font-bold">
          TMDB
          <span className="text-red-400 ml-1">Next</span>
        </Link>
        <ul className="flex gap-6 items-center font-medium">
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
      </div>
    </nav>
  );
}
