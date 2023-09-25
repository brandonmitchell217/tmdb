import React from "react";
import TvPage from "../_components/TvPage";

export default function Index({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <TvPage id={id} />
    </div>
  );
}
