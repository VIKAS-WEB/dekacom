"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";

import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineBell,
} from "react-icons/ai";
import DropDownCategories from "@/app/components/DropDownCategories/DropDownCategories";

import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import Connection from "@/app/components/Connection/Connection";
import Modal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useMobileDetect from "@/app/hooks/useMobileDetect ";
import { IoMdClose } from "react-icons/io";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FiUsers, FiSearch } from "react-icons/fi";
import loginIcon from "../../../../public/assets/img/icon/login.png";
import notificationOn from "../../../../public/assets/img/icon/notification.png";
import qrImg from "../../../../public/assets/img/qr_download_app.png";
import { RiMapPin2Fill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import Burger from "../../../../public/assets/img/icon/burger-responsive.png";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import Inscription from "@/app/components/Inscription/Inscription";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(true);
  const { isIos, isAndroid } = useMobileDetect();
  const [showQr, setShowQr] = useState(false);
  const [openModalInscription, setOpenModalInscription] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("token")) {
        setIsConnected(true);
      }
    }
  }, [openModal]);

  const signOut = () => {
    setIsConnected(false);
    window.localStorage.clear();
    router.replace("/");
    router.refresh();
  };

  return (
    <>
      <header className="bg-white hidden lg:block">
        <h1 className=" invisible w-0.5 h-0.5">Bienvenue chez SmartReduc</h1>

        <div className="container mx-auto  ">
          <div className=" flex  justify-end mx-40  pb-2">
            <div
              className={
                showQr
                  ? " box-shadow-black-header-bottom border-0 bg-white border-transparent	rounded-xl rounded-bl-none rounded-br-none w-64	 py-4  cursor-pointer "
                  : "py-4  w-64"
              }
              onClick={() => setShowQr(!showQr)}
            >
              <p className="text-base relative	text-center font-medium	 cursor-pointer  ">
                Télécharger l{"'"}appli SmartReduc
              </p>
              <div
                className={
                  showQr
                    ? "bg-white absolute z-40 border border-transparent box-shadow-black-header-top pb-4	 w-64 rounded-xl rounded-tl-none rounded-tr-none flex flex-col items-center pt-4"
                    : "hidden"
                }
              >
                <Image
                  src="/../../images/logo.png"
                  alt="SmartReduc"
                  className="w-20 mb-8"
                  width={80}
                  height={80}
                />
                <span className="text-sm w-3/4 text-center font-medium ">
                  Scannez le QR CODE <br />
                  et téléchargez l{"'"}application SmartReduc
                </span>
                <Image
                  src={qrImg}
                  alt="qr app SmartReduc"
                  className="   my-6"
                />
                {/* <span className="uppercase bg-[#11AEA4] w-3/4 rounded-3xl py-2 text-white font-medium text-center cursor-pointer">
                  option Sms
                </span> */}
              </div>
            </div>
            {isConnected ? (
              <Link href="/profil-consommateur/favoris">
                <p className="text-base font-medium	  ml-4 py-4">
                  Ma liste de favoris
                </p>
              </Link>
            ) : (
              <p
                className="text-base	font-medium  ml-4 py-4 cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                Ma liste de favoris
              </p>
            )}
            <Link href="/contact">
              <p className="text-base	 font-medium ml-4 py-4">
                Devenir annonceur
              </p>
            </Link>
            <Link href={"/franchise"}>
              <p className="text-base	 font-medium ml-4 py-4 ">
                {" "}
                Devenir franchisé
              </p>
            </Link>{" "}
            <Link href={"/contact"}>
              <p className="text-base	 font-medium ml-4 py-4">Contact</p>
            </Link>{" "}
            <span
              className="cursor-pointer py-4"
              onClick={() => {
                setOpenModalInscription(true);
              }}
            >
              <p className="text-base	 font-medium ml-4">
                {isConnected ? "" : "S'inscrire"}
              </p>
            </span>
          </div>
        </div>
        <hr />

        <div className="top-bar flex p-4  justify-evenly  items-center mx-auto w-9/12  ">
          <div className="w-fit ">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/../../images/logo.png"
                  alt="SmartReduc"
                  className="w-20"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="bg-white w-7/12 relative ">
            <SearchBar />
          </div>
          <div className="cnx-wrapper w-2/12 mt-8">
            <div className="cnx-wrapper flex  justify-start items-baseline">
              <AiOutlineBell className="text-2xl font-bold mr-8" />

              <button
                id="connection-button"
                className="flex  items-baseline  box text-center"
                onClick={() => {
                  isConnected
                    ? router.push("/profil-consommateur")
                    : setOpenModal(true);
                }}
              >
                <FiUsers className="text-2xl font-bold mr-1" />

                <span className="font-semi text-base btn inter-medium font-semibold	 ">
                  {isConnected ? "" : "Connexion"}
                </span>
              </button>
              <button
                className={`${
                  isConnected ? "block" : "hidden"
                } + box text-cente `}
                onClick={signOut}
              >
                <AiOutlinePoweroff className="icon mx-auto text-xl" />
                <span className="font-bold text-sm btn">Déconnexion</span>
              </button>

              <h2 className=" invisible w-1">Espace connexion </h2>
            </div>
          </div>
        </div>
      </header>
      {/**************************** header mobil ***********************************/}
      <div className="header lg:hidden sticky shadow-md top-0 left-0 w-full z-30">
        {isIos() ? (
          <div
            className={`${
              mobileOpen ? "flex" : "hidden"
            } absolute top-0 left-0 w-screen h-20 z-50 bg-white justify-evenly items-center`}
          >
            <div
              className="cursor-pointer text-#a8a8a8 text-xl"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              <IoMdClose />
            </div>
            <div>
              <Image
                src="/../../images/logo.png"
                alt="SmartReduc"
                className="w-14 mx-auto"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col">
              <div className=" text-xs text-center">
                Disponible dans l{"'"}App Store
              </div>
              <div className="flex justify-evenly items-center">
                <div className=" font-bold pr-3 text-xs">SmartReduc</div>
                <div className="flex text-[#f88308] text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
              </div>
            </div>
            <a
              href={"https://apps.apple.com/fr/app/ticket-promo/id1108902091"}
              className="text-[#518fe8] cursor-pointer"
            >
              Ouvrir
            </a>
          </div>
        ) : isAndroid() ? (
          <div
            className={`${
              mobileOpen ? "flex" : "hidden"
            } absolute top-0 left-0 w-screen h-20 z-30 bg-white justify-evenly items-center`}
          >
            <div
              className="cursor-pointer text-#a8a8a8 text-xl"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              <IoMdClose />
            </div>
            <div>
              <Image
                src="/../../images/logo.png"
                alt="SmartReduc"
                className="w-14 mx-auto"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col">
              <div className=" text-xs text-center">
                Disponible dans le Play Store
              </div>
              <div className="flex justify-evenly items-center">
                <div className=" font-bold pr-3 text-xs">SmartReduc</div>
                <div className="flex text-[#f88308] text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />

                  <FaRegStar />
                </div>
              </div>
            </div>
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.quadradiffusion.ticketpromo"
              }
              className="text-[#518fe8] cursor-pointer"
            >
              Ouvrir
            </a>
          </div>
        ) : (
          <></>
        )}
        <div className="w-full z-20 bg-white h-24">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="p-4 text-black text-3xl ">
              {open ? (
                <RiCloseFill
                  onClick={() => setOpen(false)}
                  className="hover:text-[#000000] ease-in-out duration-300"
                />
              ) : (
                ""
              )}
            </div>
            <div className="p-4">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/../../images/logo.png"
                    alt="SmartReduc"
                    className="w-14 mx-auto"
                    width={56}
                    height={56}
                  />
                </Link>
              </div>
            </div>
            <div className="p-4">
              <div className="menu flex  justify-end">
                <div className="humburger text-black text-3xl">
                  <Image
                    alt="burger image"
                    src={Burger}
                    className="hover:text-[#000000] ease-in-out duration-300"
                    onClick={() => setOpen(!open)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="">
          <ul
            className={`p-5 bg-[#ffffff] text-black backdrop-blur absolute w-full z-50 left-0 border-y-2 ease-in-out duration-1000 ${
              open ? "top-24" : "hidden"
            }`}
          >
            <li>
              <button
                className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs "
                onClick={() => {
                  isConnected
                    ? router.push("/profil-consommateur")
                    : setOpenModal(true);
                }}
              >
                {isConnected ? "Mon profil" : "Se connecter"}
              </button>
            </li>
            <li>
              <button
                className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs "
                onClick={() => {
                  isConnected
                    ? router.push("/profil-consommateur")
                    : setOpenModal(true);
                }}
              >
                {isConnected ? "Déconnexion" : "S'inscrire"}
              </button>
            </li>

            {/* <Link href="/">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Séléctionnez votre langue
              </li>
            </Link> */}
            {/* <Link href="/">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Espace Annonceur
              </li>
            </Link> */}
            <hr className="p-3 " />
            {/* <Link href="/">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Les offres pres de chez vous
              </li>
            </Link> */}
            <Link href="/">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Accueil
              </li>
            </Link>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              TÉLÉCHARGER L{"'"}APPLI
            </li>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              MA LISTE DE FAVORI
            </li>
            <Link href="/franchise">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                DEVENIR FRANCHISÉ
              </li>
            </Link>

            <Link href="https://annonceurs.ticket-promo.com/fr/?option=com_neocoupon&view=proregistration&Itemid=302#announcer-top">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Devenir Annonceur
              </li>
            </Link>
            <Link href="/programme-de-fidelite">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Espace fidélité
              </li>
            </Link>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              Espace Annonceur
            </li>
            <Link href="/contact">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                Contact
              </li>
            </Link>
            <hr className="p-3 " />

            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              MENTIONS LÉGALES
            </li>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              CONDITIONS D{"'"}UTILISATION
            </li>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              POLITIQUE DE CONFIDENTIALITÉ
            </li>
            <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
              PLAN DU SITE{" "}
            </li>
            {/* <Link href="/#partner">
              <li className="p-3 w-f hover:bg-[#3ACCE1] hover:text-white uppercase font-semibold text-xs">
                on parle de nous
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Connection openModal={openModal} setOpenModal={setOpenModal} />
      </Modal>
      <Modal
        open={openModalInscription}
        onClose={() => setOpenModalInscription(false)}
      >
        <Inscription setOpenModal={setOpenModalInscription} />
      </Modal>
    </>
  );
};

export default Header;
