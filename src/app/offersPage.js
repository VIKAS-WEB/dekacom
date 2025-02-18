
import { useState } from "react";
import "../../globals.css";

const offers = [
  { id: 1, title: "Mister Poke", discount: "-3.5€", location: "Villeneuve-d’Ascq", img: "/poke.jpg" },
  { id: 2, title: "Mister Poke", discount: "-20%", location: "Villeneuve-d’Ascq", img: "/poke.jpg" },
  { id: 3, title: "Mister Poke", discount: "-3.5€", location: "Villeneuve-d’Ascq", img: "/poke.jpg" },
  { id: 4, title: "Mister Poke", discount: "-20%", location: "Villeneuve-d’Ascq", img: "/poke.jpg" },
];

export default function OffersPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">PRÈS DE CHEZ VOUS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white p-4 transition-transform transform hover:scale-105"
            onMouseEnter={() => setHovered(offer.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={offer.img} alt={offer.title} className="w-full h-48 object-cover rounded-lg" />
            {hovered === offer.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold">
                  Voir l'Offre
                </button>
              </div>
            )}
            <div className="mt-2">
              <h3 className="font-semibold text-gray-700">{offer.title}</h3>
              <p className="text-blue-500 font-bold">{offer.discount}</p>
              <p className="text-gray-500 text-sm">{offer.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
