import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React from "react";

export default function CarouselHeader({
  title,
  filters,
  setIsFilter,
  id,
}: {
  title: string;
  filters: any;
  setIsFilter: any;
  id: any;
}) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-8 items-center">
        <h2 className="text-4xl capitalize">{title}</h2>
        <div className="flex gap-4 items-center">
          <button
            className="bg-green-600 text-white px-8 py-1 rounded-3xl capitalize"
            onClick={() => setIsFilter(filters[0].label)}
          >
            {filters[0].label}
          </button>
          <button
            className="bg-green-300 text-black px-8 py-1 rounded-3xl capitalize"
            onClick={() => setIsFilter(filters[1].label)}
          >
            {filters[1].label}
          </button>
        </div>
      </div>
      <div className="space-x-1">
        <button id={`prev-${id}`} className="btn-icon btn-secondary">
          <ChevronLeftCircle className="text-2xl" />
        </button>
        <button id={`next-${id}`} className="btn-icon btn-secondary">
          <ChevronRightCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
