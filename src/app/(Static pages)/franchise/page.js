import React from "react";
import "./page.css";

import { IoMdGlobe } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { PiUserSwitchLight } from "react-icons/pi";

import Link from "next/link";
import Image from "next/image";

const Franchise = () => {
  return (
    <>
      <div className="banner h-[600px] sm:min-h-[700px] sm:h-screen flex items-center justify-center">
        <h2 className=" invisible w-0.5 h-0.5 ">La franchise SmartReduc </h2>
        <div className="ctn-ben text-center max-w-3xl">
          <div className="P-4 my-10 font-bold text-xl sm:text-3xl">
            Avec SmartReduc , créer votre propre régie publicitaire digitale en
            franchise
          </div>
          <div className="P-4 font-bold text-lg sm:text-xl">
            Vous avez un profil commercial ?
          </div>
          <div className="P-4 font-bold text-lg sm:text-xl">
            Vous souhaitez entreprendre ?
          </div>

          <div className="mt-5">
            <Link href="/contact">
              <button className="m-1 sm:m-3 px-5 py-3 max-sm:text-xs shadow-md bg-[#3ACCE1] hover:bg-[#000000] text-white rounded-full uppercase">
                Franchisez-vous !
              </button>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=sECuQ65PuX8"
              target="_blank"
            >
              <button className="m-1 sm:m-3 px-5 py-3 max-sm:text-xs shadow-md bg-[#3ACCE1] hover:bg-[#000000] text-white rounded-full uppercase">
                Voir notre video
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto my-20">
        <h1 className="text-3xl text-[#3ACCE1] font-semibold text-center">
          Devenez franchisé SmartReduc
        </h1>
        <hr className="my-4" />
      </div> */}

      <div className="container mx-auto mb-20 p-2 max-w-6xl">
        <div className="grid lg:text-left grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div className="lg:p-12 p-4">
            <h3 className="md:text-4xl text-xl font-semibold my-5">
              Les avantages de la Franchise SmartReduc
            </h3>
            <p className="mb-10">
              Avec 0€ de droit d{"'"}entrée et aucun besoin matériel (hormis un
              PC et un moyen de déplacement), le franchisé SmartReduc peut
              toucher une cible de prospects très large et obtenir un
              <b> retour sur investissement rapide et très important</b>.
            </p>
            <p className="">
              Dans sa zone de chalandise, pouvant aller jusqu{"'"}à un ou
              plusieurs départements, le franchisé profite d{"'"}un
              <b>
                {" "}
                droit d{"'"}exclusivité de la distribution de la solution Ticket
                Promo{" "}
              </b>
              .
            </p>
            <p className="">
              Il aura ainsi une gestion totale de ses campagnes publicitaires
              tout en bénéficiant du support de la structure SmartReduc sur
              différents plans.
            </p>

            <div className="grid grid-cols-4 gap-4 items-start mt-10">
              <div className="enc text-center">
                <div className="picto bg-zinc-200 rounded-lg shadow text-center max-w-[80px] min-h-[80px] mx-auto flex items-center my-3">
                  <IoMdGlobe className="text-2xl md:text-4xl mx-auto" />
                </div>
                <div className="text-sm text-[#3ACCE1] font-semibold">
                  Savoir faire
                </div>
                <p className="text-xs">Un savoir-faire de plus de 20 ans</p>
              </div>

              <div className="enc text-center ">
                <div className="picto bg-zinc-200 rounded-lg shadow text-center max-w-[80px] min-h-[80px] mx-auto flex items-center my-3">
                  <FaGraduationCap className="text-2xl md:text-4xl mx-auto" />
                </div>

                <div className="text-sm text-[#3ACCE1] font-semibold">
                  Formation
                </div>
                <p className="text-xs">Une journée complète de formation</p>
              </div>

              <div className="enc text-center ">
                <div className="picto bg-zinc-200 rounded-lg shadow text-center max-w-[80px] min-h-[80px] mx-auto flex items-center justify-center my-3 flex-col">
                  <RiToolsFill className="text-2xl md:text-4xl mx-auto" />
                  <span className="text-xs font-bold">+ 15 Ans</span>
                </div>
                <div className="text-sm text-[#3ACCE1] font-semibold">
                  Suivi
                </div>
                <p className="text-xs">Un suivi technique et commercial</p>
              </div>

              <div className="enc text-center ">
                <div className="picto bg-zinc-200 rounded-lg shadow text-center max-w-[80px] min-h-[80px] mx-auto flex items-center my-3">
                  <PiUserSwitchLight className="text-2xl md:text-4xl mx-auto" />
                </div>
                <div className="text-sm text-[#3ACCE1] font-semibold">
                  internationales
                </div>
                <p className="text-xs">
                  Les actions de communication internationales
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/../../images/franchise1.jpg"
              alt="Les avantages de la Franchise SmartReduc"
              width={1000}
              height={1000}
              className="w-4/5 my-10 lg:w-auto h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-5 text-zinc-500 ">
        <div className="container max-w-5xl mx-auto my-10 p-5 lg:rounded-lg bg-white">
          <Image
            src="/../../images/logo.png"
            alt="Les avantages de la Franchise SmartReduc"
            className="w-20 mx-auto my-10"
            width={80}
            height={80}
          />
          <h3 className="text-zinc-500 text-center font-semibold text-xl my-10">
            Pourquoi une franchise SmartReduc ?
          </h3>
          <div className="ctn2 text-center">
            <p className="text-[#3ACCE1] my-10">
              <b>Les avantages sont ainsi nombreux pour le franchisé :</b>
            </p>
            <p>• Aucun droit d{"'"}entrée pour devenir son propre patron</p>
            <p>• Un retour sur investissement rapide et important</p>
            <p>• Une gestion totale de ses campagnes publicitaires</p>
            <p>
              • L{"'"}exclusivité d{"'"}un ou plusieurs départements
            </p>
            <p>• Un suivi technique et commercial</p>
            <p>• Une formation complète</p>
            <p>
              • L{"'"}expérience et les actions de communication de Ticket
              Promo.
            </p>
          </div>
        </div>

        <div className="container max-w-5xl mx-auto my-10 p-5 lg:rounded-lg bg-white">
          <div className="ctn2 text-center">
            <p>
              <b>
                Pour mener à bien sa mission, le franchisé se doit bien sûr d
                {"'"}être un expert de son économie locale et avoir les
                compétences nécessaires pour développer et gérer son
                portefeuille client.
              </b>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#3ACCE1] lg:relative">
        <div className="container  mx-auto p-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <div>
              <Image
                src="/../../images/promo.png"
                alt="Les conditions d'accés au réseau en chiffres"
                width={1200}
                height={1200}
                className="w-full h-auto hidden lg:block lg:absolute lg:-left-52 bottom-0 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
              />
            </div>
            <div className="text-white text-center lg:px-10 text-sm py-5">
              <h3 className="text-white text-center font-semibold text-xl">
                Les conditions d{"'"}accés au réseau en chiffres
              </h3>

              <p className="font-medium text-base mt-6 mb-2">
                DROIT D{"'"}ENTRÉE :
              </p>
              <p className="my-1">0€</p>

              <p className="font-medium text-base mt-6 mb-2">
                APPORT PERSONNEL :
              </p>
              <p className="my-1">7 500€ (coût de la formation)</p>

              <p className="font-medium text-base mt-6 mb-2">MARGE BRUTE : </p>
              <p className="my-1">70%</p>

              <p className="font-medium text-base mt-6 mb-2">
                REDEVANCE SUR LE CA :
              </p>
              <p className="my-1">20%</p>

              <p className="font-medium text-base mt-6 mb-2">
                VANCE PUBLICITAIRE :
              </p>
              <p className="my-1">10%</p>

              <p className="font-medium text-base mt-6 mb-2">
                CA PRÉVISIONNEL RÉALISÉ :
              </p>
              <p className="my-1">
                La première année entre 80 000€ et 120 000€ après 2 ans d{"'"}
                activité, entre 150 000€ et 200 000€.
              </p>

              <p className="font-medium text-base mt-6 mb-2">
                ZONE DE CHALANDISE :
              </p>
              <p className="my-1">Ville d{"'"}au moins 40 000 habitants.</p>

              <p className="font-medium text-base mt-6 mb-2">
                DURÉE DU CONTRAT:
              </p>
              <p className="my-1">5 ans</p>

              <p className="font-medium text-base mt-6 mb-2">
                INVESTISSEMENT MATÉRIEL GLOBAL :{" "}
              </p>
              <p className="my-1">
                Pas de stock, pas d{"'"}achat de marchandise, pas de bureau,
                uniquement un ordinateur et un véhicule.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-zinc-200 text-zinc-500">
        <h3 className=" invisible w-0.5 h-0.5 ">Contact </h3>
        <div className="containe max-w-5xl mx-auto my-5 p-2 ">
          <div className="ctn2 text-center">
            <p className="md:text-lg font-semibold">
              Contactez-nous pour obtenir la présentation de notre réseau de
              franchise et devenez votre propre patron avec SmartReduc !
            </p>
            <Link href="/contact">
              <button
                className="mt-5 bg-white shadow-black hover:bg-[#000000] md:text-lg rounded-full uppercase text-[#000000]
               hover:text-white px-4 py-2 font-semibold ease-in-out duration-300"
              >
                CONTACTEZ-NOUS !
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
