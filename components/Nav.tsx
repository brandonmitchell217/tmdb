import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="py-8">
      <div className="container flex items-center justify-between shadow-md">
        <Link href="/" className="text-white font-bold">
          TMDB
          <span className="text-red-400 ml-1">Next</span>
        </Link>
        <ul className="flex gap-6 items-center font-medium">
          <li>Home</li>
          <li>Movies</li>
          <li>TV</li>
          <li>People</li>
        </ul>
      </div>
    </nav>
  );
}
