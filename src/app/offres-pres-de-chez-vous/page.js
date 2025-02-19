"use client";
import { useState } from 'react';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.png'

const products = new Array(12).fill({
  name: 'Mister Poke',
  price: '-3,5€',
  discount: '-20%',
  imageUrl: logoImg, // Replace with actual image path
  location: 'Villeurbanne 4 km',
  rating: '★★★★★'
});

const filters = ['Par Défaut', 'Par Distance', 'Par Ville', 'Les Mieux Notés', 'Les Plus Téléchargés'];

export default function ProductPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-xl font-bold uppercase tracking-wide">Près de chez vous</h1>
        <p className="text-gray-500">Découvrez les offres à proximité</p>
      </header>
      
      {/* Filter Options */}
      <div className="flex justify-center gap-2 mb-6">
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
      
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-3 shadow-md bg-white relative">
            <span className="absolute top-2 right-2 bg-blue-400 text-white px-2 py-1 text-sm rounded">{product.discount}</span>
            <Image src={product.imageUrl} width={200} height={200} alt={product.name} className="rounded" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.location}</p>
            <p className="text-yellow-500">{product.rating}</p>
            <p className="text-green-500 font-medium">{product.price}</p>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button className="px-4 py-2 border rounded bg-gray-100">◀ Page précédente</button>
        <button className="px-4 py-2 border rounded bg-gray-100">Page suivante ▶</button>
      </div>
    </div>
  );
}
