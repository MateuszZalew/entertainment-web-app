"use client";

import { Show } from "../lib/definitions";
import TrendingCard from "./TrendingCard";

export default function Trending({ trendingShows }: { trendingShows: Show[] }) {
  return (
    <div>
      <h1 className="mb-4 text-white text-xl lg:text-3xl">Trending</h1>
      <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-10">
        {trendingShows.map((show) => (
          <TrendingCard key={show.title} card={show} />
        ))}
      </div>
    </div>
  );
}
