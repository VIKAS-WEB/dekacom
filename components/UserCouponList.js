import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const UserCouponList = ({ data }) => {
  //const isResponsive = useMediaQuery({ maxWidth: 767 });
  const visibleData = data;

  return (
    <section className="w-full md:w-full p-0 md:p-2 lg:p-2">
      {data && data.length > 0 ? (
        <div className="section_coupon grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-2">
          {visibleData.map((coupon, index) => {
            function truncateText(text, maxLength) {
              if (text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
              }
              return text;
            }
            const couponTitle = coupon.trademark.name
              .replace(/<\/?[^>]+(>|$)/g, "")
              .replace(/&[^;]+;/g, "");
            const maxLength = 15;
            const truncatedTitle = truncateText(couponTitle, maxLength);

            const avg =
              coupon.avg_votes != null ? parseFloat(coupon.avg_votes) : 0;
            const formattedAvgVotes = avg.toFixed(1);
            const avgVotes = formattedAvgVotes.replace(/\.0$/, "");

            return (
              <div key={index}>
                <div className="mx-2 mb-2 lg:mb-0 md:mb-0 box-coupon">
                  <div className="bg-white box_coupon rounded-lg p-4 w-80 max-w-full mx-auto shadow-md">
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
                      <div className="left-block w-auto md:w-32 lg:w-32">
                        <h2 className="text-gray-400 text-sm">{coupon.type}</h2>
                      </div>
                      <div className="right-block w-auto md:w-64 lg:w-64">
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
                        <h2 className="text-lg font-semibold text-black line-clamp-1">
                          <div
                            dangerouslySetInnerHTML={{ __html: truncatedTitle }}
                          />
                        </h2>
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
                    <div className="second-section flex flex-row justify-between items-baseline">
                      <div className="left-block w-full">
                        <hr className="flex w-4/5 h-0.3 mt-2 ml-3 bg-gray-300" />
                      </div>
                      <div className="rating-section flex flex-row items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`yellow_star text-yellow-400 ${
                              index < Math.floor(parseFloat(coupon.avg_votes))
                                ? "filled"
                                : ""
                            }`}
                          >
                            {index < Math.floor(parseFloat(coupon.avg_votes))
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
                    <div className="offer-section flex-row flex justify-between items-center mt-4 w-full">
                      <div className="mx-auto">
                        <h3 className="text-4xl price_coupon text-center text-[#000000] font-bold">
                          -
                          {coupon.reduction_type === "amount"
                            ? coupon.price + "€"
                            : coupon.percentage + "%"}
                        </h3>
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
                              coupon.trademark.name.trim().split(" ").join("-"),
                          }}
                        >
                          <p className="offer-button bg-[#3ACCE1] text-white text-xs md:text-base lg:text-base px-4 py-2 rounded-full block md:hidden">
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
                              coupon.trademark.name.trim().split(" ").join("-"),
                          }}
                        >
                          <p className="offer-button bg-[#3ACCE1] text-white text-sm md:text-base lg:text-base px-4 py-2 rounded-full hidden md:block">
                            Voir le coupon
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-2xl  text-center mt-14">
          <p>{"Vous n'avez pas mis de coupons en favoris."}</p>
        </div>
      )}
    </section>
  );
};

export default UserCouponList;
