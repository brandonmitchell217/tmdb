"use client";
import React from "react";
import { useGetPersonQuery } from "@/app/GlobalRedux/api/personSlice";

export default function PersonPage({ id }: any) {
  const { data, error, isLoading } = useGetPersonQuery(id);

  console.log(data);
  return (
    <div>
      <h1>person page</h1>
    </div>
  );
}
