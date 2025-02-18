import React from "react";
import NavBlog from "./components/NavBlog/NavBlog";
import LatestPosts from "./components/LatestPosts/LatestPosts";

const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="blog-header container bg-[#3ACCE1] py-5 px-20 mx-auto my-10">
        <p className="text-white text-lg font-semibold">
          Bienvenue sur le blog SmartReduc, retrouvez nos articles de blogs,
        </p>
        <h3 className="text-white text-3xl font-semibold">
          Nos revues de presse et nos guides pratiques
        </h3>
      </div>

      <div className="container mx-auto my-10 p-2">
        <h1 className="text-black font-bold text-4xl text-center">
          Blog SmartReduc
        </h1>
        <NavBlog />
        <hr className="border border-gray-400 " />
      </div>

      <div className="container mx-auto my-10">
        <div className="lg:flex flex-row items-start">
          <div className="list-articles basis-3/4 p-3">{children}</div>

          <div className="side-bar lg:basis-1/4 p-3">
            <span
              className="text-sm text-zinc-500 after:content-[''] 
          after:absolute after:w-8 after:m-2 after:border-2 after:border-[#000000] z-0"
            >
              Les derniers articles
            </span>
            <hr className="my-3 border border-[#3ACCE1]" />
            <LatestPosts />
            <hr className="my-3 border border-[#3ACCE1]" />
            <div className="side-banner">banner</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
