import TrendingCarousel from "@/components/Carousel/Home/TrendingCarousel";
import TestFetch from "@/components/TestFetch";
import PopularCarousel from "@/components/Carousel/Home/PopularCarousel";
import Landing from "@/components/Carousel/Home/Landing";
import UpcomingCarousel from "@/components/Carousel/Home/UpcomingCarousel";
import { getServerSession } from "next-auth";

const trendingFilters = [
  { type: "movie", label: "day" },
  { type: "movie", label: "week" },
];

const popularFilters = [
  { type: "movie", label: "movie" },
  { type: "tv", label: "tv" },
];

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="pb-20">
      <div className="text-white space-y-20">
        {/* <TestFetch /> */}
        <Landing />

        {session?.user?.name ? (
          <div className="container space-y-2 text-center">
            <h1 className="text-4xl font-bold">
              Welcome {session?.user?.name}
            </h1>
            <p>Find new movies or shows!</p>
          </div>
        ) : (
          <div className="container space-y-2 text-center">
            <h1 className="text-4xl font-bold ">Welcome</h1>
            <p>You should sign in!</p>
          </div>
        )}

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
