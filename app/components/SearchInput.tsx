"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    console.log(`Searching ${term}...`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative mx-4 mt-6 lg:mt-16 lg:mx-0">
      <input
        type="text"
        className="block w-full bg-dark-blue text-white pl-10"
        placeholder="Search for movies or TV series"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Image
        src="/assets/icon-search.svg"
        alt="Search for content"
        width="24"
        height="24"
        className="absolute left-0 top-0"
      />
    </div>
  );
}
