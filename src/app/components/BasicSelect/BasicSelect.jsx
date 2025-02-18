import { useState } from "react";
import Box from "@mui/material/Box";
import { IoIosArrowForward } from "react-icons/io";
import { RiTriangleLine } from "react-icons/ri";

export default function BasicSelect({ ordering, setOrdering }) {
  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (value) => {
    setOrdering(value);
    setShowFilter(false);
  };

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Box sx={{ maxWidth: "60%" }} size="small">
      <div className="flex flex-col justify-center items-center border-gray-300 border relative w-36 lg:w-36 rounded-lg py-2 lg:py-1 inter-medium ">
        <span
          className="flex font-medium	 lg:text-lg text-base items-center justify-center space-x-1 cursor-pointer"
          onClick={handleToggleFilter}
        >
          {ordering === "date"
            ? "Filtres"
            : ordering === "city"
            ? "Ville"
            : ordering === "downloads"
            ? "Plus téléchargés"
            : ordering === "votes"
            ? "Mieux notés"
            : ordering}
          <IoIosArrowForward
            className={
              showFilter
                ? "transform rotate-90 mt-1"
                : "transform rotate-[-90] mt-1"
            }
          />
        </span>

        <div
          className={`${
            showFilter ? "block" : "hidden"
          } lg:top-8 top-8 absolute flex flex-col z-10   bg-transparent w-52  lg:w-42	left-0    		`}
        >
          <div className="flex flex-col  items-end mr-6 lg:mr-8 ">
            <div
              className="w-0 h-0 
  border-l-[10px] border-l-transparent
  border-b-[15px] border-b-gray-300
  border-r-[10px] border-r-transparent z-0"
            ></div>
            <div
              className="w-0 h-0 
  border-l-[10px] border-l-transparent
  border-b-[15px] border-b-white
  border-r-[10px] border-r-transparent absolute top-[1px] z-10"
            ></div>
          </div>

          <div className="flex flex-col bg-white   border  border-gray-300 rounded-3xl   lg:rounded-2xl m-0  ">
            {" "}
            <span
              className=" text-sm font-medium	 lg:text-base text-black ml-6 pt-3 pb-1 cursor-pointer"
              onClick={() => handleChange("date")}
            >
              Par défaut
            </span>
            <span
              className=" text-sm font-medium	 lg:text-base text-black ml-6 py-1 cursor-pointer"
              onClick={() => handleChange("distance")}
            >
              Par distance
            </span>
            <span
              className=" text-sm lg:text-base font-medium	 text-black ml-6 py-1 cursor-pointer"
              onClick={() => handleChange("city")}
            >
              Par ville
            </span>
            <span
              className=" text-sm lg:text-base font-medium	 text-black ml-6 py-1 cursor-pointer"
              onClick={() => handleChange("votes")}
            >
              Les mieux notés
            </span>
            <span
              className=" text-sm lg:text-base font-medium	 text-black ml-6 pt-1 pb-3 cursor-pointer"
              onClick={() => handleChange("downloads")}
            >
              Les plus téléchargés
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
}
