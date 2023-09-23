import TrendingCarousel from "@/components/Carousel/Home/TrendingCarousel";
import TestFetch from "@/components/TestFetch";
import PopularCarousel from "@/components/Carousel/Home/PopularCarousel";
import Landing from "@/components/Carousel/Home/Landing";

const trendingFilters = [
  { type: "movie", label: "day" },
  { type: "movie", label: "week" },
];

const popularFilters = [
  { type: "movie", label: "movie" },
  { type: "tv", label: "tv" },
];

export default function Home() {
  return (
    <main className="pb-20">
      <div className="text-white space-y-20">
        {/* <TestFetch /> */}
        <Landing />
        <TrendingCarousel
          title="Trending Movies"
          type="movie"
          filters={trendingFilters}
          id="trending_movies"
        />
        <PopularCarousel
          title="What's Popular"
          filters={popularFilters}
          id="popular_state"
        />
      </div>
    </main>
  );
}
