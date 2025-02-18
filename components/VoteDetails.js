"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const VoteDetails = ({ votesData, couponData, setopenModalVote }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    setToken(storedToken || "");
  }, []);
  const coupon = couponData.coupon;
  const stats = couponData.stats;
  const coupon_id = coupon.coupon_id;

  const renderStars = (value) => {
    const starCount = parseInt(value);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(
          <span className="mr-1 text-3xl text-yellow-400" key={i}>
            <Image
              src="/assets/img/star_filled.svg"
              alt="star"
              className=" w-10"
              width={40}
              height={40}
            />
          </span>
        );
      } else {
        stars.push(
          <span className="mr-1 text-3xl text-yellow-400" key={i}>
            <Image
              src="/assets/img/star_empty.svg"
              alt="star"
              className=" w-10"
              width={40}
              height={40}
            />
          </span>
        );
      }
    }
    return stars;
  };

  // fnction for vote with coupon :

  const [rating, setRating] = useState(null);

  const handleRatingChange = (rating) => {
    setRating(rating);
  };
  const mark = rating;
  const title = "vote";
  const comment = "vote";

  const submitVote = async () => {
    try {
      await axios.post("/api/aviscomment", {
        coupon_id: coupon_id,
        mark: mark,
        title: title,
        comment: comment,
        token: window.localStorage.getItem("token"),
      });
      setopenModalVote(false);
      setRating(null);
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };
  const isResponsive = useMediaQuery({ maxWidth: 767 });
  const size = isResponsive ? 40 : 65;
  const renderProgressBar = (count) => {
    const countValue = parseInt(count);
    const width = countValue >= 5 ? "100%" : `${(countValue / 5) * 100}%`;

    return (
      <div className="w-full bg-[#EDEEFF] rounded-full ml-3">
        <div className="bg-[#5663FF] rounded-full" style={{ width }}>
          <p className="ml-5 text-white">{countValue}</p>
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-10 mb-10 w-full">
      <div className="mx-auto">
        <div className="px-3 relative">
          <div className="mt-3 w-[90%] mx-auto">
            <p className="text-[#8A98BA] text-center">
              Évaluez l’intérêt de ce coupon
            </p>
            <p className="text-[#222455] text-center text-lg mb-3">
              {stats.nb_votes} évaluations
            </p>
            <div className="mb-4 section_vote flex  flex-col-reverse">
              {votesData.map((vote, index) => (
                <div
                  className="flex flex-row items-center mt-2 vote_child w-full  first:hidden"
                  key={index}
                  id={index}
                >
                  {renderStars(vote.value)}
                  {renderProgressBar(vote.count)}
                </div>
              ))}
            </div>
            <div className="mt-5 justify-center flex flex-row items-center bg-[#F6FBFF] rounded-full">
              <Rating
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={size}
                activeColor="#FFA631"
                key={rating !== null ? "ratingSet" : "ratingNotSet"}
              />
            </div>
            <div className="mt-4">
              <p className="text-center text-[#8A98BA]">
                Voter votre expérience
              </p>
            </div>

            <button
              onClick={submitVote}
              className={`mt-4 mb-4 inline-block w-full py-2 px-4 rounded-full focus:outline-none ${
                mark > 0
                  ? "bg-[#FFA631] text-white hover:bg-[#3ACCE1] focus:ring-2 focus:ring-[#3ACCE1] focus:ring-opacity-50"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              type="submit"
              disabled={mark <= 0}
            >
              Voter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteDetails;
