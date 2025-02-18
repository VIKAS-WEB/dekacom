import React from "react";
import { BsCpu } from "react-icons/bs";
import { BiLock, BiBook, BiEnvelope } from "react-icons/bi";
import Image from "next/image";

const CommentGagnerDesPoints = () => {
  return (
    <div>
      <div className="container mt-10 mb-20 lg:mb-24 lg:mt-0 mx-auto relative p-2">
        <div className="relative lg:flex flex-row items-center">
          <div className="basis-1/2">
            <h2 className="bg-[#3ACCE1] text-base sm:text-lg lg:text-xl text-center sm:text-left text-white font-semibold py-3 pl-5 lg:pl-20 rounded-lg lg:rounded-bl-full lg:rounded-tr-full lg:absolute w-full -z-10 right-0">
              Le programme de fidélité SmartReduc
            </h2>

            <p className="lg:mt-30 lg:text-lg lg:px-20 lg:pt-40 p-5">
              Pour vous remercier pour votre confiance et pour votre fidélité.
              SmartReduc vous propose de cumuler des points de fidélités en
              fonction de plusieurs actions prévues et à découvrir dans le
              barrême ci-dessous.
            </p>
          </div>

          <div className="basis-1/2 relative">
            <div className="grid grid-cols-2 gap-2 lg:mt-10 lg:p-10 items-stretch">
              <div className="enc m-2 md:m-4 shadow-lg rounded-lg p-2 md:p-5 text-sm md:text-base bg-white text-left">
                <div className="icon md:border w-fit p-3 md:rounded-full md:bg-zinc-200 md:m-2">
                  <BiLock className="md:text-5xl text-3xl text-[#000000] " />
                </div>
                <div className="font-bold">Création</div>
                <p>Création d{"'"}un compte consommateur SmartReduc</p>
                <button className="bg-[#000000] text-white p-2 rounded-md">
                  En savoir plus
                </button>
              </div>

              <div className="enc m-2 md:m-4 shadow-lg rounded-lg p-2 md:p-5 text-sm md:text-base bg-white text-left">
                <div className="icon md:border w-fit p-3 md:rounded-full md:bg-zinc-200 md:m-2">
                  <BiBook className="md:text-5xl text-3xl text-[#000000] " />
                </div>
                <div className="font-bold">Profitez</div>
                <p>Profitez des promotions sur SmartReduc</p>
                <button className="bg-[#000000] text-white p-2 rounded-md">
                  En savoir plus
                </button>
              </div>

              <div className="enc m-2 md:m-4 shadow-lg rounded-lg p-2 md:p-5 text-sm md:text-base bg-white text-left">
                <div className="icon md:border w-fit p-3 md:rounded-full md:bg-zinc-200 md:m-2">
                  <BiEnvelope className="md:text-5xl text-3xl text-[#000000] " />
                </div>
                <div className="font-bold">Devenez membre VIP</div>
                <p>Devenez membre VIP et profitez de nombreux avantages</p>
              </div>

              <div className="enc m-2 md:m-4 shadow-lg rounded-lg p-2 md:p-5 text-sm md:text-base bg-white text-left">
                <div className="icon md:border w-fit p-3 md:rounded-full md:bg-zinc-200 md:m-2">
                  <BsCpu className="md:text-5xl text-3xl text-[#000000] " />
                </div>
                <div className="font-bold">Cumulez</div>
                <p>Cumulez de nombreux points de fidélités</p>
              </div>
            </div>

            <div className="bg-[#3ACCE1] lg:h-28 lg:w-full lg:p-5 rounded-bl-full lg:-mt-48 rounded-br-full lg:absolute -z-10 right-0"></div>
          </div>
        </div>
      </div>

      <div className="container my-20 lg:my-24 mx-auto relative lg:p-0 p-2">
        <div className="relative lg:flex flex-row items-center">
          <div className="basis-2/3">
            <h3 className="bg-[#3ACCE1] max-lg:mb-5 text-base sm:text-lg lg:text-xl text-center sm:text-left text-white font-semibold py-3 pl-5 lg:pl-20 rounded-lg lg:rounded-tl-full lg:rounded-br-full lg:absolute w-full -z-10 right-0">
              Comment obtenir des points de fidélité ?
            </h3>

            <div className="py-0 lg:p-2 lg:mt-30 lg:px-20 lg:pt-40">
              <div className="grid lg:grid-cols-2 lg:gap-2">
                <div className="basis-1/2 m-0">
                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      5 points
                    </div>
                    <p className="m-0 text-sm">
                      Inscription sur le site et/ou l{"'"}application
                    </p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      5 points
                    </div>
                    <p className="m-0 text-sm">Inscription à la newsletter</p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      15 points
                    </div>
                    <p className="m-0 text-sm">
                      Profil complet (habitudes de consommation)
                    </p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      10 points
                    </div>
                    <p className="m-0 text-sm">
                      Téléchargement d{"'"}un coupon
                    </p>
                  </div>
                </div>

                <div className="basis-1/2 m-0">
                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      30 points
                    </div>
                    <p className="m-0 text-sm">Utilisation d{"'"}un coupon</p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      10 points
                    </div>
                    <p className="m-0 text-sm">Ajout d{"'"}une note/Avis</p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      10 points
                    </div>
                    <p className="m-0 text-sm">Ajout d{"'"}un commentaire</p>
                  </div>

                  <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                    <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                      10 points
                    </div>
                    <p className="m-0 text-sm">
                      Sondage répondre à 5 questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/3 relative">
            <div className="lg:px-2  lg:-mt-20">
              <Image
                src="/images/cgp1.jpg"
                alt="Comment obtenir des points de fidélité"
                width={450}
                height={100}
                className="shadow-md hidden lg:block h-auto mx-auto "
              />
              <div className="max-lg:p-2 max-lg:mb-4 max-lg:mx-0 max-lg:shadow-lg max-lg:rounded-md max-lg:bg-zinc-100">
                <div className="text-2xl text-[#000000] font-semibold p-0 mt-5">
                  50 points
                </div>
                <p className="m-0 text-sm">
                  Noter l{"'"}application sur Apple Store ou Play Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20 lg:my-40 mx-auto relative lg:p-2 p-0">
        <div className="relative lg:flex flex-row items-center">
          <div className="basis-1/2">
            <h3 className="bg-[#3ACCE1] text-base sm:text-lg lg:text-xl text-center sm:text-left text-white font-semibold pl-5 py-3 lg:pl-[50%] rounded-lg lg:rounded-bl-full lg:rounded-tr-full lg:absolute w-full -z-10 right-0">
              Récompenses et privilèges du programme de fidélité ?
            </h3>

            <Image
              src="/images/cgp2.jpg"
              alt="Récompenses et privilèges du programme de fidélité"
              width={450}
              height={100}
              className="mx-auto -mt-10 shadow-md hidden lg:block h-auto"
            />
          </div>

          <div className="basis-1/2 relative p-2 lg:mt-44 lg:text-lg">
            <p>
              Dès 500 points vous devenez menbre VIP et profitez des avantages
              suivants :
            </p>

            <div className="grid grid-cols-3 gap-3 items-stretch md:block text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center p-1">
                <div className="basis-1/2 lg:basis-1/3 p-2">
                  <div className="my-2 flex items-center justify-center bg-[#000000] px-3 py-1 text-base md:text-xl w-full font-bold rounded-lg text-white min-h-[60px] min-w-[90px] sm:min-w-[120px] md:h-auto">
                    3 points
                  </div>
                </div>
                <div className="basis-1/2 lg:basis-2/3 text-sm lg:text-base">
                  Ajout de 3 points cumulés sur votre compte
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center p-1">
                <div className="basis-1/2 lg:basis-1/3 p-2">
                  <div className="my-2 flex items-center justify-center bg-[#000000] px-3 py-1 text-base md:text-xl w-full font-bold rounded-lg text-white min-h-[60px] min-w-[90px] sm:min-w-[120px] md:h-auto">
                    Bon d{"'"}achat
                  </div>
                </div>
                <div className="basis-1/2 lg:basis-2/3 text-sm lg:text-base">
                  Remise dans nos enseignes partenaires
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center p-1">
                <div className="basis-1/2 lg:basis-1/3 p-2">
                  <div className="my-2 flex items-center justify-center bg-[#000000] px-3 py-1 text-base md:text-xl w-full font-bold rounded-lg text-white min-h-[60px] min-w-[90px] sm:min-w-[120px] md:h-auto">
                    Cadeaux
                  </div>
                </div>
                <div className="basis-1/2 lg:basis-2/3 text-sm lg:text-base">
                  Une sélection de cadeaux selon vos points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20 lg:my-24 mx-auto relative lg:p-2 p-0">
        <div className="relative lg:flex flex-row items-center">
          <div className="basis-2/3">
            <h4 className="bg-[#3ACCE1] text-base sm:text-lg lg:text-xl text-center sm:text-left text-white font-semibold pl-5 py-3 lg:pl-20 rounded-lg lg:rounded-tl-full lg:rounded-br-full lg:absolute w-full -z-10 right-0">
              Une sélection de cadeaux pour toute la famille !
            </h4>

            <div className="p-2 lg:mt-30 lg:pt-40">
              {/* <table className='w-full lg:w-auto mx-auto'> 
                                <tbody>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>100 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 5€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>250 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 10€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>500 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 15€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>1000 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 20€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>2500 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 25€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>5000 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 30€</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 lg:text-lg font-medium text-[#000000] lg:text-right'>10 000 points</td>
                                        <td className='py-2 px-2 w-auto md:w-1/2 lg:w-auto'>Cadeau d'une valeur approximative de 40€</td>
                                    </tr>
                                </tbody>
                            </table> */}

              <div className="flex flex-wrap items-center mx-auto justify-center">
                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15  w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">500</span>
                    <span className="max-md:text-sm md:ml-1">points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 1€
                  </div>
                </div>

                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">
                      1000
                    </span>
                    <span className="max-md:text-sm md:ml-1">points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 3€
                  </div>
                </div>

                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">
                      2500
                    </span>
                    <span className="max-md:text-sm md:ml-1">points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 10€
                  </div>
                </div>

                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">
                      5000
                    </span>
                    <span className="max-md:text-sm md:ml-1">points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 25€
                  </div>
                </div>

                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">
                      7500
                    </span>
                    <span className="max-md:text-sm md:ml-1">points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 40€
                  </div>
                </div>

                <div className="basis-1/3 sm:basis-1/3 lg:basis-full text-center lg:text-left flex flex-col lg:flex-row items-center p-1 lg:p-1 lg:justify-center">
                  <div className="py-2 lg:text-lg lg:text-right font-medium text-[#000000] max-md:w-15 max-md:h-15 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex max-lg:flex-col items-center justify-center lg:h-auto lg:w-auto lg:bg-transparent">
                    <span className="max-md:text-xl max-md:font-bold">
                      10000
                    </span>
                    <span className="max-md:text-sm md:ml-1"> points</span>
                  </div>
                  <div className="py-2 px-2 w-auto  max-md:text-xs">
                    Cadeau d{"'"}une valeur approximative de 60€
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/3 relative">
            <div className="-mt-10">
              <Image
                src="/images/cgp3.jpg"
                alt="cadeaux pour toute la famille"
                width={450}
                height={100}
                className="shadow-md hidden lg:block h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentGagnerDesPoints;
