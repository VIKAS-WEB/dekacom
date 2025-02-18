"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaAngleRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {
  var pathSegments = usePathname()
    .split("/")
    .filter((segment) => segment);
  if (pathSegments[0] === "Coupon_PDF") {
    pathSegments = ["Coupon_PDF"];
  }
  const crumbs = [
    { title: "Home", path: "/" },
    ...pathSegments.map((segment, index) => ({
      title: segment.includes("-")
        ? segment
            .split("-")
            .slice(1, segment.split("-").length)
            .map((element) =>
              element
                .replace(/^./, element[0]?.toUpperCase())
                .replace("%C3%A9", "é")
                .replace("%C3%94", "Ô")
                .replace("%C2%92", "’")
            )
            .join(" ")
        : segment === "resultats_recherche_coupons"
        ? "Résultats de la recherche"
        : segment === "plan_du_site"
        ? "Plan du site"
        : segment === "Coupon_PDF"
        ? "PDF du coupon"
        : segment.replace(/^./, segment[0].toUpperCase()),
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <div className="bg-[#F4F4F7] p-3 lg:block hidden">
      <div className="container mx-auto ">
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb flex flex-row  items-center ">
            {crumbs.map((crumb, index) => (
              <li
                className="breadcrumb-item   items-center  flex flex-row"
                key={index}
              >
                {index === 0 ? (
                  <Link
                    href={crumb.path}
                    className="flex  justify-evenly items-center	"
                  >
                    <FaHome className="text-gray-800 mr-2 hover:text-[#3ACCE1]" />
                    {/* <FaAngleRight className=" mr-2 text-[#BCBCBC]  text-xs	" />
                    <span className="inter-regular hover:text-[#3ACCE1]  text-[#75787B] text-xs">
                      Accueil SmartReduc
                    </span>{" "} */}
                    {/* Use your home icon here */}
                  </Link>
                ) : (
                  <>
                    <span className="breadcrumb-separator  inter-regular  text-[#75787B] text-xs">
                      <FaAngleRight className=" mx-2 text-[#BCBCBC]  text-xs	" />
                    </span>
                    {crumb.path ? (
                      <Link
                        className="breadcrumb-separator inter-regular  text-[#75787B] text-xs hover:text-[#3ACCE1]"
                        href={crumb.path}
                        // href={"#"}
                      >
                        {crumb.title}
                      </Link>
                    ) : (
                      <span className="inter-regular  text-[#75787B] text-xs">
                        {crumb.title}
                      </span>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
