"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import PhotosCoupon from "./PhotosCoupon";
import Listavis from "./Listavis";
import AvisDetails from "./AvisDetails";
import GoogleMap from "./GoogleMap ";
import Link from "next/link";
import Calendar from "./Calendar";
import AddressMap from "./AddressMap";
import Modal from "@/app/components/Modal/Modal";
import DownloadCoupon from "@/app/components/DownloadCoupon/DownloadCoupon";
import Image from "next/image";
import VoteDetails from "./VoteDetails";
import ShareDetails from "./ShareDetails";
import { MdArrowDownward } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiNotepad, BiShare } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiHeartFill, BiSolidHeart } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { TbPhoneCalling } from "react-icons/tb";
import { RiTextDirectionL } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import Connection from "@/app/components/Connection/Connection";
import "../src/app/globals.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BiDownload } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { parseStringPromise, parseString } from "xml2js";

// import { useRouter } from 'next/router';
const CouponDetails = ({
  allCouponInformation,
  avisData,
  votesData,
  hourData,
}) => {
  const [nbDownloads, setNbDownloads] = useState(
    allCouponInformation.stats.nb_downloads
  );
  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModalLogin, setOpenModallogin] = useState(false);
  const [openmodalAvis, setOpenModalAvis] = useState(false);
  const [openmodalVote, setopenModalVote] = useState(false);
  const [openmodalRes, setopenModalRes] = useState(false);
  const [openModalShare, setOpenModalShare] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [favoris, setFavoris] = useState(false);
  const [distance, setDistance] = useState(0);
  const detailsRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    getUserLocation();

    checkTokenAndFavoris();
  }, [openModalLogin]);
  const checkTokenAndFavoris = async () => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("token");
      setUserToken(token);

      if (token) {
        try {
          const endpointToken = `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}token/refresh-token`;
          const tokenResponse = await axios.post(
            endpointToken,
            {}, // No body is needed since the token will be in the headers
            {
              headers: {
                Authorization: token, // Pass token in the Authorization header
              },
            }
          );

          // Assuming the new endpoint returns JSON (no XML parsing needed)
          const result = tokenResponse.data;
          if (!result) {
            setIsConnected(false);
            window.localStorage.removeItem("token");
          } else {
            setIsConnected(true);
            checkFavoris(token); // Proceed with checking favorites
          }
        } catch (error) {
          console.error("Error checking token validity:", error);
          setIsConnected(false);
        }
      }
    } else {
      setIsConnected(false);
    }
  };

  const checkFavoris = async (token) => {
    try {
      const endpointFavoris = `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}coupons/checkFavorite`;

      const favorisResponse = await axios.post(
        endpointFavoris,
        { coupon_id: coupon.coupon_id }, // Send coupon ID in the body as JSON
        {
          headers: {
            Authorization: token, // Pass token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the new endpoint returns JSON (no XML parsing needed)
      const result = favorisResponse.data;
      setFavoris(result);
    } catch (error) {
      console.error("Error checking favoris:", error);
    }
  };

  const favorisOnClick = async () => {
    if (!isConnected) {
      setOpenModallogin(true);
      return;
    }

    try {
      const endPoint = process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL;
      const bodyData = {
        coupon_id: coupon.coupon_id,
      };
      const url = favoris
        ? `${endPoint}coupons/removeFavorite`
        : `${endPoint}favorie/add-favorite-coupon`;

      const response = await axios.post(url, bodyData, {
        headers: {
          Authorization: userToken,
        },
      });

      setFavoris(!favoris);
    } catch (error) {
      console.error("Error handling favorite:", error);
    }
  };

  function formatDateToShortDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  function formatHours(hoursString) {
    hoursString =
      hoursString?.replace("<![CDATA[", "")?.replace("]]>", "") ?? "";

    const regex = /(\w{3})\s*:\s*(\d{2}h(?:\d{2})?)-(\d{2}h(?:\d{2})?)/g;

    const dayMapping = {
      LUN: "Lundi",
      MAR: "Mardi",
      MER: "Mercredi",
      JEU: "Jeudi",
      VEN: "Vendredi",
      SAM: "Samedi",
      DIM: "Dimanche",
    };

    const formattedHours = hoursString.replace(
      regex,
      (_, day, opening, closing) => {
        const formattedDay = dayMapping[day];
        return `${formattedDay} : ${opening} - ${closing}`;
      }
    );

    return formattedHours;
  }
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLat(position.coords.latitude);
          setUserLng(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 60000,
          distanceFilter: 20,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const hoursString = allCouponInformation.coupon.trademark.shops[0].hours;
  const formattedHours = formatHours(hoursString);

  const coupon = allCouponInformation.coupon;
  const stats = allCouponInformation.stats;
  const validity = allCouponInformation.coupon.validity;
  const shop = allCouponInformation.coupon.trademark.shops[0];
  const category = allCouponInformation.coupon.category;
  const avg = stats.avg_votes != null ? parseFloat(stats.avg_votes) : 0;
  const formattedAvgVotes = isNaN(avg) ? "0" : avg.toFixed(1);
  const avgVotes = String(formattedAvgVotes)?.replace(/\.0$/, "") ?? "";
  const photoOfShop = shop.photos;

  //Function to calculate the number of media
  const mediaNbr = () => {
    if (photoOfShop && shop.video) {
      return photoOfShop.length + 1;
    } else if (photoOfShop && !shop.video) {
      return photoOfShop.length;
    } else if (!photoOfShop && !shop.video) {
      return 0;
    } else return 1;
  };

  const name =
    coupon.tr_name
      ?.replace(/\x92/g, "'")
      ?.replace(/<\/?[^>]+(>|$)/g, "")
      ?.replace(/&[^;]+;/g, "") ?? "";
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const p = 0.017453292519943295;
    const c = Math.cos;
    const a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    const calculatedDistance = (1000 * 12742 * Math.asin(Math.sqrt(a))).toFixed(
      0
    );
    setDistance(calculatedDistance);
  };
  useEffect(() => {
    calculateDistance(
      parseFloat(shop.lat),
      parseFloat(shop.lng),
      parseFloat(userLat),
      parseFloat(userLng)
    );
  }, [userLat, userLng]);

  const descriptionShops = coupon.descriptionCoupon;
  const formattedStartDate = formatDateToShortDate(validity.start);
  const formattedEndDate = formatDateToShortDate(validity.end);

  const [activeTab, setActiveTab] = useState(1);

  const [switched, setSwitched] = useState(false);
  const SwitchButtons = () => {
    return (
      <>
        <div className="w-full mt-12">
          {content[switched ? "Videos" : "Photos"]}
          <PhotosCoupon couponData={allCouponInformation} />
        </div>
      </>
    );
  };

  const content = {
    Photos: (
      <div className="px-4 max-w-4xl m-auto">
        {/* <PhotosCoupon couponid={couponid} /> */}
      </div>
    ),
    // Videos: (
    //   <div className="mx-auto m-auto w-84 text-center">

    //     {shop.video && (
    //       <div>
    //         <p>vedio</p>
    //         <iframe
    //           className="m-auto max-w-full w-64 md:w-3/4 md:h-72 lg:w-76"
    //           src={`https://www.youtube.com/embed/${extractVideoId(
    //             shop.video
    //           )}`}
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //           title={trademark.name}
    //         ></iframe>
    //       </div>
    //     )}
    //   </div>
    // ),
  };

  const tabContents = [
    {
      id: 1,
      title: "Carte",
      description: <GoogleMap shop={shop} mapId="Map" />,
    },
    {
      id: 2,
      title: "Avis",
      nbr: stats.nb_comments,

      description: (
        <>
          <Listavis couponid={allCouponInformation} avisData={avisData} />
        </>
      ),
    },
    {
      id: 3,
      title: "Photo et vidéo de l’enseigne",
      description: <>{SwitchButtons()}</>,
      nbr: mediaNbr(),
    },
  ];

  // Fonction pour générer les étoiles colorées en fonction de la note
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starCharacter = i <= avgVotes ? "★" : "☆";
      stars.push(
        <span key={i} style={{ color: "rgb(250 204 21)", fontSize: "20px" }}>
          {starCharacter}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div>
        <h2 className=" invisible w-0.5 h-0.5 ">Coupon de réduction {name} </h2>
        <div className="mx-auto container section_Coupon_details">
          <div className="p-0 md:p-2 lg:p-4 md:block lg:flex lg:flex-row md:flex-row items-start">
            <section className="w-full md:w-full lg:w-2/3 p-2">
              <div className="border-0  md:border-2  lg:border-2 pb-4 border-[#EAEAEA] rounded-md">
                <div className="flex justify-center items-center">
                  <img
                    src={`https://annonceurs.ticket-promo.com/ws/images/coupons/${coupon.coupon_id}.jpg`}
                    alt={name}
                    className="picture_details"
                    width={250}
                    height={400}
                  />
                </div>
                <div className="block md:hidden lg:hidden mx-4">
                  <div className="mt-7">
                    <button
                      className="w-full inline-block bg-[#3ACCE1]  rounded-sm font-bold text-white px-4 py-3 text-center cursor-pointer"
                      onClick={() => {
                        setOpenModal(true);
                        setNbDownloads((nbDownloads) => nbDownloads + 1);
                      }}
                    >
                      Utiliser ce coupon
                    </button>
                  </div>

                  <div className="flex flex-wrap justify-between items-center mt-7 mb-4 gap-4">
                    {/* Éléments à gauche */}
                    <div className="flex gap-3 flex-row items-center">
                      <div className="flex gap-3 flex-row items-center">
                        <div
                          className="text-center text-xs m-1"
                          onClick={() => {
                            if (shop.booking == "1") {
                              if (!isConnected) {
                                setOpenModallogin(true);
                                return;
                              }
                              setopenModalRes(true);
                            }
                          }}
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            <BiNotepad
                              className={` text-9xl ${
                                shop.booking == "1"
                                  ? "text-[#a2a6a3]"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>

                          <span
                            style={{ fontSize: "10px" }}
                            className={`text-center cursor-pointer  font-normal underline ${
                              shop.booking == "1"
                                ? "text-[#3ACCE1]"
                                : "text-gray-400"
                            }`}
                          >
                            Réserver
                          </span>
                        </div>
                        <div
                          onClick={() => {
                            if (!isConnected) {
                              setOpenModallogin(true);
                              return;
                            }
                            setopenModalVote(true);
                          }}
                          className="text-center text-xs cursor-pointer"
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            <BiSolidStar className="text-black text-9xl" />
                          </div>
                          <span className=" text-xs text-center cursor-pointer text-[#3ACCE1] font-normal underline">
                            Voter
                          </span>
                        </div>
                        <div
                          className="text-center text-xs m-1"
                          onClick={() => {
                            setOpenModalShare(true);
                          }}
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            <BiShare className="text-[#a2a6a3] text-9xl" />
                          </div>

                          <span
                            style={{ fontSize: "10px" }}
                            className="text-center cursor-pointer text-[#a2a6a3] font-normal underline"
                          >
                            Partager
                          </span>
                        </div>
                        <div
                          className="text-center text-xs m-1"
                          onClick={() => {
                            setOpenModal(true);
                            setNbDownloads(
                              (nbDownloads) => parseInt(nbDownloads) + 1
                            );
                          }}
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            <BiDownload className="text-[#a2a6a3] text-9xl" />
                          </div>

                          <span
                            style={{ fontSize: "10px" }}
                            className="text-center cursor-pointer text-[#a2a6a3] font-normal underline"
                          >
                            Télécharger
                          </span>
                        </div>
                        <div
                          className="text-center text-xs m-1"
                          onClick={() => {
                            if (!isConnected) {
                              setOpenModallogin(true);
                              return;
                            }
                            setopenModalVote(true);
                          }}
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            <BiSolidStar className="text-[#a2a6a3] text-9xl" />
                          </div>
                          <span
                            style={{ fontSize: "10px" }}
                            className=" text-center cursor-pointer text-[#a2a6a3] font-normal underline"
                          >
                            Voter
                          </span>
                        </div>
                        <div
                          onClick={favorisOnClick}
                          className="text-center text-xs cursor-pointer m-1"
                        >
                          <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                            {favoris ? (
                              <BiSolidHeart className="text-red-500 text-9xl" />
                            ) : (
                              <BiHeart className="text-black text-9xl" />
                            )}
                          </div>
                          <span
                            style={{ fontSize: "10px" }}
                            className=" text-center cursor-pointer text-[#a2a6a3] font-normal underline"
                          >
                            Favoris
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-xs categorie">
                      <Link
                        href={`/categories/${category.id}-${category.alias}`}
                      >
                        <Image
                          src={`https://annonceurs.ticket-promo.com/images/categories/promo-${category.alias}.svg`}
                          alt={`Icon for ${category.name}`}
                          className=" w-14 h-14 mx-auto icon-sdeabr mb-1 bg-[#3ACCE1] rounded-full p-3 cursor-pointer "
                          width={14}
                          height={14}
                        />
                        <div className="text-center cursor-pointer text-[#a2a6a3] font-normal underline txtcategorie">
                          {category.name}
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-between mx-auto mb-2">
                    <div>
                      <div className="text-2xl font-semibold text-[#273B60]">
                        {name}
                      </div>
                    </div>
                    <div>
                      <div className="text-center"></div>
                    </div>
                  </div>

                  <div className="flex flex_row items-center">
                    <div className=" inline-block mr-2">
                      <div className="  text-black  text-xs">
                        Durée de validité:
                      </div>
                    </div>
                    <div className="font-bold text-black text-xs">
                      :<span> {formattedStartDate} </span>
                      <span className="px-0.5"> au </span>
                      <span> {formattedEndDate} </span>
                    </div>
                  </div>
                  {/* <div className="font-bold text-black text-xs mt-2">
                    <span> {formattedStartDate} </span>
                      <span className="px-0.5"> au </span>
                      <span> {formattedEndDate} </span>
                    </div> */}
                  <div className="flex mr-10">{renderStars()}</div>
                  <div className="flex justify-between items-center mt-1.5 gap-4">
                    {/* Éléments à gauche */}
                    <div className="flex gap-4">
                      <div
                        className="bg-[#3ACCE1] pt-2 pb-0.5 px-3 rounded-md"
                        onClick={() => {
                          if (!isConnected) {
                            setOpenModallogin(true);
                            return;
                          }
                          setOpenModalAvis(true);
                        }}
                      >
                        <Image
                          src="/assets/img/icon_comment.png"
                          width={18}
                          height={14}
                          alt="commeantaire"
                        />
                        <p className="text-white font-bold text-xs mb-0 mt-0.5 text-center">
                          {stats.nb_comments}
                        </p>
                      </div>
                      <div className="border border-1 pt-2 pb-0.5 px-3 rounded-md">
                        <Image
                          src="/assets/img/eyes_black.svg"
                          width={18}
                          height={14}
                          alt="view"
                        />
                        <p className="font-bold text-xs mb-0.5 mt-1 text-center">
                          {stats.nb_views}
                        </p>
                      </div>
                      <div className="border border-1 pt-1 px-3 rounded-md">
                        <Image
                          src="/assets/img/download1.svg"
                          width={18}
                          height={14}
                          alt="view"
                        />
                        <p className="font-bold text-xs mb-0.5 mt-1 text-center">
                          {nbDownloads}
                        </p>
                      </div>
                    </div>

                    {/* Éléments à droite */}
                    {/* <Link href="/contact">
                      <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md border border mb-2 md:mb-0 md:mr-2 btn-style">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        
                          <RiMessage2Line style={{ fontSize: "20" }} />
                        </svg>
                        <span className="font-bold text-xs">Contact</span>
                      </button>
                    </Link> */}
                  </div>

                  <div className="flex flex-wrap justify-between items-center mt-5">
                    {/* <a href={`tel:${shop.phone}`}>


                      <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md  border mb-2 md:mb-0 md:mr-2 btn-style">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                       
                          <TbPhoneCalling style={{ fontSize: "20" }} />
                        </svg>
                        <span
                          className="font-bold text-xs"

                        >
                          Appeler
                        </span>
                      </button>
                    </a> */}
                    {shop.phone ? (
                      <a href={`tel:${shop.phone}`}>
                        <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <TbPhoneCalling style={{ fontSize: "20" }} />
                          </svg>
                          <span className="font-bold text-xs">Appeler</span>
                        </button>
                      </a>
                    ) : (
                      <button
                        className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style-disabled"
                        disabled
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <TbPhoneCalling style={{ fontSize: "20" }} />
                        </svg>
                        <span className="font-bold text-xs text-gray-500">
                          Appeler
                        </span>
                      </button>
                    )}

                    {/* <a href={shop.facebook_link} target="_blank" rel="noopener noreferrer">
                    facebook annonceur
                    </a> */}
                    {shop.facebook_link ? (
                      <a
                        href={shop.facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <FaFacebookF style={{ fontSize: "20" }} />
                          </svg>
                          <span className="font-bold text-xs">Facebook</span>
                        </button>
                      </a>
                    ) : (
                      <button
                        className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style-disabled"
                        disabled
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <FaFacebookF style={{ fontSize: "20" }} />
                        </svg>
                        <span className="font-bold text-xs text-gray-500">
                          Facebook
                        </span>
                      </button>
                    )}
                    {/*                     

                    <a href="https://www.facebook.com/TicketPromoDekacomCroix/?locale=fr_FR">
                      <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md  border mb-2 md:mb-0 md:mr-2 btn-style">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <FaFacebookF style={{ fontSize: "20" }} />
                        </svg>
                        <span className="font-bold text-xs">Facebook</span>
                      </button>
                    </a> */}
                    {shop.web_link ? (
                      <Link href={shop.web_link} target="_blank">
                        <button className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <CiShop
                              style={{ fontSize: "23", marginTop: "5px" }}
                            />
                          </svg>
                          <span className="font-bold text-xs">Boutique</span>
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="flex items-center space-x-2 text- px-4 py-2 rounded-md border mb-2 md:mb-0 md:mr-2 btn-style-disabled"
                        disabled
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <CiShop
                            style={{ fontSize: "23", marginTop: "5px" }}
                          />
                        </svg>
                        <span className="font-bold text-xs text-gray-500">
                          Boutique
                        </span>
                      </button>
                    )}
                  </div>

                  {/* <div className="flex justify-between items-center mt-5">
                    <div >
                 
                     

                      {shop.phone ? (
                        <div className="flex items-center">
                          <p className="text-[#273B60] font-bold pr-5">{shop.phone}</p>
                          <a href="https://www.facebook.com/TicketPromoDekacomCroix/?locale=fr_FR">
                            <FaFacebookF className="p-1 text-3xl h-8 w-8 bg-blue-500 text-white hover:bg-[#000000] ease-in-out duration-300 border rounded-full cursor-pointer" />
                          </a>
                        </div>
                      ) : null}
                    </div>


                    <div>
                      {shop.web_link ? (
                        <div>
                          <Link
                            className="ml-1 font-bold font-sans text-[#064291] hover:text-[#046281] transition-colors duration-300"
                            href={shop.web_link}
                            target="_blank"


                          >
                            Site de l{"'"}annonceur
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>  */}
                  {/** */}
                  <div className="flex flex-col sm:flex-row justify-between mt-5">
                    <div className="my-2 mb-3 flex items-center justify-center space-x-2 sm:mr-1">
                      <div className="flex flex-col items-center justify-center w-full sm:w-40">
                        <>
                          <p className="text-sm font-bold text-[#3ACCE1]">
                            {shop.city_name}
                          </p>
                          <p className="text-xs font-normal text-center text-[#75787B]">
                            Itinéraire
                          </p>
                        </>
                      </div>

                      <hr className="border-l-2 h-10 border-gray-300 mt-1 ml-1 sm:rotate-0 sm:ml-0 sm:mr-1" />
                      <div className="flex flex-col items-center justify-center w-full sm:w-40">
                        <p className="text-sm font-bold text-[#3ACCE1]">
                          {distance / 1000} km
                        </p>
                        <p className="text-xs font-normal text-center text-[#75787B]">
                          Distance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className=" shadow-md px-4 rounded-xl  py-4 font-light text-sm">
                      <p className="font-bold mb-1 text-black">Description :</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: descriptionShops,
                        }}
                      />
                    </div>
                  </div>
                  <div className="rounded-md mt-5 py-2">
                    <div className=" rounded-md shadow-lg text-center py-4">
                      <p className="text-xs text-black ">
                        {" "}
                        Voici votre itinéraire pour vous rendre à :
                      </p>
                      <span className="text-sm text-[#000000] ">
                        {" "}
                        {" " + shop.address}
                      </span>
                    </div>
                    <IoMdArrowDropdown className="text-center -mt-[0.70rem] text-white text-3xl mx-auto" />
                    <AddressMap shop={shop} mapId="Map3" />
                    <p className="text-center font-normal text-sm mt-2">
                      Vous êtes à
                      <span className="text-[#3ACCE1] font-bold">
                        {" " + distance / 1000} km{" "}
                      </span>
                      de
                      <span className="text-[#3ACCE1] font-bold">
                        {" " + shop.address}
                      </span>
                    </p>
                  </div>
                </div>
                <div className=" hidden md:flex md:flex-row lg:flex lg:flex-row justify-between items-center px-3  mt-4">
                  <div className="flex justify-center flex-row items-center space-x-6  mb-0 lg:mb-0 md:mb-0">
                    <Image
                      src={`https://annonceurs.ticket-promo.com/ws/images/shops/${shop.logo}`}
                      alt="Icon"
                      width={90}
                      height={90}
                      className="hidden md:block lg:block"
                    />

                    <div className="ml-0.5 text-sm flex">
                      <Image
                        src="/assets/img/eyes.svg"
                        alt="view"
                        width={20}
                        height={14}
                      />
                      <p className="text-[#3ACCE1] font-bold ml-1">
                        {stats.nb_views}
                      </p>
                    </div>
                    <div className="ml-0.5 text-sm flex">
                      <div
                        className="text-center cursor-pointer text-[#3ACCE1] font-normal underline"
                        onClick={() => {
                          if (!isConnected) {
                            setOpenModallogin(true);
                            return;
                          }
                          setOpenModalAvis(true);
                        }}
                      >
                        <span className="ml-2 text-base text-center flex items-center gap-1">
                          <Image
                            src="/assets/img/commentaire.svg"
                            alt="nombre de commentaire"
                            width={21}
                            height={19}
                          />
                          {stats.nb_comments}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm gap-1">
                        <Image
                          src="/assets/img/star-filled-number.svg"
                          width={21}
                          height={19}
                          alt="nombre de vote"
                        />
                        <p className="ml-1 mt-1"> {avgVotes} </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row  md:space-x-5 items-center justify-center">
                    {/*Share Coupon*/}
                    <div
                      className="text-center text-xs cursor-pointer"
                      onClick={() => {
                        setOpenModalShare(true);
                      }}
                    >
                      <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                        <BiShare className="text-black text-9xl" />
                      </div>
                      <span
                        style={{ fontSize: "10px" }}
                        className="text-xs text-center cursor-pointer text-[#3ACCE1] font-normal underline"
                      >
                        Partager
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setOpenModal(true);
                        setNbDownloads(
                          (nbDownloads) => parseInt(nbDownloads) + 1
                        );
                      }}
                      className="text-center text-xs cursor-pointer"
                    >
                      <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                        <BiDownload className="text-black text-9xl" />
                      </div>
                      <span className="text-xs text-center cursor-pointer text-[#3ACCE1] font-normal underline">
                        {nbDownloads}
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        if (shop.booking == "1") {
                          if (!isConnected) {
                            setOpenModallogin(true);
                            return;
                          }
                          setopenModalRes(true);
                        }
                      }}
                      className="text-center text-xs cursor-pointer"
                    >
                      <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                        <BiNotepad className="text-black text-9xl" />
                      </div>
                      <span
                        className={`text-xs text-center cursor-pointer font-normal underline ${
                          shop.booking == "1"
                            ? "text-[#3ACCE1]"
                            : "text-gray-400"
                        }`}
                      >
                        Réserver
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        if (!isConnected) {
                          setOpenModallogin(true);
                          return;
                        }
                        setopenModalVote(true);
                      }}
                      className="text-center text-xs cursor-pointer"
                    >
                      <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                        <BiSolidStar className="text-black text-9xl" />
                      </div>
                      <span className=" text-xs text-center cursor-pointer text-[#3ACCE1] font-normal underline">
                        Voter
                      </span>
                    </div>
                    <div
                      onClick={favorisOnClick}
                      className="text-center text-xs cursor-pointer"
                    >
                      <div className="border border-black rounded-full w-10 h-10 p-2 mb-0.5 mx-auto flex items-center justify-center">
                        {favoris ? (
                          <BiSolidHeart className="text-red-500 text-9xl" />
                        ) : (
                          <BiHeart className="text-black text-9xl" />
                        )}
                      </div>
                      <span className="text-xs text-center cursor-pointer text-[#3ACCE1] font-normal underline">
                        Favoris
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Modal
                    open={openModalLogin}
                    onClose={() => setOpenModallogin(false)}
                  >
                    <Connection
                      openModal={openModalLogin}
                      setOpenModal={setOpenModallogin}
                    />
                  </Modal>
                </div>
                <div className=" hidden md:block lg:block p-2 lg:md-[80%] md:w-[80%] w-full mx-auto mt-5 lg:mt-0 md:mt-0">
                  <div className="flex flex_row items-center mb-10 -mt-4  ml-7">
                    <div className=" inline-block mr-2">
                      <div className="md:bg-[#000000] lg:bg-[#000000] bg-none  text-black  md:text-white lg:text-white rounded-sm px-1 text-sm py-1 md:px-5 md:py-1 lg:px-5 lg:py-1 ">
                        Durée de validité
                      </div>
                    </div>
                    <div className="font-bold text-[#273B60]">
                      :<span> {formattedStartDate} </span>
                      <span className="px-0.5"> au </span>
                      <span> {formattedEndDate} </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-semibold text-[#273B60] mb-2">
                      {name}
                    </div>
                    <div className="text-[#75787B] text-base">
                      {/* <div dangerouslySetInnerHTML={{ __html: descriptionShops }} /> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            descriptionShops
                              ?.replace(/<h6>(.*?)<\/h6>/g, "")
                              ?.replace(/<h5>(.*?)<\/h5>/g, "")
                              ?.replace(/<h4>(.*?)<\/h4>/g, "")
                              ?.replace(/<h3>(.*?)<\/h3>/g, "")
                              ?.replace(/<h2>(.*?)<\/h2>/g, "")
                              ?.replace(/<h1>(.*?)<\/h1>/g, "") ?? "",
                        }}
                      />
                      {name == name && (
                        <h4
                          style={{ paddingTop: "10px", paddingBottom: "10px" }}
                        >
                          Téléchargez le coupon pour profiter de cette offre !
                        </h4>
                      )}
                    </div>

                    {/* <div className="text-[#75787B] text-base">
                      <div
                        dangerouslySetInnerHTML={{ __html: descriptionShops }}
                      />
                    </div> */}
                  </div>

                  <div className="mt-7" style={{ marginTop: "0rem" }}>
                    <div
                      className="w-full inline-block bg-[#3ACCE1]  rounded-md text-white px-4 py-2 text-center cursor-pointer"
                      onClick={() => {
                        setOpenModal(true);
                        setNbDownloads(
                          (nbDownloads) => parseInt(nbDownloads) + 1
                        );
                      }}
                    >
                      Utiliser ce coupon
                    </div>
                  </div>
                </div>
                <div className="p-2 mt-5 hidden md:block lg:block">
                  <div className="flex space-x-1 border-b-2 border-[#000000]">
                    {tabContents.map((tab, i) => (
                      <button
                        key={tab.id}
                        className={`${
                          activeTab === tab.id
                            ? "bg-[#000000] text-white rounded-t-lg"
                            : "bg-white rounded-t-lg border-1 border-[#eaeaea] border text-[#111111]"
                        } px-3 py-1 md:px-6 md:py-3 lg:px-6 lg:py-3 ${
                          tab.id === 1
                            ? "rounded-t-lg"
                            : tab.id === tabContents.length
                            ? "rounded-t-lg"
                            : ""
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.nbr !== undefined
                          ? `${tab.title} (${tab.nbr})`
                          : tab.title}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    {tabContents.map((tab) => (
                      <div
                        key={tab.id}
                        className={`${
                          activeTab === tab.id ? "block" : "hidden"
                        }`}
                      >
                        <div className=" mx-4">{tab.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className=" hidden md:block lg:block  w-full md:w-full lg:w-2/6 p-2 ">
              <div className="border-2 border-[#EAEAEA] pb-4 rounded-md">
                <AddressMap shop={shop} mapId="Map2" />
                <div className="mt-4">
                  <>
                    <p className="text-center font-normal text-base">
                      Vous êtes à
                      <span className="text-[#3ACCE1] font-bold">
                        {" " + distance / 1000} km{" "}
                      </span>
                      de
                      <span className="text-[#3ACCE1] font-bold">
                        {" " + shop.address}
                      </span>
                    </p>
                  </>
                </div>
                <div className="mt-7 px-5">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center  text-[#111111] text-xl md:text-2xl lg:text-2xl font-normal">
                      Informations
                      <hr className="flex w-8 h-1 mt-2 ml-3 rounded-md bg-[#000000]" />
                    </div>
                    <Link href={`/categories/${category.id}-${category.alias}`}>
                      <div className="text-center">
                        <Image
                          src={`https://annonceurs.ticket-promo.com/images/categories/promo-${category.alias}.svg`}
                          alt={`Icon for ${category.name}`}
                          className=" w-14 h-14 mx-auto icon-sdeabr mb-1 bg-[#3ACCE1] rounded-full p-3 cursor-pointer "
                          width={0}
                          height={0}
                        />
                        <p className="text-[#273B60] font-bold text-xs md:text-sm lg:text-sm">
                          {category.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <div className="flex">
                      <Image
                        src="/assets/img/icons_marker.png"
                        alt="Icon 3"
                        className="mr-2 w-5"
                        width={20}
                        height={20}
                      />
                      <p className="text-[#75787B] text-sm">{shop.address} </p>
                    </div>
                    <div className="px-4 my-2 mb-3 flex items-center justify-start ml-4 space-x-6 flex-row">
                      <div>
                        <p className="text-base font-bold text-[#3ACCE1]">
                          {shop.city_name}
                        </p>
                        <p className="text-xs font-normal text-center text-[#75787B]">
                          Itinéraire
                        </p>
                      </div>
                      <hr className="border-l-2 h-10 border-gray-300 mt-1 ml-3 rotate-180" />
                      <div>
                        <>
                          <p className="text-base font-bold text-[#3ACCE1]">
                            {distance / 1000} km
                          </p>
                          <p className="text-xs font-normal text-center text-[#75787B]">
                            Distance
                          </p>
                        </>
                      </div>
                    </div>
                    <div className="mt-6">
                      {shop.phone ? (
                        <div className="flex">
                          <Image
                            src="/assets/img/icon_phone.png"
                            alt="Icon 3"
                            className="mr-2 w-5"
                            width={20}
                            height={20}
                          />
                          <p className="text-[#75787B] text-sm">{shop.phone}</p>
                        </div>
                      ) : null}
                      <div className="mt-6">
                        <div className="flex items-center mb-2">
                          <Image
                            src="/assets/img/icon_horloge.png"
                            alt="Icon 3"
                            className="mr-2 w-4 h-4"
                            width={16}
                            height={16}
                          />
                          <p className="text-lg font-bold text-[#3ACCE1]">
                            Horaires ouvertures :
                          </p>
                        </div>
                        <p className=" ml-6 text-base text-[#75787B]">
                          {formattedHours}
                        </p>
                      </div>
                      {shop.web_link ? (
                        <div className="mt-6 flex items-center">
                          <Image
                            src="/assets/img/icon_world.png"
                            alt="Icon 3"
                            className="mr-2 w-4 h-4"
                            width={16}
                            height={16}
                          />
                          <Link
                            className=" ml-1 text-sm text-[#064291]"
                            href={shop.web_link}
                            target="blank"
                          >
                            site de l{"'"}annonceur
                          </Link>
                        </div>
                      ) : null}
                      <div className="mt-6 flex items-center">
                        <Image
                          src="/assets/img/icon_contact.png"
                          alt="Icon 3"
                          className="mr-4 w-4 h-4"
                          width={16}
                          height={16}
                        />
                        <Link
                          href="/contact"
                          className=" bg-[#3ACCE1] rounded-md text-white px-4 py-2"
                        >
                          Contactez-nous
                        </Link>
                      </div>
                      <div className="mt-8">
                        <div className="flex items-center  text-[#111111] text-xl md:text-2xl lg:text-2xl font-normal mb-3">
                          Suivez-nous !
                          <hr className="flex w-8 h-1 mt-2 ml-3 rounded-md bg-[#000000]" />
                        </div>
                        <div className="flex max-w-5xl:justify-center my-2">
                          <a href="https://www.facebook.com/TicketPromoDekacomCroix/?locale=fr_FR">
                            <FaFacebookF className="p-1 text-3xl  m-2 bg-[#3ACCE1] text-[#ffffff] hover:bg-[#000000] ease-in-out duration-300 border rounded-full cursor-pointer" />
                          </a>
                          <a href="https://www.instagram.com/ticket.promo/">
                            <FaInstagram className="p-1 text-3xl  m-2 bg-[#3ACCE1] text-[#ffffff] hover:bg-[#000000] ease-in-out duration-300 border rounded-full cursor-pointer" />
                          </a>
                          <a href="https://twitter.com/ticketpromo_app/with_replies">
                            <FaTwitter className="p-1 text-3xl  m-2 bg-[#3ACCE1] text-[#ffffff] hover:bg-[#000000] ease-in-out duration-300 border rounded-full cursor-pointer" />
                          </a>
                          <a href="https://www.youtube.com/channel/UCJR1CEYVLXlaqGmtJqORhFQ">
                            <FaYoutube className="p-1 text-3xl  m-2 bg-[#3ACCE1] text-[#ffffff] hover:bg-[#000000] ease-in-out duration-300 border rounded-full cursor-pointer" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"coupon"}
        classe={"coupon"}
      >
        <DownloadCoupon
          couponData={allCouponInformation}
          name={name}
          isConnected={isConnected}
          setOpenModal={setOpenModal}
          open={openModal}
        />
      </Modal>
      <Modal
        open={openmodalAvis}
        onClose={() => setOpenModalAvis(false)}
        maxWidth="avis"
        title="avis"
        classe="avis"
      >
        <AvisDetails
          couponData={allCouponInformation}
          avisData={avisData}
          setOpenModalAvis={setOpenModalAvis}
        />
      </Modal>
      <Modal
        open={openmodalVote}
        onClose={() => setopenModalVote(false)}
        maxWidth="vote "
        title="vote"
        classe="vote"
      >
        <VoteDetails
          votesData={votesData}
          couponData={allCouponInformation}
          setopenModalVote={setopenModalVote}
        />
      </Modal>
      <Modal
        open={openmodalRes}
        onClose={() => setopenModalRes(false)}
        maxWidth="calender"
        title="calender"
        classe="calender"
      >
        <Calendar
          couponData={allCouponInformation}
          hourData={hourData}
          setopenModalRes={setopenModalRes}
        />
      </Modal>
      <Modal
        open={openModalShare}
        onClose={() => setOpenModalShare(false)}
        title="share"
        classe="share"
      >
        <ShareDetails couponData={allCouponInformation} />
      </Modal>
    </>
  );
};

export default CouponDetails;
