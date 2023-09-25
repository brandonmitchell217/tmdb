"use client";
import React from "react";
import { useGetPopularPeopleQuery } from "../GlobalRedux/api/personSlice";

export default function PeoplePage() {
  const { data, error, isLoading } = useGetPopularPeopleQuery("");

  console.log(data);
  return (
    <div>
      <h1>jdfsf</h1>
    </div>
  );
}
