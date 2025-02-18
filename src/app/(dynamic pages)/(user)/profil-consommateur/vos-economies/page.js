"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserEconomieListe from "../../../../../../components/UserEconomieListe";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const VosEconomies = () => {
  const [userActions, setUserActions] = useState([]);

  const getData = async () => {
    const res = await axios.post("/api/userEconomie", {
      token:
        typeof window !== "undefined"
          ? window.localStorage.getItem("token")
          : "",
    });

    if (res.data[0]) {
      setUserActions(res.data);
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
        Vos économies
      </span>
      <h2 className="text-2xl font-semibold ">
        Mes économies et points de fidélité
      </h2>
      <hr />

      <UserEconomieListe data={userActions} />

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

export default VosEconomies;
