import { Show } from "../lib/definitions";
import Card from "./Card";

export default function CardsList({
  cards,
  title,
}: {
  cards: Show[];
  title: string;
}) {
  return (
    <div className="pr-4 md:pr-6">
      <h2 className="my-6 text-white text-xl md:mt-10 lg:text-3xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 justify-center mb-14 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-10">
        {cards.map((show) => (
          <Card key={show.title} card={show} />
        ))}
      </div>
    </div>
  );
}
