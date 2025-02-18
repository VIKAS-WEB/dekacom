"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUser, FaTruckFast, FaCreditCard } from "react-icons/fa6";

const MenuIcon = () => {
  const pathname = usePathname();

  return (
    <div className="w-full lg:max-w-screen-md p-4 mx-auto my-10">
      <div className="flex flex-row items-center justify-center">
        <div className="basis-1/5 text-center">
          <Link
            href="/profil-consommateur"
            className={`${
              pathname == "/profil-consommateur"
                ? "text-[#3ACCE1]"
                : "text-black"
            }`}
          >
            <div
              className={`${
                pathname == "/profil-consommateur"
                  ? "bg-[#3ACCE1] text-white"
                  : "bg-white text-[#3ACCE1]"
              } mx-auto h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center border border-[#3ACCE1] rounded-full `}
            >
              <FaUser className="text-lg sm:text-2xl" />
            </div>
            <div className="text-xs sm:text-base font-medium">Profil</div>
            <hr className="border w-10 mx-auto" />
          </Link>
        </div>

        <div className="basis-1/5">
          <hr className="border" />
        </div>

        <div className="basis-1/5 text-center">
          <Link
            href="/profil-consommateur/favoris"
            className={`${
              pathname == "/profil-consommateur/favoris"
                ? "text-[#3ACCE1]"
                : "text-black"
            } `}
          >
            <div
              className={`${
                pathname == "/profil-consommateur/favoris"
                  ? "bg-[#3ACCE1] text-white"
                  : "bg-white text-[#3ACCE1]"
              } mx-auto h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center border border-[#3ACCE1] rounded-full `}
            >
              <FaTruckFast className="text-lg sm:text-2xl" />
            </div>
            <div className="text-xs sm:text-base font-medium">Favoris</div>
            <hr className="border w-10 mx-auto" />
          </Link>
        </div>

        <div className="basis-1/5 text-center">
          <hr />
        </div>

        <div className="basis-1/5 text-center">
          <Link
            href="/profil-consommateur/vos-economies"
            className={`${
              pathname == "/profil-consommateur/vos-economies"
                ? "text-[#3ACCE1]"
                : "text-black"
            } `}
          >
            <div
              className={`${
                pathname == "/profil-consommateur/vos-economies"
                  ? "bg-[#3ACCE1] text-white"
                  : "bg-white text-[#3ACCE1]"
              } mx-auto h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center border border-[#3ACCE1] rounded-full `}
            >
              <FaCreditCard className="text-lg sm:text-2xl" />
            </div>
            <div className="text-xs sm:text-base font-medium">Économies</div>
            <hr className="border w-10 mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
