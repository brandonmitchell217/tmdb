import React from "react";
import PersonPage from "../_components/PersonPage";

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <main>
      <div className="container py-32 px-4 md:px-0">
        <PersonPage id={id} />
      </div>
    </main>
  );
}
