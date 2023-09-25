"use client";
import React from "react";
import { useDiscoverQuery } from "../GlobalRedux/api/movieSlice";

export default function MoviesPage() {
  const { data, error, isLoading } = useDiscoverQuery("");

  console.log(data);
  return (
    <div>
      <h1>jdfsf</h1>
    </div>
  );
}
