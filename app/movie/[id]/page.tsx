import React from "react";
import MovieHeader from "../_components/MovieHeader";

export default function MovieIDPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <MovieHeader id={id} />
    </main>
  );
}
