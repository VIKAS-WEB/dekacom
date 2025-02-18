"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import {
  FaComputer,
  FaMountainCity,
  FaUtensils,
  FaShirt,
  FaDumbbell,
  FaHeartPulse,
  FaPaw,
  FaHandshake,
  FaPlaneDeparture,
  FaScrewdriverWrench,
  FaWandMagicSparkles,
  FaShop,
  FaTrowel,
} from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DropDownCategories = () => {
  // const categories = [
  //   { image: <FaComputer className="mx-2" />, name: "High Tech" },
  //   {
  //     image: <FaMountainCity className="mx-2" />,
  //     name: "Sorties et Diverstissement",
  //   },
  //   { image: <FaUtensils className="mx-2" />, name: "Restauration" },
  //   { image: <FaShirt className="mx-2" />, name: "Mode et accessoires" },
  //   { image: <FaDumbbell className="mx-2" />, name: "Sport et accessoire" },
  //   { image: <FaHeartPulse className="mx-2" />, name: "Bien être" },
  //   { image: <FaPaw className="mx-2" />, name: "Animalerie" },
  //   { image: <FaHandshake className="mx-2" />, name: "Services" },
  //   { image: <FaPlaneDeparture className="mx-2" />, name: "Voyages" },
  //   { image: <FaScrewdriverWrench className="mx-2" />, name: "Auto / Moto" },
  //   { image: <FaTrowel className="mx-2" />, name: "Artisanat" },
  //   { image: <FaShop className="mx-2" />, name: "Hypermarché" },
  //   {
  //     image: <FaWandMagicSparkles className="mx-2" />,
  //     name: "Maison, jardin, décoration",
  //   },
  // ];

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [dynamicCategories, setDynamicCategories] = useState([]);
  useEffect(() => {
    getCategoryData();
  }, [selected]);

  const getCategoryData = async () => {
    try {
      const categoriesResponse = await axios.get("/api/categories");
      let currentResponse = categoriesResponse.data;
      if (selected !== "") {
        currentResponse.unshift({
          $: {
            id: 0,
            name: "annuler la sélection",
            alias: "annuler",
          },
        });
      }
      setDynamicCategories(currentResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      className={`font-medium lg:w-full 
    sm:w-1/2 max-lg:mx-auto max-lg:outline max-lg:outline-1  max-lg:outline-offset-[-1px] max-lg:outline-gray-400 max-lg:my-2 max-lg:max-w-[90%] relative z-[2] 
    ${open ? "max-lg:rounded-t-[25px] hidden" : "max-lg:rounded-[25px] hidden"}
    `}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          open ? "max-lg:rounded-t-[25px]" : "max-lg:rounded-[25px]"
        } ${!selected && "text-gray-700"}`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "rechercher par catégorie"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>

      <ul
        className={`bg-white overflow-y-auto absolute z-10 w-full shadow rounded-b px-2 ease-in-out duration-300 max-lg:mt-1 max-lg:border max-lg:border-gray-500 ${
          open ? "max-h-60" : "max-h-0 border-none"
        } `}
      >
        <div className="flex items-center lg:sticky lg:top-0 max-lg:mt-2 bg-[#3ACCE1] border-[#3ACCE1] rounded p-px">
          <AiOutlineSearch size={25} className="text-[#000000]" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="choisir une catégorie"
            className="placeholder:text-gray-700 p-2 outline-none rounded-r w-full"
          />
        </div>

        {dynamicCategories &&
          dynamicCategories.map((category) => (
            <li
              key={category.id}
              className={`p-2 text-sm hover:bg-[#3ACCE1] hover:text-white flex flex-row items-center
            ${
              category.name.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#3ACCE1] text-white"
            }
            ${
              category.name.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
              onClick={() => {
                if (category.name.toLowerCase() !== selected.toLowerCase()) {
                  setOpen(false);
                  setInputValue("");
                  if (category.id !== 0) {
                    setSelected(category.name);
                    router.replace(
                      `/resultats_recherche_coupons?department=${window.localStorage.getItem(
                        "department_code"
                      )}&category_id=${category.id}`
                    );
                  } else {
                    setSelected("");
                    router.replace("/");
                  }
                }
              }}
            >
              {/* <object
                data={`https://annonceurs.ticket-promo.com/images/categories/gris/promo-${category.alias}.svg`}
                type="image/svg+xml"
                aria-label={`Icon for ${category.name}`}
                className="w-8 h-8 mr-2 icon-sdeabr p-1 border border-[#3ACCE1] bg-[#d8f5f3]"
                style={{ fill: "#000000" }}
              >
                <Image
                  src="/assets/img/icon/default-icon.png"
                  alt={`Icon for ${category.name}`}
                  width={12}
                  height={12}
                />
              </object> */}

              {category.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropDownCategories;
