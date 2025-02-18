"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCouponList from "../../../../../../components/UserCouponList";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Favoris = () => {
  const [userFavCoupons, setUserFavCoupons] = useState({});

  const getData = async () => {
    const res = await axios.post("/api/listingByFavorite", {
      token:
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : "",
    });

    if (res.data[0]) {
      setUserFavCoupons(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <span
        className="text-sm text-zinc-500 after:content-[''] 
      after:absolute after:w-8 after:m-2 after:border-2 after:border-[#000000]"
      >
        Liste des coupons en favoris
      </span>
      <h2 className="text-2xl font-semibold ">Mes coupons en favoris</h2>

      <br />

      <UserCouponList data={userFavCoupons} />

      <div className="my-10">
        <Link
          href="/"
          className="flex flex-row items-center font-semibold max-w-3xl:text-xs"
        >
          <FaArrowLeft className="mr-3" /> Retour à la page d{"'"}accueil
        </Link>
      </div>
    </div>
  );
};

export default Favoris;
