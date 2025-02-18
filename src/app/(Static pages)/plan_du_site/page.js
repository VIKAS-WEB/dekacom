import React from "react";
import axios from "axios";
import Link from "next/link";
export const revalidate = 3600;
const Plandusite = async () => {
  var dynamicCategories = [];
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    dynamicCategories = response.data ?? [];
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center padd md:h-96 bg-[#3ACCE1] p-5">
        <h2 className="text-white text-center font-semibold text-xl  md:text-4xl uppercase">
          Plan du site
        </h2>
        <span className="text-white">Mise à jour 3 Février 2025</span>
      </div>
      <div className="container mx-auto md:-mt-10 bo z-20 bg-white shadow-xl min-h-screen md:rounded-3xl p-5 md:p-10">
        <div className="md:flex flex-row items-start plan">
          <div className="basis-1/3 mt-10">
            <b>ACCUEIL</b>

            <ul className="pl-5 border-l m-3">
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/condition-dutilisation">
                  Conditions d{"'"}utilisation
                </Link>
              </li>
              <li>
                <Link href="https://annonceurs.ticket-promo.com/fr/?option=com_neocoupon&view=proregistration&Itemid=302#announcer-top">
                  Espace annonceur
                </Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="/#partner">On parle de nous</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/programme-de-fidelite">
                  Le programme de fidélité
                </Link>
              </li>
              <li>
                <Link href="#">Créer une campagne</Link>
              </li>
              <li>
                <Link href="/">SmartReduc</Link>
              </li>
              <li>
                <Link href="/plan_du_site">Plan du site</Link>
              </li>
            </ul>
          </div>

          <div className="basis-1/3 mt-10">
            <b>CATÉGORIES</b>

            <ul className="pl-5 border-l m-3">
              {dynamicCategories?.map((cat, key) => {
                return (
                  <li key={key}>
                    <Link href={"/categories/" + cat.id + "-" + cat.alias}>
                      {cat.name}
                    </Link>
                    <ul className="pl-5 border-l m-3">
                      {cat?.subcategories?.map((sub, subKey) => (
                        <Link
                          key={subKey}
                          href={
                            "/categories/" +
                            cat.id +
                            "-" +
                            cat.alias +
                            "?subcategory_id=" +
                            sub.id +
                            "-" +
                            sub.alias
                          }
                        >
                          <li>{sub.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="basis-1/3 mt-10">
            <b>RÉSEAUX SOCIAUX</b>

            <ul className="pl-5 border-l m-3">
              <li>
                <Link
                  href="https://www.facebook.com/TicketPromoDekacomCroix/?locale=fr_FR"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/ticketpromo_app/with_replies"
                  target="_blank"
                >
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/ticket.promo/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCJR1CEYVLXlaqGmtJqORhFQ"
                  target="_blank"
                >
                  YouTube
                </Link>
              </li>
              {/* <li>
                <Link href="#" target="_blank">Linkedin</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plandusite;
