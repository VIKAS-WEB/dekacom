"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Carrousel = () => {
  const [hide, setHide] = useState(false);

  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname.includes("categories")) {
  //     setHide(true);
  //   } else {
  //     setHide(false);
  //   }
  // }, [pathname]);
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

  return (
    <div className={hide ? "hidden" : "carousel-homepage"}>
      <Slider {...settings} className="p-0">
        <div>
          <a href="https://annonceurs.ticket-promo.com/landing/app/index.html">
            <Image
              alt="carroussel image"
              src="/images/carouselXL/1.png"
              width={2000}
              height={200}
              className="w-12/12"
            />
          </a>
        </div>
        <div>
          <a href="https://www.smartreduc.com/categories/14-restauration">
            <Image
              alt="carroussel image"
              src="/images/carouselXL/3.png"
              width={2000}
              height={200}
              className="w-12/12"
            />
          </a>
        </div>
        <div>
          <a href="https://www.smartreduc.com/categories/31-maison-jardin-deco">
            <Image
              alt="carroussel image"
              src="/images/carouselXL/4.png"
              width={2000}
              height={200}
              className="w-12/12"
            />
          </a>
        </div>
        <div>
          <a href="https://www.smartreduc.com/categories/17-soin-beaute">
            <Image
              alt="carroussel image"
              src="/images/carouselXL/5.png"
              width={2000}
              height={200}
              className="w-12/12"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
