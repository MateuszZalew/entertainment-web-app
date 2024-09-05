import CardsList from "./CardsList";
import Trending from "./Trending";
import data from "../../data.json";

export default function MainHome() {
  const trendingShows = data.filter((show) => show.isTrending);
  const recommendations = data.filter((show) => !show.isTrending);

  return (
    <div>
      <Trending trendingShows={trendingShows} />
      <CardsList cards={recommendations} title="Recommended for you" />
    </div>
  );
}
