import React from "react";

export default function Search() {
  return (
    <div className="bg-black/60 rounded-xl p-8 flex flex-col justify-center items-center gap-4 absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl text-white capitalize max-w-[70%] m-auto text-center">
        Browse for movies, shows or people
      </h1>

      <form action="/search" className="w-full">
        <input
          type="text"
          name="query"
          placeholder="Search for a movie, tv show, person..."
          className="w-full rounded-xl p-4 mt-4 bg-white text-black/80"
        />
      </form>
    </div>
  );
}
