import React from "react";
import MoviePage from "../_components/MoviePage";

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <MoviePage id={id} />
    </>
  );
}
