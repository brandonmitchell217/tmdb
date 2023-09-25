"use client";
import React from "react";
import { useDiscoverQuery } from "../GlobalRedux/api/tvSlice";

export default function TvPage() {
  const { data, error, isLoading } = useDiscoverQuery("");

  console.log(data);
  return (
    <div>
      <h1>jdfsf</h1>
    </div>
  );
}
