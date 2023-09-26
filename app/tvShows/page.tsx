"use client";
import React from "react";
import { useDiscoverQuery } from "../GlobalRedux/api/tvSlice";
import Shows from "./_components/Shows";

export default function TvPage() {
  const { data, error, isLoading } = useDiscoverQuery("");

  console.log(data);
  return (
    <main>
      <div className="container px-4 md:px-0">
        <Shows />
      </div>
    </main>
  );
}
