import TrendingCarousel from "@/components/Carousel/Home/TrendingCarousel";
import PopularCarousel from "@/components/Carousel/Home/PopularCarousel";
import Landing from "@/components/Carousel/Home/Landing";
import UpcomingCarousel from "@/components/Carousel/Home/UpcomingCarousel";
import { getServerSession } from "next-auth";
import { FilterProps } from "@/lib/types";

const trendingFilters: FilterProps[] = [
  { type: "movie", label: "day" },
  { type: "movie", label: "week" },
];

const popularFilters: FilterProps[] = [
  { type: "movie", label: "movie" },
  { type: "tv", label: "tv" },
];

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="pb-20">
      <div className="text-white space-y-20">
        <Landing session={session} />

        <UpcomingCarousel title="Upcoming Movies" id="upcoming_movies" />
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
