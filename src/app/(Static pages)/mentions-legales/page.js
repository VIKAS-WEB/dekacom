import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mentionslegales = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center padd md:h-96 bg-[#3ACCE1] p-5">
        <h2 className="text-white text-center font-semibold text-xl  md:text-4xl uppercase">
          Mentions légales
        </h2>
        <span className="text-white">Mise à jour 3 Février 2025</span>
      </div>
      <div className="container mx-auto md:-mt-10 bo z-20 bg-white shadow-xl min-h-screen md:rounded-3xl p-5 md:p-10">
        <div className="logo">
          <Link href="/">
            <Image
              src="/../../images/logo.png"
              alt="SmartReduc"
              className="w-20 mx-auto"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div className="mt-20">
          <table className="mx-auto border-b-2 border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr>
                <td className="p-5 w-2/5">
                  <b>Raison sociale</b>
                </td>
                <td className="p-5">Dekacom</td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto border-b-2 border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Coordonnées</b>
                </td>
                <td className="p-5">
                  57/2 Avenue des Flandres
                  <br />
                  59170 Croix
                  <br />
                  Tél. +33 (0)3 20 27 26 58
                  <br />
                  Fax +33 (0)3 20 27 14 61
                </td>
              </tr>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Site</b>
                </td>
                <td className="p-5">
                  <Link href="http://www.smartreduc.com/" target="_blank">
                    www.smartreduc.com
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto border-b-2 border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Statut juridique</b>
                </td>
                <td className="p-5 ">
                  SARL (Société à Responsabilité Limitée)
                </td>
              </tr>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Siret</b>
                </td>
                <td className="p-5">482 116 548 000 25</td>
              </tr>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Code NAF/APE</b>
                </td>
                <td className="p-5">7311Z</td>
              </tr>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>TVA intracommunautaire</b>
                </td>
                <td className="p-5">FR19482116548</td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto border-b-2 border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Responsable publication</b>
                </td>
                <td className="p-5">M. Kamel DJEMAÏ</td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto border-b-2 border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Hébergement</b>
                </td>
                <td className="p-5">
                  DataCenter PROMATEC DC#1 FR
                  <br />
                  PROMATEC SSII - ZA Ravennes Les Francs 1 Avenue Henri
                  Becquerel
                  <br />
                  59910 BONDUES - FRANCE
                  <br />
                  SIRET 40535140400034 / RCS Roubaix-Tourcoing
                  <br />
                  Téléphone : 03 20 70 76 79 -
                  <Link href="https://www.promatec.tm.fr/" target="_blank">
                    www.promatec.tm.fr
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="mx-auto border-black w-full lg:w-3/5 my-5">
            <tbody>
              <tr className="align-baseline">
                <td className="p-5 w-2/5">
                  <b>Création du site</b>
                </td>
                <td className="p-5">
                  DEKACOM
                  <br />
                  57/2 Avenue de Flandre
                  <br />
                  59170 Croix
                  <br />
                  Tél. +33 (0)3 20 27 26 58
                  <br />
                  <Link href="www.smartreduc.com" target="_blank">
                    www.smartreduc.com
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Mentionslegales;
