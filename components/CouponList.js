"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { CardActionArea } from "@mui/material";
import { Card } from "@mui/material";
import BasicSelect from "../src/app/components/BasicSelect/BasicSelect";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import Coupon from "./coupon";

function CouponList({
  selectedCategory,
  dynamicCategories,
  handleCategoryFilter,
  handleSubcategoryFilter,
  filteredData,
  ordering,
  setOrdering,
}) {
  useEffect(() => {}, [selectedCategory]);

  // pagination function
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / elementsPerPage);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const totalResults = filteredData.length;
  const currentElements = filteredData.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <div className=" lg:hidden block mx-auto w-11/12">
        <SearchBar />
      </div>
      <Grid
        container
        justifyContent="flex-start"
        sx={{
          display: { xs: "block", sm: "none", md: "none", lg: "none" },

          marginBottom: 3,
        }}
      >
        <div className="flex-col justify-between items-center w-full container py-6 px-2 ">
          <div>
            <p className="text-black text-2xl josefin-regular font-bold pb-4 text-center">
              Faites des économies avec les coupons de réduction SmartReduc !
            </p>
            <p className="text-neutral-400 text-lg inter-medium text-center">
              Découvrez <span className=" font-bold">les meilleurs plans </span>
              près de chez vous et{" "}
              <span className=" font-bold">boostez votre pouvoir d’achat </span>
              grâce à nos <span className=" font-bold">remises </span> dans les
              restaurants, salons de coiffure, spa, restauration rapide,
              sorties, loisirs, contrôles techniques, que vous soyez à Lille,
              Nice, Lyon, Marseille ou même à Paris !
            </p>
          </div>
          <BasicSelect ordering={ordering} setOrdering={setOrdering} />
        </div>
      </Grid>
      <div className="mx-auto container lg:w-9/12 ">
        <div className=" px-0 md:px-2 lg:px-2 py-4 flex flex-row items-start ">
          <Grid container direction="row">
            <Grid
              container
              direction="row"
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
                marginBottom: 3,
              }}
            >
              <div className="flex justify-between w-full mt-12 ">
                <div>
                  <p className="text-black text-2xl josefin-regular font-bold pb-4">
                    Faites des économies avec les coupons de réduction Ticket
                    Promo !
                  </p>
                  <p className="text-neutral-400 text-lg inter-medium">
                    Découvrez{" "}
                    <span className=" font-bold">les meilleurs plans </span>
                    près de chez vous et{" "}
                    <span className=" font-bold">
                      boostez votre pouvoir d’achat{" "}
                    </span>
                    grâce à nos <span className=" font-bold">remises</span> dans
                    les restaurants, salons de coiffure, spa, restauration
                    rapide, sorties, loisirs, contrôles techniques, que vous
                    soyez à Lille, Nice, Lyon, Marseille ou même à Paris !
                  </p>
                </div>
                <BasicSelect ordering={ordering} setOrdering={setOrdering} />
              </div>
            </Grid>
            <Grid
              container
              marginTop={-0.75}
              sx={{
                justifyContent: {
                  xs: "center",
                  md: "center",
                  lg: "center",
                },
              }}
            >
              {filteredData && filteredData.length > 0 ? (
                <div className="section_coupon grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-1 md:gap-3 lg:gap-x-10 lg:gap-y-8 lg:mx-8">
                  {currentElements.map((coupon, index) => {
                    return <Coupon key={index} coupon={coupon} />;
                  })}
                </div>
              ) : (
                <div className="text-2xl  text-center mt-14">
                  <p>
                    {
                      "sélectionnez une catégorie pour voir nos coupons de réduction."
                    }
                  </p>
                </div>
              )}
            </Grid>
            {filteredData.length > 0 && (
              <div className="mt-10 flex flex-col justify-center items-center mx-auto">
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                  />
                </Stack>
                <p className="mt-4 font-light  text-sm">
                  {indexOfFirstElement + 1} -
                  {Math.min(indexOfLastElement, totalResults)} sur
                  {totalResults} résultats
                </p>
              </div>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CouponList;
