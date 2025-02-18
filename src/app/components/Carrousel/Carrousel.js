"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import Image from "next/image";

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <Slider {...settings}>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/Eurostar-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/X-Heathrow-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/italo-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/lner-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/sncf-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/Thalyse-logo.png"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Image
          alt="carroussel image"
          src="/../../images/partenaires-logo/Trenitalia-logo.png"
          width={140}
          height={140}
        />
      </div>
    </Slider>
  );
};

export default Carrousel;
