"use client";

import { FC } from "react";
import { useSearchParams } from "next/navigation";

const Search: FC = () => {
  const { get } = useSearchParams();
  const search = get("query");

  return (
    <section>
      <p>{`Search results for "${search}"`}</p>
    </section>
  );
};

export default Search;
