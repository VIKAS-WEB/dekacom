"use client";
import { useState } from 'react';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.png'
import { Eye } from "lucide-react"; // Eye icon ke liye lucide-react

const products = new Array(12).fill({
  name: 'Mister Poke',
  price: '-3,5€',
  discount: '-20%',
  imageUrl: logoImg,
  location: 'Villeurbanne 4 km',
  rating: '★★★★★'
});

const filters = ['Par Défaut', 'Par Distance', 'Par Ville', 'Les Mieux Notés', 'Les Plus Téléchargés'];

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (

    <div className="p-6 bg-white min-h-screen m-24">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-xl font-bold uppercase tracking-wide">Près de chez vous</h1>
        <p className="text-gray-500">Découvrez les offres à proximité</p>
      </header>

      {/* Filter Options */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full border ${activeFilter === filter ? 'bg-blue-400 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-md bg-white relative overflow-hidden group">
            {/* Discount Badge */}
            <span className="absolute top-2 right-2 bg-blue-400 text-white px-2 py-1 text-sm rounded">
              {product.discount}
            </span>
            {/* Image with Hover Effect */}
            <div className="relative m-8">
              <Image
                src={product.imageUrl}
                width={200}
                height={200}
                alt={product.name}
                className="rounded w-full h-auto transition-all duration-300 group-hover:brightness-50"
              />

              {/* Hover Overlay Button (Bottom-Centered) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
                  <Eye className="w-5 h-5 mr-2" />
                  <span className="font-medium uppercase text-sm">VOIR L’OFFRE</span>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-3">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.location}</p>
              <p className="text-yellow-500">{product.rating}</p>
              <p className="text-green-500 font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-6 gap-4">
        <button className="px-4 py-2 border rounded bg-gray-100">◀ Page précédente</button>
        <button className="px-4 py-2 border rounded bg-gray-100">Page suivante ▶</button>
      </div>
    </div>
  );
}