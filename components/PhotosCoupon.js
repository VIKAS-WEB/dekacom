import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../src/app/globals.css";

function PhotosCoupon({ couponData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const shop = couponData.coupon.trademark.shops[0];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!couponData || !couponData.coupon || !couponData.coupon.trademark) {
    return null;
  }

  const totalPhotos = shop.photos.length;

  const sliderItemCount =
    totalPhotos === 1 ? 1 : windowWidth >= 780 && windowWidth <= 1350 ? 2 : 3;
  const totalItems = shop.video ? totalPhotos + 1 : totalPhotos;
  const indicators = Array.from(
    { length: Math.ceil(totalItems / sliderItemCount) },
    (_, index) => index
  );

  const includeVideo =
    shop.video && currentIndex + sliderItemCount > totalPhotos;

  const handleClick = (index) => {
    setCurrentIndex(index * sliderItemCount);
  };

  return (
    <div className="w-full flex flex-col mt-5">
      <div className="w-full flex flex-row mt-5 justify-evenly">
        {couponData.coupon.trademark.shops.map((shop) => (
          <div
            key={shop.id}
            className={`${
              shop.photos && currentIndex < totalPhotos ? " flex" : "hidden"
            }`}
          >
            {shop.photos && currentIndex < totalPhotos ? (
              <section
                className={`flex text-white border-transparent border-30 bg-red w-full justify-evenly items-center`}
              >
                {shop.photos && Array.isArray(shop.photos)
                  ? shop.photos.map((photo, index) => {
                      if (
                        index >= currentIndex &&
                        index < currentIndex + sliderItemCount
                      ) {
                        const photoName = photo.name;
                        const photoURL = `https://annonceurs.ticket-promo.com/ws/images/shops/photo/${shop.id}/${photoName}`;
                        return (
                          <div key={photoName}>
                            <img
                              src={photoURL}
                              alt={`Picture details: ${photoName}`}
                              style={{ width: "300px" }}
                              className="border-2 rounded-lg"
                            />
                          </div>
                        );
                      }
                      return null;
                    })
                  : null}
              </section>
            ) : (
              <></>
            )}
          </div>
        ))}
        {includeVideo && (
          <div className=" w-80">
            <iframe
              className="Video"
              height={300}
              src={`https://annonceurs.ticket-promo.com/ws/images/shops/video/${shop.id}/${shop.video}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={couponData.coupon.tr_name}
            ></iframe>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {indicators.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex / sliderItemCount === index
                ? "bg-[#3ACCE1]"
                : "bg-[#75787B]"
            }`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PhotosCoupon;
