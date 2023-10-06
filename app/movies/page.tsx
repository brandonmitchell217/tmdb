import React from "react";
import Movies from "./_components/Movies";

export default function MoviesPage() {
  return (
    <main>
      <section className="container py-32 px-4 md:px-0">
        <Movies />
      </section>
    </main>
  );
}
