import TrendingCarousel from "@/components/Carousel/Home/TrendingCarousel";
import TestFetch from "@/components/TestFetch";

const trendingFilters = [
  { type: "movie", time: "day" },
  { type: "movie", time: "week" },
];

export default function Home() {
  return (
    <main className="py-20">
      <div className="text-white space-y-20">
        <h1>TMDB</h1>
        {/* <TestFetch /> */}
        <TrendingCarousel
          title="Trending"
          filters={trendingFilters}
          id="trending_movies"
        />
      </div>
    </main>
  );
}
