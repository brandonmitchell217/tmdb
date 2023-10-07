import React from "react";
import { BiLoader } from "react-icons/bi";

export default function CardSkeleton() {
  return (
    <article className="w-[240px] h-72 xl:h-80 bg-slate-400 text-slate-700 flex justify-center items-center relative group">
      <BiLoader size={50} className="animate-spin-slow" />
    </article>
  );
}
