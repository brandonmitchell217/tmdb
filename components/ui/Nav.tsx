"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import NavMenu from "./NavMenu";
import { FaBars } from "react-icons/fa6";

export default function Nav() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  if (session) {
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 py-8 bg-black/80">
        <div className="container flex items-center justify-between shadow-md px-4 md:px-0">
          <Link href="/" className="text-white font-bold">
            TMDB
            <span className="text-red-400 ml-1">Next</span>
          </Link>

          {/* Menu Icon/Button */}
          <button
            type="button"
            className="text-white text-2xl md:hidden relative z-50"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavMenu />

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

          {/* Mobile Menu */}
          <div
            className={`absolute -z-10 left-0 right-0 -top-[350%] bg-black/80 pt-12 pb-8 flex flex-col items-center gap-6 transition-transform ${
              showMenu ? "translate-y-[130%]" : null
            }`}
          >
            <NavMenu />

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

        <div className="hidden md:flex items-center space-x-8">
          <NavMenu />

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
