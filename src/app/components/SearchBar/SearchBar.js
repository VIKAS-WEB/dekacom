import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGeolocationContext } from "@/app/contexts/GeolocationContext";
import { RiMapPin2Fill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FiUsers, FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtredCategories, setFiltredCategories] = useState([]);
  const location = useGeolocationContext();
  const [selected, setSelected] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem("city", location?.city_name);
    window.localStorage.setItem("department_code", location?.department_code);
  }, [location]);

  useEffect(() => {
    // Check if inputValue has exactly 3 letters
    if (inputValue.length > 2) {
      const fetchData = async () => {
        try {
          const response = await axios.post("/api/citiesDetail", {
            city_part: inputValue.toLowerCase(),
          });

          if (response.data.length > 0) {
            const formattedCities = response.data.map((element) => ({
              name: `${element.city_name ?? ""}, ${
                element.department?.department_name ?? ""
              }, ${element.department?.country?.country_name ?? ""}`,
              id: element.city_id,
            }));
            setCities(formattedCities);
          } else {
            setCities([]);
          }
        } catch (error) {
          console.error("Error fetching cities:", error);
          setCities([]);
        }
      };
      fetchData();
    } else {
      // Clear cities when inputValue does not have exactly 3 letters
      setCities([]);
    }
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        const formattedCategories = categoriesResponse.data.map((category) => ({
          ...category,
          id: category.id,
          name: category.name,
          alias: category.alias,
        }));
        setCategories(formattedCategories);
        setFiltredCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const handleChangeSearch = (event) => {
    filterCategories(event.target.value.toLowerCase());
    setShowDropDown(true);
    setInputValue(event.target.value);
  };
  const onFocusSearch = () => {
    setShowDropDown(true);
  };
  const handleSelectSearch = (value) => {
    setInputValue(value.name);
    setShowDropDown(false);
  };

  const onCloseSearch = () => {
    setShowDropDown(false);
    setInputValue("");
    setFiltredCategories(categories);
    setSelected("");
    setCities([
      { id: 0, name: "Ecrivez dans la recherche pour afficher les villes" },
    ]);
  };
  const filterCategories = (searchValue) => {
    const data = filtredCategories.filter((category) =>
      category.name.toLowerCase().includes(searchValue)
    );
    if (searchValue === "") {
      setFiltredCategories(categories);
    } else setFiltredCategories(data);
  };
  const CategoriesUl = () => (
    <ul className="text-gray-500 text-sm">
      <div className="bg-[#D8D8D8] lg:py-3   lg:pl-16 text-lg pl-4 flex w-full py-2  font-bold items-center uppercase">
        <GoHomeFill className=" lg:mr-3 mr-3 text-base  lg:text-lg" />{" "}
        catégories
      </div>{" "}
      {filtredCategories.map((category) => (
        <li key={category.id}>
          <button
            className={
              category.name.toLowerCase() !== selected.toLowerCase()
                ? "lg:pl-24 lg:py-2 py-1 pl-12 flex items-center"
                : "lg:pl-24 lg:py-2 py-1 pl-12flex items-center font-bold text-[#0AA6A1]"
            }
            onClick={() => {
              if (category.name.toLowerCase() !== selected.toLowerCase()) {
                setShowDropDown(false);
                setSelected(category.name.toLowerCase());
                router.replace(
                  `/resultats_recherche_coupons?department=${window.localStorage.getItem(
                    "department_code"
                  )}&category_id=${category.id}`
                );
                handleSelectSearch(category);
              }
            }}
          >
            {category.name}
          </button>
          <hr className=" mx-10" />
        </li>
      ))}
    </ul>
  );
  const CitiesUl = () => (
    <ul className="text-gray-500 text-sm">
      <div className="bg-[#D8D8D8] lg:py-3   lg:pl-16 text-lg pl-4 flex w-full py-2  font-bold items-baseline uppercase">
        <RiMapPin2Fill className="lg:mr-3 mr-3 text-base  lg:text-lg " /> LIEUX
      </div>
      {cities.slice(0, 10).map((city) => (
        <li key={city.id}>
          <button
            className={
              city?.name?.toLowerCase() === selected.toLowerCase()
                ? "lg:pl-24 lg:py-2 py-1 pl-12 font-bold text-[#0AA6A1]"
                : "lg:pl-24 lg:py-2 py-1 pl-12  "
            }
            onClick={() => {
              if (city?.name?.toLowerCase() !== selected.toLowerCase()) {
                if (city?.id !== 0) {
                  setSelected(city?.name);
                  setShowDropDown(false);
                  router.replace(
                    "/resultats_recherche_coupons?city=" + city?.id
                  );
                } else {
                  setShowDropDown(false);
                  setSelected("");
                  setInputValue("");
                  router.replace("/");
                  setFiltredCategories(categories);
                }
              } else {
                router.replace("/resultats_recherche_coupons?city=" + city?.id);
              }
            }}
          >
            {city.name}
          </button>
          <hr className=" mx-6" />
        </li>
      ))}
    </ul>
  );
  const RendringFunction = () => {
    if (cities.length > 0 && filtredCategories.length > 0) {
      return (
        <>
          <CategoriesUl />
          <CitiesUl />
        </>
      );
    } else if (filtredCategories.length > 0) {
      return <CategoriesUl />;
    } else if (cities.length > 0) {
      return <CitiesUl />;
    } else if (
      cities.length === 0 &&
      filtredCategories.length === 0 &&
      inputValue.length > 2
    ) {
      return (
        <p className="mx-4  text-sm p-4">
          {"Oups, il n'y a pas d'offres disponibles pour cette recherche"}
        </p>
      );
    } else {
      <></>;
    }
  };
  return (
    <>
      <div
        className={`w-full h-20 rounded-md flex items-center px-2 lg:px-4 py-2 border border-gray-300 text-gray-500 text-lg inter-medium ${
          showDropDown ? "border-b-0 rounded-bl-none rounded-br-none" : ""
        }`}
      >
        <span
          className={
            showDropDown
              ? "lg:text-2xl text-xl font-bold lg:mx-4 mx-0"
              : "hidden"
          }
        >
          <FiSearch className="text-3xl" />
        </span>
        <input
          value={inputValue}
          onChange={handleChangeSearch}
          onFocus={onFocusSearch}
          type="text"
          className="w-full text-sm lg:text-lg inter-medium mx-2 lg:mx-4 h-full my-2 rounded-md focus:outline-none border-none normal-case"
          placeholder="Rechercher par catégorie, par ville ..."
        />
        <button
          className={
            showDropDown
              ? "hidden"
              : "lg:p-3 p-2 rounded-full bg-[#3ACCE1] text-white flex justify-center items-center"
          }
        >
          <FiSearch className="lg:text-3xl text-2xl" />
        </button>
        <span
          onClick={onCloseSearch}
          className={
            showDropDown ? "text-2xl font-bold cursor-pointer" : "hidden"
          }
        >
          <IoMdClose />
        </span>
      </div>
      <div
        className={
          showDropDown
            ? "custom-scrollbar lg:mr-0 mr-4  absolute flex flex-col z-20 bg-white border border-gray-300 border-t-0 rounded-tl-none rounded-tr-none rounded-md lg:w-full		 w-11/12 overflow-y-auto max-h-64"
            : "hidden"
        }
      >
        {RendringFunction()}
      </div>
    </>
  );
}

export default SearchBar;
