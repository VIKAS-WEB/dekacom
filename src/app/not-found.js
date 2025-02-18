import Link from "next/link";
import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-evenly px-[5%] ">
      {/* Texte et bouton */}
      <div className=" flex items-center w-1/3">
        <div className="p-8">
          <div className="text-4xl lg:text-4xl font-bold text-gray-600 mb-4  customTitle">
            Cette page n{"'"}est{" "}
            <br
              className="hidden lg:inline"
              style={{ paddingBottom: "30px" }}
            />{" "}
            malheureusement{" "}
            <br className="hidden lg:inline" style={{ marginTop: "30px" }} />
            pas disponible
          </div>
          <p className="mb-4 text-gray-500 pb-4 customParagraphe">
            Le lien que vous avez suivi peut être incorrect{" "}
            <br className="hidden lg:inline" />
            ou la page peut avoir été supprimée.
          </p>
          <div className="center-container">
            <Link
              href="/"
              className=" bg-[#3ACCE1] text-white px-4 py-3 rounded-full customButton"
            >
              Retour à la page d{"'"}accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="p-4 w-full lg:w-1/2 ">
        <Image
          src="/../../images/404.png"
          alt="Image ERROR 404"
          layout="responsive"
          objectFit="cover"
          width={0}
          height={0}
          className=" w-4/5"
        />
      </div>
    </div>
  );
};

export default NotFound;
