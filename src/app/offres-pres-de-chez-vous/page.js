"use client";
import { useState } from "react";
import Image from "next/image";

// Example placeholder image paths (replace with actual image paths)
const pokeImg1 = "/images/test.png";
const pokeImg2 = "/images/test.png";

const products = new Array(12).fill(null).map((_, index) => ({
  name: "Mister Poke",
  price: index % 2 === 0 ? "-3,5€" : null, // Alternate between fixed discount and null
  discount: index % 2 === 0 ? null : "-20%", // Alternate between null and percentage
  imageUrl: index % 2 === 0 ? pokeImg1 : pokeImg2, // Alternate images
  location: "Villeurbanne d’Asqa • Vous êtes à 3,88km",
  rating: "★★★★★",
}));

const filters = ["Par Défaut", "Par Distance", "Par Ville", "Les Mieux Notés", "Les Plus Téléchargés"];

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Title and Filters in the same row with border */}
      <header className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-800 font-montserrat">
            Près de chez vous
          </h1>
          <p className="text-gray-500 text-sm">Découvrez les offres à proximité</p>
        </div>
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === filter
                  ? `bg-[#39cede] text-white`
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-200`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white relative overflow-hidden group"
          >
            {/* Image container with overlay for hover effects */}
            <div className="relative w-full aspect-square">
              <Image
                src={product.imageUrl}
                fill
                alt={product.name}
                className="absolute object-cover rounded-lg"
              />
              {/* Overlay for hover effects */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              {/* Hover elements */}
              {/* Hover elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.discount && (
                  <span className="bg-[#39cede] text-white px-2 py-1 text-sm rounded mb-2">
                    {product.discount}
                  </span>
                )}
                {product.price && (
                  <span className="bg-[#39cede] text-white px-2 py-1 text-sm rounded mb-4">
                    {product.price}
                  </span>
                )}
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors duration-200 flex items-center">
                  <span className="mr-2">👁️</span> Voir l’offre
                </button>
              </div>
            </div>
            {/* Product details (outside the image area) */}
            <div className="p-3">
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <span className="text-red-500 text-sm">❤️</span> {/* Placeholder for heart icon */}
              </div>
              <p className="text-gray-500 text-sm mt-1">{product.location}</p>
              <p className="text-yellow-500 text-sm mt-1">{product.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button className="px-4 py-2 border rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
          ◀ Page précédente
        </button>
        <button className="px-4 py-2 border rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
          Page suivante ▶
        </button>
      </div>
    </div>
  );
}