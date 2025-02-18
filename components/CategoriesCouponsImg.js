"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sorties from "../public/images/Categories/Sortie.png";
import Restauration from "../public/images/Categories/Restauration.png";
import Hightech from "../public/images/Categories/High-tech.png";
import Modes from "../public/images/Categories/ModesX2.png";
import Bienetre from "../public/images/Categories/Bien-etre.png";
import Automoto from "../public/images/Categories/Auto-moto.png";
import Voyages from "../public/images/Categories/Voyages.png";
import Services from "../public/images/Categories/Services.png";
import Sports from "../public/images/Categories/Sports.png";
import Hypermarche from "../public/images/Categories/Hypermarche.png";
import Animalerie from "../public/images/Categories/Animalerie.png";
import Artisanat from "../public/images/Categories/Artisanat.png";
import Maison from "../public/images/Categories/Maison.png";
import { useRouter } from "next/navigation";
import { useGeolocationContext } from "@/app/contexts/GeolocationContext";

function CategoriesCouponsImg() {
  const router = useRouter();
  const location = useGeolocationContext();

  useEffect(() => {
    window.localStorage.setItem("city", location?.city_name);
    window.localStorage.setItem("department_code", location?.department_code);
  }, [location]);
  const categories = [
    {
      title: "Restauration",
      srcImg: Restauration,
      id: "14",
    },
    {
      title: "Sorties",
      srcImg: Sorties,
      id: "10",
    },
    {
      title: "High tech",
      srcImg: Hightech,
      id: "2",
    },
    {
      title: "Modes",
      srcImg: Modes,
      id: "1",
    },
    {
      title: "Bien Etre",
      srcImg: Bienetre,
      id: "17",
    },
    {
      title: "Auto Moto",
      srcImg: Automoto,
      id: "26",
    },
    {
      title: "Voyages",
      srcImg: Voyages,
      id: "23",
    },
    {
      title: "Services",
      srcImg: Services,
      id: "22",
    },
    {
      title: "Sports",
      srcImg: Sports,
      id: "21",
    },
    {
      title: "Hypermarche",
      srcImg: Hypermarche,
      id: "28",
    },
    {
      title: "Animalerie",
      srcImg: Animalerie,
      id: "32",
    },
    {
      title: "Artisanat",
      srcImg: Artisanat,
      id: "27",
    },
    {
      title: "Maison",
      srcImg: Maison,
      id: "31",
    },
  ];
  return (
    <div className="mx-auto lg:w-9/12   w-full flex flex-col items-center my-8 ">
      <div className="flex  lg:w-full   flex-col lg:my-8 my-4 sm:w-9/12 w-10/12 md:w-10/12 md:text-left text-center ">
        <div>
          <p className="text-black text-2xl josefin-regular font-bold pb-4">
            Explorez l’univers SmartReduc et boostez votre pouvoir d’achat !
          </p>
          <p className="text-neutral-400 text-lg inter-medium">
            <span className=" font-bold">SmartReduc</span> vous propose{" "}
            <span className=" font-bold">
              les meilleurs codes promotionnels{" "}
            </span>
            et <span className=" font-bold">des milliers de réductions </span>
            exclusives chez vos{" "}
            <span className=" font-bold">commerces de proximité</span>,
            boutiques en ligne exclusives ou dans votre supermarché préféré.
            Aujourd’hui, faire des{" "}
            <span className=" font-bold">économies </span>
            pour aller au restaurant, organiser une sortie en famille ou encore
            trouver des activités pour partir en week-end pas cher dans votre
            ville préférée n’a plus de secret. Découvrez nos
            <span className=" font-bold"> bons plans </span> SmartReduc !
          </p>
        </div>
      </div>
      <div className="grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 auto-rows-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              router.replace(
                `/categories/${
                  item.id
                }-${item.title.toLowerCase()}?department=${window.localStorage.getItem(
                  "department_code"
                )}`
              );
            }}
            className={
              index == 0
                ? "lg:col-span-2 lg:w-full lg:h-w-full lg:row-span-2 w-full col-span-1 lg:relative lg:block flex flex-col items-center justify-center cursor-pointer"
                : "col-span-1 lg:row-span-1 lg:full lg:h-full w-full lg:relative lg:block flex  flex-col items-center justify-center cursor-pointer"
            }
          >
            <Image
              src={item.srcImg}
              alt={item.title}
              className={
                index == 0
                  ? " lg:w-full lg:h-full w-3/4 h-4/6  "
                  : "lg:w-full lg:h-full w-3/4 h-5/6"
              }
            />
            <div className=" hidden lg:block absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl "></div>
            <p className="lg:block  hidden absolute bottom-3 left-6  lg:text-2xl josefin-bold text-white px-2 py-1 ">
              {item.title}
            </p>
            <p className="lg:hidden block text-sm  josefin-bold text-black px-2 py-1 my-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesCouponsImg;
