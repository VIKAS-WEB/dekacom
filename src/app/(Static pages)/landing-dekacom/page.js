"use client";
import Slider from "react-slick";
import SliderWrapper from "../../../../components/SlickSliderStyle";
export default function LandingDekacom() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const bottomSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" bg-[#14B8A6]">
        <SliderWrapper>
          <Slider {...settings} className="p-0">
            <div>
              <img src="/assets/img/accueil_digital.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">
                  Digital web / application
                </h3>
              </div>
            </div>

            <div>
              <img src="/assets/img/accueil_international.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">International</h3>
              </div>
            </div>

            <div>
              <img src="/assets/img/accueil_ticketpromo.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">SmartReduc</h3>
              </div>
            </div>

            <div>
              <img src="/assets/img/accueil_digital.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">
                  Digital web / application
                </h3>
              </div>
            </div>

            <div>
              <img src="/assets/img/accueil_international.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">International</h3>
              </div>
            </div>

            <div>
              <img src="/assets/img/accueil_ticketpromo.png" />
              <div className="desc">
                <h3 className=" text-[19px] text-white">SmartReduc</h3>
              </div>
            </div>
          </Slider>
        </SliderWrapper>
        <div className="flex w-full justify-center items-center flex-col">
          <div className=" text-4xl flex w-full justify-center items-center pt-8 flex-wrap">
            <strong className="text-white text-center w-full lg:w-fit">
              Téléchargez{" "}
            </strong>
            <strong className=" pl-2 bg-gradient-to-br from-[#aae238]  to-[#2bd39b] text-transparent bg-clip-text text-center w-full lg:w-fit">
              nos coupons
            </strong>
          </div>
          <hr width="15%" color="white" className=" mt-6" />
          <p className=" mt-6 text-white text-xl w-full text-center">
            Profitez de milliers de bons de réduction chaque jour, à proximité
            de chez vous
          </p>
        </div>
        <div className="flex justify-evenly pt-6 flex-wrap">
          <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-64 w-72 flex flex-col justify-evenly items-center mt-10">
            <div className="icon">
              <img src="/assets/img/accueil_01.png" alt="" />
            </div>
            <h5 className=" text-[#1e1e1e] font-medium text-xl">Annonceurs</h5>
            <p className=" text-[#777] text-sm">
              La publicité au dos des tickets de caisse
            </p>
          </div>

          <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-64 w-72 flex flex-col justify-evenly items-center">
            <div className="icon">
              <img src="/assets/img/accueil_02.png" alt="" />
            </div>
            <h5 className=" text-[#1e1e1e] font-medium text-xl">
              Franchise SmartReduc
            </h5>
            <p className=" text-[#777] text-sm">
              Leader français de la publicité au dos des tickets de caisse
            </p>
          </div>

          <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-64 w-72 flex flex-col justify-evenly items-center mt-0 lg:mt-10">
            <img src="/assets/img/accueil_03.png" alt="" />
            <h5 className=" text-[#1e1e1e] font-medium text-xl ">
              Distributeurs
            </h5>
            <p className=" text-[#777] text-sm">Nos points de diffusion</p>
          </div>
        </div>
      </div>
      <h2 class="font-semibold text-4xl text-gray-900 leading-10 tracking-wider my-8 text-center">
        La publicité au dos des tickets de caisse
      </h2>
      <div className="flex justify-evenly pt-6 flex-wrap">
        <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-72 w-72 flex flex-col justify-evenly items-center ">
          <div className="icon">
            <img src="/assets/img/ticketpromo_01.png" alt="" />
          </div>
          <h5 className=" text-[#1e1e1e] font-medium text-xl">SmartReduc</h5>
          <p className=" text-[#777] text-sm">
            Offre le seul media donné de la main à la main 100% de visibilité,
            et 80% de renouvellement.
          </p>
        </div>

        <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-72 w-72 flex flex-col justify-evenly items-center">
          <div className="icon">
            <img src="/assets/img/ticketpromo_02.png" alt="" />
          </div>
          <h5 className=" text-[#1e1e1e] font-medium text-xl">
            Le leader français de la publicité au dos des ticket de caisse
          </h5>
        </div>

        <div className="cursor-pointer  bg-white shadow-md rounded-3xl p-8 text-center transition-all duration-300 ease-in-out relative mb-8 h-72 w-72 flex flex-col justify-evenly items-center">
          <img src="/assets/img/ticketpromo_01.png" alt="" />
          <h5 className=" text-[#1e1e1e] font-medium text-xl">SmartReduc</h5>
          <p className=" text-[#777] text-sm">
            Offre le seul media donné de la main à la main 100% de visibilité,
            et 80% de renouvellement.
          </p>
        </div>
      </div>
      <p className=" pl-6">Les annonceurs qui nous font confiance !</p>
      <SliderWrapper>
        <Slider {...bottomSettings} className="p-0">
          <img src="/assets/img/logos-enseignes/3brasseurs-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/afflelou-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/alinea-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/amarine-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/animalis-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/atol-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/au-bureau-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/autocontrol-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/autodistribution-hover.png"
            alt=""
          />

          <img
            src="/assets/img/logos-enseignes/autosecuritas-hover.png"
            alt=""
          />

          <img
            src="/assets/img/logos-enseignes/autourdebebe-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/AyakoSushi-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/babou-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/BailaPizza-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/bebe9-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/beersnco-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/bellewaerde-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/bodyminute-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/burgerking-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/casinobarriere-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/castorama-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/citroen-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/courtepaille-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/crocodile-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/cultura-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/decathlon-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/delarte-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/delko-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/dominopizza-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/easycash-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/feuvert-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/flunch-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/fly-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/ford-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/franckprovost-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/gosport-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/gur-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/hippopotamus-hover.png"
            alt=""
          />

          <img
            src="/assets/img/logos-enseignes/ilristorante-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/intersport-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/jld-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/kfc-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/lafoirfouille-hover.png"
            alt=""
          />

          <img
            src="/assets/img/logos-enseignes/leondebruxelles-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/lynx-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/maitrekanter-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/mcdo-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/mrbricolage-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/nocibe-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/norauto-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/optique2000-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/orangebleue-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/pataterie-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/peugeot-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/pizzapai-hover.png" alt="" />

          <img
            src="/assets/img/logos-enseignes/planetholywood-hover.png"
            alt=""
          />

          <img src="/assets/img/logos-enseignes/quick-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/renault-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/saintalgue-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/securitest-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/sevencasino-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/sport2000-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/subway-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/tchip-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/tomandco-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/toyota-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/vog-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/Volkswagen-hover.png" alt="" />

          <img src="/assets/img/logos-enseignes/yvesrocher-hover.png" alt="" />
        </Slider>
      </SliderWrapper>
      <div class=" bg-white flex shadow-md mt-10 flex-wrap">
        <div
          class="bg-center bg-cover transform transition-all duration-300 ease-in-out hover:scale-130 hover:rotate-3 w-full lg:w-[40%] h-72"
          style={{
            backgroundImage: "url('/assets/img/image-presentation.jpg')",
          }}
        ></div>
        <div class=" pt-10 px-10 lg:pl-32 text-center leading-relaxed">
          <div className="text-2xl font-semibold">
            Présentation de l{"'"}entreprise
          </div>
          <div className=" h-[5px] w-[35px] bg-[#f29400] rounded-md overflow-hidden mb-4"></div>
          <p>
            SmartReduc est une marque du groupe DEKACOM Société d{"'"}édition
            <br />
            spécialisé dans la vente d{"'"}espaces publicitaires.
          </p>
          <br /> <br />
        </div>
      </div>

      <div class="flex flex-col justify-evenly items-center mt-12">
        <h2 class="text-[#000000] font-semibold text-3xl py-2">
          Distributeurs
        </h2>
        <div class="text-sm text-gray-700 mb-8 px-[5%] lg:px-[30%] text-center py-2">
          <p>
            <strong>SmartReduc</strong> est implanté sur tout le territoire
            français à travers plus de 500 GMS, et à l{"'"}international.
          </p>
        </div>
      </div>
      <div class="flex  justify-evenly items-center flex-wrap">
        <div class=" w-[80%] lg:w-[30%]">
          <img
            src="/assets/img/accueil_distributeurs.png"
            alt=""
            className=" w-full"
          />
        </div>

        <div class=" w-[80%] lg:w-[40%] text-center text-[#282828]">
          <strong>SmartReduc</strong> est implanté sur tout le territoire
          français à travers plus de 500 GMS, et à l{"'"}international. Présent
          à la fois en super et hypermarchés, <strong>SmartReduc</strong>{" "}
          travaille avec les plus grands noms de la distribution française tel
          que <strong>Leclerc, Champion, Auchan, ...</strong>
          Une progression de 443% pour le couponing en France. 83% des foyers
          fréquentent au moins une fois par semaine un hyper ou supermarché. Un
          revenu supérieur à 2286eu‚ pour au moins 30% des foyers allant dans
          les hyper ou supermarchés.
        </div>
      </div>
    </div>
  );
}
