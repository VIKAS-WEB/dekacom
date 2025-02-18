import React from "react";
import Link from "next/link";
import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import Iphone from "../../../../public/images/HomePageIcone/iphone.png";
import Stars from "../../../../public/images/HomePageIcone/etoile-jaune.png";
import Facebook from "../../../../public/images/socialMediaIcon/facebook.png";
import Instagram from "../../../../public/images/socialMediaIcon/instagram.png";
import TikTok from "../../../../public/images/socialMediaIcon/TikTok.png";
import Youtube from "../../../../public/images/socialMediaIcon/yt.png";

const Footer = () => {
  return (
    <>
      <div className="footer container mx-auto flex flex-col items-center">
        <div className="flex md:flex-row flex-col md:flex-wrap md:items-start md:mx-10   md:w-full w-10/12 lg:w-9/12 lg:mx-auto   lg:justify-around  mx-8 ">
          <div className="flex lg:w-5/12 items-center md:w-4/6  lg:order-3 w-full md:mx-auto ">
            <Image
              alt="iphone image"
              src={Iphone}
              className=" w-4/6	sm:w-full md:w-3/6 lg:w-6/12"
            />
            <div className="lg:w-4/12">
              <Image alt="stars image" src={Stars} />
              <p className="my-4 josefin-medium  text-sm lg:text-base font-bold">
                Télécharger notre <br />
                nouvelle application <br /> SmartReduc
              </p>
              <a
                className=" uppercase bg-[#3ACCE1] text-white rounded-3xl w-full text-sm py-2 px-4  "
                href={
                  "https://annonceurs.ticket-promo.com/landing/app/index.html"
                }
              >
                Découvrir{" "}
              </a>
            </div>
          </div>
          <div className="lg:w-3/12 lg:mt-28 md:w-3/6  md:my-0 my-6 flex flex-col  lg:my-0 lg:h-62">
            <p className="josefin-regular text-lg lg:text-2xl mb-6	">
              Liens utiles
            </p>
            <Link
              href="https://annonceurs.ticket-promo.com/fr/?option=com_neocoupon&view=proregistration&Itemid=302#announcer-top"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Espace annonceurs
            </Link>
            <Link
              href="/mentions-legales"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Mentions légales
            </Link>
            <Link
              href="/condition-dutilisation"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              {"Conditions d'utilisation"}
            </Link>
            <Link
              href="/politique-confidentialite"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/plan_du_site"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Plan du site
            </Link>
          </div>
          <div className="lg:w-3/12 lg:mt-28 lg:h-62 flex md:w-3/6 md:my-0 my-6  flex-col ">
            <p className="josefin-regular text-lg lg:text-2xl mb-6	">
              Contactez nous{" "}
            </p>{" "}
            <Link
              href="/programme-de-fidelite"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Notre programme de fidélité
            </Link>
            <Link
              href="/franchise"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Franchise
            </Link>
            <Link
              href="/contact"
              className="inter-medium lg:text-lg text-base text-stone-500 mb-4"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex  flex-col justify-center   sm:mx-0 mx-8 my-8">
          <p className=" font-bold text-center  inter-bold lg:text-xl uppercase text-stone-500 bb-2 mx-2">
            Nous suivre sur les réseaux
          </p>
          <div className="w-1/2 bg-black h-0.5 flex mx-auto my-4 rounded-2xl"></div>
          <div className="flex flex-row items-center justify-between my-2">
            <a href="https://www.instagram.com/ticket.promo/">
              <Image alt="instagram image" src={Instagram} />{" "}
            </a>
            <a href="https://www.facebook.com/TicketPromoDekacomCroix/?locale=fr_FR">
              <Image alt="facebook image" src={Facebook} />{" "}
            </a>

            <a href="https://www.tiktok.com/@ticket.promo">
              <Image alt="tiktok image" src={TikTok} className="w-[35px] h-8" />{" "}
            </a>
            <a href="https://www.youtube.com/channel/UCJR1CEYVLXlaqGmtJqORhFQ">
              <Image alt="youtube image" src={Youtube} />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-zinc-700 w-full text-white py-6  flex justify-center">
        <p className=" flex  items-center text-center  mx-auto ">
          <span className="text-[#3ACCE1]">Dekacom </span>
          <FaRegCopyright className="mx-2 text-white" /> 2025 SmartReduc
        </p>
      </div>
    </>
  );
};

export default Footer;
