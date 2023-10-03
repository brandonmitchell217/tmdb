import React from "react";
import MovieHeader from "../_components/MovieHeader";
import Credits from "../_components/Credits";

export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="space-y-6">
      <MovieHeader id={id} />
      <Credits id={id} />
    </main>
  );
}
