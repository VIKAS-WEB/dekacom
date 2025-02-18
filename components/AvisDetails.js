"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
const AvisDetails = ({ avisData, couponData, setOpenModalAvis }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    setToken(storedToken || "");
  }, []);

  const coupon = couponData.coupon;

  const coupon_id = coupon.coupon_id;
  const [replyFormData, setReplyFormData] = useState({
    title: "félicitation",
    comment: "",
    mark: 0,
  });

  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    let validatedValue;
    if (name === "mark") {
      const numericValue = parseInt(value, 10);
      validatedValue = isNaN(numericValue)
        ? 0
        : Math.max(0, Math.min(numericValue, 5));
    } else {
      validatedValue = value;
    }

    setReplyFormData({ ...replyFormData, [name]: validatedValue });
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (isNaN(Number(replyFormData.mark)) || replyFormData.mark === "") {
      return;
    }
    try {
      const response = await axios.post(
        "/api/aviscomment",
        {
          coupon_id: coupon_id,
          ...replyFormData,
          token: window.localStorage.getItem("token"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setReplyFormData({
        mark: 0,
        comment: "",
      });
      setOpenModalAvis(false);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  if (!avisData || !avisData[0]) {
    return (
      <div className="flex items-center justify-center">
        <div className=" mx-3 w-full">
          <div className="relative overflow-hidden">
            <div className="m-auto ">
              <form onSubmit={handleReplySubmit}>
                <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 mt-3 text-md font-medium text-gray-900"
                  >
                    Évaluez votre expérience : <br /> de 1 (très insatisfait) à
                    5 (très satisfait)
                  </label>
                  <input
                    type="number"
                    id="mark"
                    name="mark"
                    value={replyFormData.mark}
                    placeholder=""
                    required
                    onChange={handleReplyChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#8A98BA] focus:border-[#8A98BA]  dark:placeholder-gray-400 dark:text-[#6E7FAA]"
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    id="comment"
                    name="comment"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#8A98BA] focus:border-[#8A98BA]  dark:placeholder-gray-400 dark:text-[#6E7FAA]"
                    placeholder="Laissez un commentaire..."
                    value={replyFormData.comment}
                    required
                    onChange={handleReplyChange}
                  />
                </div>
                <button
                  className="mt-4 inline-block w-full bg-[#FFA631] text-white py-2 px-4 rounded-full hover:bg-[#3ACCE1] focus:outline-none focus:ring-2 focus:ring-[#3ACCE1] focus:ring-opacity-50"
                  type="submit"
                >
                  Voter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const avisList = avisData;

  const calculateTimeDifference = (date) => {
    const currentDate = new Date();
    const timeDifference = currentDate - date;
    const secondsDifference = Math.abs(timeDifference) / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = hoursDifference / 24;
    const yearsDifference = daysDifference / 365;

    if (secondsDifference < 60) {
      return `${Math.floor(secondsDifference)} seconds ago`;
    } else if (minutesDifference < 60) {
      return `${Math.floor(minutesDifference)} minutes ago`;
    } else if (hoursDifference < 24) {
      return `${Math.floor(hoursDifference)} hours ago`;
    } else if (daysDifference < 365) {
      return `${Math.floor(daysDifference)} days ago`;
    } else {
      return `${Math.floor(yearsDifference)} years ago`;
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto">
        {avisData ? (
          <>
            <div className="px-2 md:px-4 lg:px-4 relative overflow-hidden ">
              <div className="flex flex-row justify-between items-center mb-4">
                <div>
                  <h2 className=" mt-5 text-2xl text-[#000] font-medium">
                    {coupon.tr_name}
                  </h2>
                  <div className="rating-section flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`yellow_star text-xl text-yellow-400 ${
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
                  </div>
                </div>
              </div>
              <h2 className=" font-normal text-xl">Les avis</h2>
              <div className=" h-28 overflow-y-auto mb-5 scrrol">
                {avisList &&
                  avisList.map((avis, index) => {
                    let cleanedText = avis.text;

                    if (avis.text && typeof avis.text === "string") {
                      cleanedText = avis.text;
                    }

                    const timeDifference = calculateTimeDifference(
                      new Date(avis.date)
                    );
                    return (
                      <div key={index} className="mt-2">
                        <div className="mt-2">
                          <div className="flex flex-row items-center">
                            <div className="font-normal items-center flex gap-1">
                              <div>
                                <p className="text-sm lg:text-lg">
                                  {" "}
                                  {avis.author}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs lg:text-md font-medium">
                                  {avis.department_code !== null &&
                                  avis.department_code !== "" &&
                                  avis.department_name !== null &&
                                  avis.department_name !== "" ? (
                                    <>
                                      (
                                      {`${avis.department_code} - ${avis.department_name}`}
                                      )
                                    </>
                                  ) : null}
                                </p>
                              </div>
                              <div>
                                <p className="text-[#B3B3B3] text-xs lg:text-sm font-normal">
                                  {timeDifference}
                                </p>
                              </div>
                              <div className="ml-1 bg-[#f4fbfb] px-2 py-1 flex items-center">
                                <Image
                                  src="/assets/img/star_filled.svg"
                                  className="w-4 mr-2"
                                  width={16}
                                  height={16}
                                  alt="star"
                                />
                                <span className="text-[#B3B3B3] text-xs lg:text-sm font-semibold">
                                  {avis.vote}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-0.5 text-xs">
                            {" "}
                            <div
                              dangerouslySetInnerHTML={{ __html: cleanedText }}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className=" mx-auto ">
                <form onSubmit={handleReplySubmit}>
                  <div>
                    <label
                      htmlFor="visitors"
                      className="block mb-2 text-md font-medium text-gray-900"
                    >
                      Évaluez votre expérience : <br /> de 1 (très insatisfait)
                      à 5 (très satisfait)
                    </label>
                    <input
                      type="number"
                      id="mark"
                      name="mark"
                      value={replyFormData.mark}
                      placeholder=""
                      required
                      onChange={handleReplyChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#8A98BA] focus:border-[#8A98BA]  dark:placeholder-gray-400 dark:text-[#6E7FAA]"
                    />
                  </div>
                  <div className="mt-5">
                    <textarea
                      id="comment"
                      name="comment"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#8A98BA] focus:border-[#8A98BA]  dark:placeholder-gray-400 dark:text-[#6E7FAA]"
                      placeholder="Laissez un commentaire..."
                      value={replyFormData.comment}
                      required
                      onChange={handleReplyChange}
                    />
                  </div>
                  <button
                    className="mt-4 inline-block w-full bg-[#FFA631] text-white py-2 px-4 rounded-full hover:bg-[#3ACCE1] focus:outline-none focus:ring-2 focus:ring-[#3ACCE1] focus:ring-opacity-50"
                    type="submit"
                  >
                    Voter
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-2xl">pas d{"'"}avis pour le moments</p>
        )}
      </div>
    </div>
  );
};

export default AvisDetails;
