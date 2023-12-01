"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 py-8 bg-black/80">
        <div className="container flex items-center justify-between shadow-md px-4 md:px-0">
          <Link href="/" className="text-white font-bold">
            TMDB
            <span className="text-red-400 ml-1">Next</span>
          </Link>

          <div className="flex items-center space-x-8">
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

            <div className="flex items-center gap-2">
              {session.user?.image ? (
                <img
                  src={session.user?.image}
                  alt={`${session.user?.name} profile image`}
                  className="w-7 h-7 rounded-full"
                />
              ) : (
                <div className="w-7 h-7 bg-slate-400 rounded-full"></div>
              )}

              <button
                className="px-4 py-1 bg-red-400 text-black rounded-md"
                type="button"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="fixed z-50 top-0 left-0 right-0 py-8 bg-black/80">
      <div className="container flex items-center justify-between shadow-md px-4 md:px-0">
        <Link href="/" className="text-white font-bold">
          TMDB
          <span className="text-red-400 ml-1">Next</span>
        </Link>

        <div className="flex items-center space-x-8">
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

          <div>
            <button
              className="px-4 py-1 bg-red-400 text-black rounded-md"
              type="button"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
