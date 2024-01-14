import { FaChevronCircleRight as ChevronRightCircle } from "react-icons/fa";
import { FaChevronCircleLeft as ChevronLeftCircle } from "react-icons/fa";
import React from "react";
import { FilterProps } from "@/lib/types";

export default function CarouselHeader({
  title,
  filters,
  setIsFilter,
  id,
}: {
  title: string;
  filters?: FilterProps[] | undefined;
  setIsFilter?: any;
  id: string;
}) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-8 items-center">
        <h2 className="text-4xl capitalize">{title}</h2>

        {filters || setIsFilter ? (
          <div className="flex gap-4 items-center">
            <button
              className="bg-green-600 text-white px-8 py-1 rounded-3xl capitalize"
              onClick={() => setIsFilter(filters && filters[0].label)}
            >
              {filters && filters[0].label}
            </button>
            <button
              className="bg-green-300 text-black px-8 py-1 rounded-3xl capitalize"
              onClick={() => setIsFilter(filters && filters[1].label)}
            >
              {filters && filters[1].label}
            </button>
          </div>
        ) : null}
      </div>
      <div className="hidden md:block space-x-1">
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
