// Pagination.tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import _ from "lodash";
import Link from "next/link";

const Pagination = ({ hasNextPage, hasPrevPage, postCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const pageCount = Math.ceil(postCount / 12);

  let pages = _.range(1, pageCount + 1);

  if (page < 4) {
    pages = _.range(1, 6);
  }

  if (page >= 4) {
    pages = _.range(Number(page) - 2, Number(page) + 3);
  }

  if (page > pageCount - 4) {
    pages = _.range(pageCount - 4, pageCount + 1);
  }

  return (
    <div>
      <div className="flex gap-2 items-center justify-center mt-10 mb-5">
        <button
          className="bg-[#3ACCE1] text-white p-1 rounded"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`/blog?page=${Number(page) - 1}&per_page=${per_page}`);
          }}
        >
          {"<<"}
        </button>

        <div>
          <ul className="flex flex-row ">
            {pages.map((p) => (
              <li key={p} className={`mx-2`}>
                <Link
                  className={`${
                    p == page ? "text-white bg-[#3ACCE1] " : "text-zinc-800"
                  } 
                  border border-[#3ACCE1] hover:bg-[#3ACCE1] hover:text-white  rounded py-1 px-2 ease-in-out duration-300 `}
                  href={`/blog?page=${p}&per_page=${per_page}`}
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="bg-[#3ACCE1] text-white p-1 rounded"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`/blog?page=${Number(page) + 1}&per_page=${per_page}`);
          }}
        >
          {">>"}
        </button>
      </div>
      <div className="text-center mx-auto text-zinc-500 text-xs">
        Page : {page} / {pageCount}
      </div>
    </div>
  );
};

export default Pagination;
