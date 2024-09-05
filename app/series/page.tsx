import data from "../../data.json";
import CardsList from "../components/CardsList";

export default function MoviesPage() {
  const series = data.filter((show) => show.category === "TV Series");

  return (
    <div className="pl-4 flex flex-col gap-6 md:pl-6 lg:mt-0 lg:pl-0">
      <CardsList cards={series} title="TV Series" />
    </div>
  );
}
