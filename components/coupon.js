import { useGeolocationContext } from "@/app/contexts/GeolocationContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Coupon({ coupon }) {
  const location = useGeolocationContext();
  const end = new Date(coupon.validity.end);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  const couponTitle = coupon.trademark.name
    .replace(/\x92/g, "'")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&[^;]+;/g, "");
  const maxLength = 30;
  const truncatedTitle = truncateText(couponTitle, maxLength);
  const avg = coupon.avg_votes != null ? parseFloat(coupon.avg_votes) : 0;
  const formattedAvgVotes = avg.toFixed(1);
  const avgVotes = formattedAvgVotes.replace(/\.0$/, "");
  const couponLat = coupon.shops[0].lat;
  const couponLng = coupon.shops[0].lng;
  const couponlocations = {
    couponLat,
    couponLng,
  };

  //Calcul of distance
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371; // Radius of the earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const lat1Rad = degreesToRadians(lat1);
    const lat2Rad = degreesToRadians(lat2);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(lat1Rad) *
        Math.cos(lat2Rad);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    // Format distance
    let formattedDistance;
    if (distance < 1) {
      formattedDistance = (distance * 1000).toFixed(2) + " M";
    } else {
      formattedDistance = distance.toFixed(2) + " Km";
    }

    return formattedDistance;
  }

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const distance = calculateDistance(
    couponLat,
    couponLng,
    location?.lat,
    location?.lng
  );
  if (coupon.is_flash == "1") {
    setInterval(() => {
      var now = new Date();
      var difference = end - now;
      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      if (newDays !== days) {
        setDays(newDays);
      }
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      if (newHours !== hours) {
        setHours(newHours);
      }
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      if (newMinutes !== minutes) {
        setMinutes(newMinutes);
      }
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);
  }

  return (
    <div className=" border-b-2 border-gray-700 rounded-tl-8 rounded-tr-8 mb-2 lg:mb-0 md:mb-0  m-4 w-80 max-w-full mx-auto">
      {coupon.is_flash == "1" ? (
        <div className="flex bg-[#eaeaea] rounded-md w-[90%] mx-auto mb-3 items-center relative h-7 pl-[15%]">
          <img
            src="/assets/img/icone-chrono.svg"
            className=" absolute top-[-4px] left-0"
          />
          <div className=" text-xl pr-1">{days}</div>
          <div className=" text-xs pr-1"> jours : </div>
          <div className=" text-xl pr-1">{hours}</div>
          <div className=" text-xs pr-1"> hrs : </div>
          <div className=" text-xl pr-1">{minutes}</div>
          <div className=" text-xs pr-1"> mins : </div>
          <div className=" text-xl pr-1">{seconds}</div>
          <div className=" text-xs pr-1"> secs </div>
        </div>
      ) : (
        <div className="w-[90%] h-7 mb-3"></div>
      )}

      <Link
        href={{
          pathname:
            "/categories/" +
            coupon.category.id +
            "-" +
            coupon.category.alias +
            "/" +
            coupon.id +
            "-" +
            coupon.trademark.name.trim().split(" ").join("-"),
        }}
      >
        <div className="image-section mb-2">
          <Image
            src={`https://annonceurs.ticket-promo.com/ws/images/coupons/${coupon.id}.jpg`}
            alt={couponTitle}
            className="w-full rounded-t-lg"
            width={220}
            height={150}
          />
        </div>
        <div className="info-section  flex flex-col justify-center items-center">
          <div
            className="text-2xl josefin-semi-bold text-black line-clamp-2 text-center"
            dangerouslySetInnerHTML={{
              __html: truncatedTitle,
            }}
          ></div>
          <span className="text-sm uppercase font-bold text-center text-[#757575] inter-bold">
            {coupon.shops[0].city}
          </span>
          <div className="text-sm price_coupon text-center text-[#292F33] font-semibold  my-2">
            -
            {coupon.reduction_type === "amount"
              ? coupon.price + "€"
              : coupon.percentage + " %"}
          </div>

          {distance !== "NaN Km" ? (
            <div className="flex justify-center border-t w-11/12 p-2 border-gray-300">
              <Image
                src="/assets/img/location.svg"
                className="mr"
                alt=" localisation"
                width={15}
                height={15}
              />
              <p className="text-sm text-[#151515] ml-1 inter-Regular">
                {" "}
                Vous êtes à <b>{distance}</b>
              </p>{" "}
            </div>
          ) : (
            <p className="text-sm mb-2 text-center text-[#151515] mx-auto inter-Regular">
              Merci d{"'"}activer la géolocalisation pour découvrir nos offres à
              proximité.
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
