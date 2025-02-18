"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CategoryList({ categories, slideData }) {
  const [clickedCard, setClickedCard] = useState(null);
  const router = useRouter();

  const handleCardClick = (category, index) => {
    if (category.active === "1") {
      setClickedCard(index);
      router.push(`/categories/${category.id}-${category.alias}`);
    }
  };
  return (
    <div>
      <div className=" min-h-screen">
        <div className="mx-auto max-w-8xl w-[80%] p-4">
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-white">
            {categories &&
              categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`flex flex-col items-center border border-[#3ACCE1]-500 rounded-md w-50 h-80 shadow-md ${
                    clickedCard === index ? "bg-[#3ACCE1] bg-opacity-20" : ""
                  }classcard`}
                  onClick={() => handleCardClick(category, index)}
                >
                  <div className="p-4 rounded-md">
                    <img
                      src={`/assets/img/${slideData[index].pic}`}
                      alt={`Image for ${category.name}`}
                      className="w-400 h-auto object-cover"
                    />
                    <div className="flex flex-col items-center text-center pb-4 pt-10">
                      <h2
                        className={`text-center text-15 leading-0 lg:leading-6 font-bold 
                          ${
                            category.active === "1"
                              ? " text-black"
                              : "text-gray-400"
                          }`}
                      >
                        {category.name}
                      </h2>
                      <p
                        className={`text-xs md:text-[0.75vw] lg:text-[0.75vw] font-light md:mt-2 lg:mt-2  text-center ${
                          category.active === "1"
                            ? " text-black"
                            : "text-gray-400"
                        }`}
                      >
                        {slideData[index].sub_name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
