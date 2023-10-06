import React from "react";
import TvHeader from "../_components/TvHeader";
import AggCredits from "../_components/AggCredits";

export default function Index({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="pt-16 space-y-6">
      <TvHeader id={id} />
      <AggCredits id={id} />
    </main>
  );
}
