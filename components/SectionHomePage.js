"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Banniere from "/public/images/HomePageIcone/banniere.png";
import BanniereResponsive from "/public/images/HomePageIcone/respon.png";
import Franchise from "/public/images/HomePageIcone/Icon.png";
import Annonceur from "/public/images/HomePageIcone/Groupe 253.png";
import NewsLetter from "/public/images/HomePageIcone/Icon-1.png";

function SectionHomePage() {
  const services = [
    {
      title: "Devenir Franchisé",
      photo: Franchise,
      link: "/franchise",
    },
    {
      title: "Devenir Annonceur",
      photo: Annonceur,
      link: "/contact",
    },
    {
      title: "S'inscrire à la newsletter",
      photo: NewsLetter,
      link: "/contact",
    },
  ];
  return (
    <div className="mx-auto lg:w-9/12 w-full flex flex-col items-center my-8  ">
      <a href="/programme-de-fidelite" className=" cursor-pointer">
        <Image
          alt="banniere"
          src={Banniere}
          width={2000}
          height={1000}
          className="w-full hidden lg:block"
        />
        <Image
          alt="banniere"
          src={BanniereResponsive}
          width={2000}
          height={1000}
          className="w-full block lg:hidden"
        />
      </a>
      <div className="w-10/12  mx-auto flex justify-center ">
        <div className="w-full flex-col justify-center  items-center my-8  flex lg:flex-row lg:justify-evenly">
          {services.map((item, i) => (
            <div
              className="w-60 h-12 justify-center items-center     lg:w-1/3 lg:h-20 mb-4"
              key={i}
            >
              <Link
                href={item.link}
                className="flex  justify-start   items-center lg:w-full  lg:justify-center  "
              >
                <Image
                  src={item.photo}
                  className=" h-8 w-10 "
                  alt="service image"
                />
                <p className="ml-2 text-lg xl:text-xl  JosefinSans-Medium ">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionHomePage;
