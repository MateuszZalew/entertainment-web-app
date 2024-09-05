import Image from "next/image";
import { Show } from "../lib/definitions";

export default function Card({ card }: { card: Show }) {
  return (
    <div className="">
      <div className="relative aspect-[1.49] max-w-[164px] md:max-w-[220px] md:aspect-[1.57] lg:max-w-[280px] lg:aspect-[1.61]">
        <picture>
          <Image
            src={card.thumbnail.regular.small}
            alt={card.title}
            fill={true}
            className="rounded-lg"
          />
          <source
            media="(min-width: 768px)"
            srcSet={card.thumbnail.regular.medium}
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/thumbnails/community-of-ours/regular/large.jpg"
          />
        </picture>

        <div className="group cursor-pointer absolute top-2 right-2 rounded-full size-8 bg-dark-blue/50 flex justify-center items-center hover:bg-white">
          <svg
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              card.isBookmarked ? "fill-white" : "fill-none"
            } stroke-white group-hover:stroke-greyish-blue`}
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-2 mt-2 text-white/75 text-xs items-center">
        <span className="flex items-center after:inline-block after:bg-white/75 after:size-[3px] after:rounded-full after:ml-2">
          {card.year}
        </span>
        <div className="flex items-center gap-[6px]">
          <Image
            src={`${
              card.category === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }`}
            alt={`${card.category} icon`}
            width="12"
            height="12"
          />
          <span>{card.category}</span>
        </div>

        <span className="flex items-center before:inline-block before:bg-white/75 before:size-[3px] before:rounded-full before:mr-2">
          {card.rating}
        </span>
      </div>
      <p className="text-white mt-1">{card.title}</p>
    </div>
  );
}
