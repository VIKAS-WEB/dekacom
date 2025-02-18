"use client";

import Image from "next/image";
import React from "react";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, onClose, children, maxWidth, title, classe }) => {
  const getMaxWidth = () => {
    if (maxWidth === "avis") {
      return "lg:max-w-xl";
    } else if (maxWidth === "vote") {
      return "lg:max-w-xl";
    } else if (maxWidth === "calender") {
      return "lg:max-w-xl";
    } else {
      return "lg:max-w-md";
    }
  };
  const getClasse = () => {
    if (classe === "avis") {
      return "modal_responsive";
    } else if (classe === "vote") {
      return "modal_responsive";
    } else if (classe === "calender") {
      return "modal_responsive";
    } else if (classe === "share") {
      return "modal_responsive";
    } else if (classe === "coupon") {
      return "modal_responsive";
    } else {
      return "modal_res";
    }
  };
  const getName = () => {
    if (title === "avis") {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">Les avis</p>
        </>
      );
    } else if (title === "vote") {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">
            Noter <span className="text-[#FFA631]"> ce </span> <br /> coupon
          </p>
        </>
      );
    } else if (title === "calender") {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">
            Choisissez{" "}
            <span className="text-[#FFA631]"> la date et l{"'"}heure </span>{" "}
            <br /> de votre rendez-vous
          </p>
        </>
      );
    } else if (title === "share") {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">
            Partager
            <span className="text-[#FFA631]"> ce </span> <br /> coupon
          </p>
        </>
      );
    } else if (title === "coupon") {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">
            Utiliser <span className="text-[#FFA631]"> ce </span> coupon
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className=" leading-5 text-[#3ACCE1] font-semibold">SmartReduc</p>
        </>
      );
    }
  };
  if (open) {
    return (
      //backdrop
      <div
        onClick={onClose}
        className={`${getClasse()} block absolute lg:fixed inset-0 lg:flex justify-center items-center transition-colors z-30 ${
          open ? "visible lg:bg-black/40 bg-white" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white lg:max-w-fit rounded-3xl max-lg:border-b-[5px] border-[#3ACCE1] mx-auto lg:rounded-3xl shadow p-5 transition-all ease-in-out duration-1000 ${getMaxWidth()} w-[95%] h-[auto] ${
            open
              ? "lg:scale-100 opacity-100 max-lg:top-0"
              : "lg:scale-125 opacity-0 max-lg:top-[-1000px]"
          }`}
        >
          <div className="header-modal flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <Image
                src="/../../images/logo.png"
                alt="SmartReduc"
                width={30}
                height={30}
                className="mr-2"
              />
              {getName()}
            </div>
            <button onClick={onClose}>
              <AiOutlineClose />
            </button>
          </div>

          <div className="body-Modal">{children}</div>
        </div>
      </div>
    );
  } else {
    return <div className="invisible"></div>;
  }
};

export default Modal;
