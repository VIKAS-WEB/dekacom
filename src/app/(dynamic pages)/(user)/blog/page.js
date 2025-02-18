import React from "react";
import PostCard from "./components/PostCard/PostCard";
import Pagination from "./components/Pagination/Pagination";

const Blog = async (searchParams) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const page = searchParams.searchParams.page ?? "1";
  const per_page = searchParams.searchParams.per_page ?? "12";

  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24 ...
  const end = start + Number(per_page);

  const entries = data.slice(start, end);

  return (
    <div>
      <span
        className="text-sm text-zinc-500 after:content-[''] 
      after:absolute after:w-8 after:m-2 after:border-2 after:border-[#000000] z-0"
      >
        Articles de blog / Tout nos articles
      </span>
      <h2 className="text-2xl font-semibold ">Tout nos articles</h2>
      <div className="items grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 items-stretch">
        {entries.map((post) => {
          return (
            <PostCard key={post.id} posts={{ ...post }} routepage="blog" />
          );
        })}
      </div>

      <Pagination
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        postCount={data.length}
      />
    </div>
  );
};

export default Blog;
