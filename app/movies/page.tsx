import data from "../../data.json";
import CardsList from "../components/CardsList";

export default function MoviesPage() {
  const movies = data.filter((show) => show.category === "Movie");

  return (
    <div className="pl-4 flex flex-col gap-6 md:pl-6 lg:mt-0 lg:pl-0">
      <CardsList cards={movies} title="Movies" />
    </div>
  );
}
