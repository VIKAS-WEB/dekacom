"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useEffect } from "react";

const CategoriesCoupons = ({
  coupons,
  categories,
  category_id,
  subcategory_id,
  department,
  country,
  city,
  cities,
}) => {
  const selectedCategory = categories.find(
    (category) => category.id == category_id
  );
  const router = useRouter();

  const selectedCity = cities.find((cities) => cities.city_id === city);
  if (
    !selectedCity &&
    !selectedCategory &&
    !subcategory_id &&
    !department &&
    !country &&
    !city
  ) {
    return (
      <>
        <div className="text-2xl text-center mt-14">
          <p>
            Pas de catégorie correspondante pour l{"'"}id {category_id}.
            Veuillez réessayer ultérieurement.
          </p>
          <div className="mt-5 inline-block text-start">
            <Link
              href={{
                pathname: "/",
              }}
            >
              <p className="offer-button bg-[#3ACCE1] text-white text-sm md:text-base px-6 lg:text-base py-2 rounded-full">
                Retour vers la page d{"'"}accueil
              </p>
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (
    !coupons ||
    !coupons[0] ||
    !coupons[0].category ||
    !coupons[0].category.name
  ) {
    return (
      <>
        <div className="mx-auto container">
          <div className="text-2xl">
            <div className="relative mb-5 hidden ">
              <Image
                src="/assets/img/layer.png"
                alt={selectedCategory ? selectedCategory.name : ""}
                className="w-full h-full"
                width={1000}
                height={500}
              />
              <div className="flex-1 flex flex-row items-center h-32  min-h-6 w-full  bg-cover bg-no-repeat absolute top-1/2  transform -translate-x-1 -translate-y-1/2">
                <div className="ml-[8vw] text-white">
                  <h2 className="w-0.5 h-0.5 invisible">
                    Nos coupons de réductions{" "}
                    {selectedCategory ? selectedCategory.name : " Heyy"}
                  </h2>
                  <div className=" text-xs md:text-[2.5vw] lg:text-[3.5vw] mb-4 leading-0 lg:leading-[3.5vw]  font-bold ">
                    {" "}
                    {selectedCategory
                      ? selectedCategory.name
                      : selectedCity?.city_name}{" "}
                  </div>
                  <p className="text-[2.75vw] font-light">
                    Près de chez vous !
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
            <div className="text-center mt-7">
              <p>
                Pas de coupons disponible avec ces paramètres veuillez réessayer
                ultérieurement.
              </p>
              <div className="mt-5 inline-block text-start">
                <Link
                  href={{
                    pathname: "/",
                  }}
                >
                  <p className="offer-button bg-[#3ACCE1] text-white text-sm md:text-base  px-6 lg:text-base  py-2 rounded-full">
                    Retour vers la page d{"'"}accueil
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  const name = coupons[0].category.name;

  return (
    <div>
      <div className="mx-auto container">
        <div>
          <div className="relative mb-5 hidden mx-8 md:mx-0 lg:mx-0 ">
            <Image
              src="/assets/img/layer.png"
              alt={selectedCategory ? selectedCategory.name : ""}
              className="w-full h-full"
              width={1000}
              height={500}
            />
            <div className="flex-1 flex flex-row items-center h-32  min-h-6 w-full  bg-cover bg-no-repeat absolute top-1/2  transform -translate-x-1 -translate-y-1/2">
              <div className="ml-[8vw] text-white">
                <h2 className=" text-xs md:text-[2.5vw] lg:text-[3.5vw] leading-0 lg:leading-[3.5vw]  font-bold ">
                  {" "}
                  {selectedCity ? selectedCity.city_name : name}{" "}
                </h2>
                <p className="text-[2.75vw] font-light">
                  Découvrez les offres près de chez vous !
                </p>
                <h3 className=" invisible w-0.5 h-0.5">
                  Découvrez nos coupons de réductions
                </h3>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          <div className=" p-4 flex flex-row items-start ">
            <section className="w-full md:w-full p-2">
              {coupons && coupons.length > 0 ? (
                <div className="section_coupon grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-2">
                  {coupons.map((coupon, index) => {
                    function truncateText(text, maxLength) {
                      if (text.length > maxLength) {
                        return text.slice(0, maxLength) + "...";
                      }
                      return text;
                    }
                    const categorie = coupon.category.name;
                    const avg =
                      coupon.avg_votes != null
                        ? parseFloat(coupon.avg_votes)
                        : 0;
                    const formattedAvgVotes = avg.toFixed(1);
                    const avgVotes = formattedAvgVotes.replace(/\.0$/, "");
                    const couponTitle = coupon.trademark.name;
                    const maxLength = 15;
                    const truncatedTitle = truncateText(couponTitle, maxLength);
                    return (
                      <Card
                        className=" mb-2 lg:mb-0 md:mb-0 box-coupon bg-white rounded-lg p-4 w-80 max-w-full mx-auto shadow-md"
                        key={index}
                      >
                        <CardActionArea
                          disableFocusRipple={true}
                          disableRipple={true}
                          onClick={() =>
                            router.push(
                              "/categories/" +
                                coupon.category.id +
                                "-" +
                                coupon.category.alias +
                                "/" +
                                coupon.id +
                                "-" +
                                coupon.trademark.name
                                  .trim()
                                  .split(" ")
                                  .join("-")
                            )
                          }
                        >
                          <div className="image-section mb-2">
                            <Image
                              src={`https://annonceurs.ticket-promo.com/ws/images/coupons/${coupon.id}.jpg`}
                              alt={couponTitle}
                              className="w-full rounded-t-lg"
                              width={200}
                              height={150}
                            />
                          </div>
                          <div className="info-section flex-row flex justify-between items-baseline">
                            <div className="left-block w-auto">
                              <div className="text-gray-400 text-sm line-clamp-1">
                                {categorie}
                              </div>
                            </div>
                            <div className="right-block w-auto">
                              <div className="box-local justify-end flex flex-row items-center">
                                <span className="location-icon">
                                  <Image
                                    src="/assets/img/location.svg"
                                    className="mr-2"
                                    alt=" localisation"
                                    width={15}
                                    height={15}
                                  />
                                </span>
                                <span className="text-xs text-gray-400">
                                  {coupon.shops[0].city}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="info-section flex flex-row justify-between items-baseline mb-2">
                            <div className="left-block">
                              <div className="text-lg font-semibold text-black line-clamp-1">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: truncatedTitle,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="right-block">
                              <div className="box-date justify-end flex flex-row items-center">
                                <span className="location-icon">
                                  <Image
                                    src="/assets/img/date.svg"
                                    alt="date"
                                    width={13}
                                    height={13}
                                    className="mr-2"
                                  />
                                </span>
                                <span className="text-xs text-gray-400">
                                  {coupon.validity.end.split(" ")[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="second-section flex justify-between items-baseline">
                            <div className="left-block w-full">
                              <hr className="flex w-4/5 h-0.3 mt-2 ml-3 bg-gray-300" />
                            </div>
                            <div className="rating-section flex items-center">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <span
                                  key={index}
                                  className={`yellow_star text-yellow-400 ${
                                    index <
                                    Math.floor(parseFloat(coupon.avg_votes))
                                      ? "filled"
                                      : ""
                                  }`}
                                >
                                  {index <
                                  Math.floor(parseFloat(coupon.avg_votes))
                                    ? "★"
                                    : "☆"}
                                </span>
                              ))}
                              <span className=" text-sm ml-1 text-gray-400">
                                {" "}
                                {avgVotes == 0 ? null : avgVotes}{" "}
                              </span>
                            </div>
                          </div>
                        </CardActionArea>

                        <div className="offer-section flex-row flex justify-between items-center mt-4 w-full">
                          <div className="mx-auto">
                            <CardActionArea
                              disableFocusRipple={true}
                              disableRipple={true}
                              key={index}
                              onClick={() =>
                                router.push(
                                  "/categories/" +
                                    coupon.category.id +
                                    "-" +
                                    coupon.category.alias +
                                    "/" +
                                    coupon.id +
                                    "-" +
                                    coupon.trademark.name
                                      .trim()
                                      .split(" ")
                                      .join("-")
                                )
                              }
                            >
                              <div className="text-4xl text-center text-[#000000] font-bold">
                                {coupon.reduction_type === "amount"
                                  ? coupon.price + "€"
                                  : coupon.percentage + "%"}
                              </div>
                            </CardActionArea>
                          </div>
                          <div className="mx-auto">
                            <Link
                              href={{
                                pathname:
                                  "/categories/" +
                                  coupon.category.id +
                                  "-" +
                                  coupon.category.alias +
                                  "/" +
                                  coupon.id +
                                  "-" +
                                  coupon.trademark.name
                                    .trim()
                                    .split(" ")
                                    .join("-"),
                              }}
                            >
                              <p className="offer-button bg-[#3ACCE1] text-white text-sm md:text-base lg:text-base px-4 py-2 rounded-full block md:hidden">
                                Profitez de cette offre !
                              </p>
                            </Link>
                            <Link
                              href={{
                                pathname:
                                  "/categories/" +
                                  coupon.category.id +
                                  "-" +
                                  coupon.category.alias +
                                  "/" +
                                  coupon.id +
                                  "-" +
                                  coupon.trademark.name
                                    .trim()
                                    .split(" ")
                                    .join("-"),
                              }}
                            >
                              <p className="offer-button bg-[#3ACCE1] text-white text-sm md:text-base lg:text-base px-4 py-2 rounded-full hidden md:block text-center btncoupon">
                                Voir le coupon
                              </p>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="text-2xl  text-center mt-14">
                  <p>Pas de coupons disponible pour cette catégorie.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCoupons;
