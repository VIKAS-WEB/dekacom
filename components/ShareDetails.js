import Image from "next/image";
import React, { useEffect } from "react";
const socialMediaPlatforms = [
  { id: "facebook", image: "pic_facebook", alt: "facebook" },
  { id: "instagram", image: "pic_instagram", alt: "instagram" },
  { id: "twitter", image: "pic_twitter", alt: "twitter" },
  { id: "snapchat", image: "pic_snapchat", alt: "snapchat" },
  { id: "whatsapp", image: "pic_whatsapp", alt: "Whatsapp" },
  { id: "email", image: "pic_gmail", alt: "Gmail" },
];

const ShareDetails = ({ couponData }) => {
  const coupon = couponData.coupon;
  const trademark = couponData.coupon.tr_name;
  const shop = couponData.coupon.trademark.shops[0];
  const imageURL = `https://annonceurs.ticket-promo.com/ws/images/coupons/${coupon.id}.jpg`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Function to share on Facebook
      const shareOnFacebook = () => {
        let facebookShareURL = `https://www.facebook.com/sharer/sharer.php`;

        if (shop.web_link) {
          facebookShareURL += `?u=${encodeURIComponent(shop.web_link)}`;
          /* facebookShareURL += `&og:image=${encodeURIComponent(imageURL)}`;
          facebookShareURL += `&og:description=${encodeURIComponent(
            description
          )}`;*/
        }
        if (shop.facebook_link) {
          facebookShareURL += `?u=${encodeURIComponent(shop.facebook_link)}`;
          //facebookShareURL += `&og:image=${encodeURIComponent(imageURL)}`;
          /*facebookShareURL += `&og:description=${encodeURIComponent(
            description
          )}`;*/
        } else {
          facebookShareURL += `?u=${encodeURIComponent(coupon.link)}`;
        }
        window.open(facebookShareURL, "_blank");
      };
      // share on Instagram
      const shareOnInstagram = () => {
        const contentToShare = "Check out this amazing coupon! 🎉";
        const instagramDirectURL = `instagram://direct?text=${encodeURIComponent(
          contentToShare
        )}`;
        window.open(instagramDirectURL, "_blank");
      };
      //Twitter
      const shareOnTwitter = () => {
        const title = `Découvrez cette offre magique de ${trademark.name} ${imageURL}`;
        const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(shop.web_link)}`;
        window.open(twitterShareURL, "_blank");
      };
      //Snapchat
      const shareOnSnapchat = () => {
        const message = `une nouvelle promotion à découvrir de ${trademark.name}`;
        const deepLink = `https://web.snapchat.com/1e543384-8ee4-5283-99e7-dd07628700a2?attachmentUrl=${encodeURIComponent(
          imageURL
        )}&caption=${encodeURIComponent(message)}`;

        window.open(deepLink, "_blank");
      };

      const shareOnWhatsapp = () => {
        let message = "Découvre cette offre spéciale";

        if (shop.web_link) {
          message += ` - ${shop.web_link}`;
          if (shop.facebook_link) {
            message += ` - ${shop.facebook_link}`;
          } else {
            message += ` - ${coupon.link}`;
          }
        }

        const encodedMessage = encodeURI(message);
        const whatsappUrl = `whatsapp://send?text=${encodedMessage}&image=${imageURL}`;

        window.open(whatsappUrl, "_blank");
      };

      //Email
      const shareOnEmail = () => {
        const subject = "Consulter cette nouvelle offre magnifique";
        const links = [];

        if (shop.web_link) {
          links.push(`web: ${shop.web_link}`);
        }
        if (coupon.link) {
          links.push(`coupon: ${coupon.link}`);
        }
        if (shop.facebook_link) {
          links.push(`facebook: ${shop.facebook_link}`);
        }

        const body = `Bonjour,\n\nJ'ai découvert ce coupon de ${
          trademark.name
        }. Découvrez-le ici :\n${links.join("\n")}`;

        const mailtoURL = `mailto:?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        window.open(mailtoURL, "_blank");
      };

      // Add event listeners to your share buttons
      document
        .getElementById("facebookShareButton")
        .addEventListener("click", shareOnFacebook);
      document
        .getElementById("instagramShareButton")
        .addEventListener("click", shareOnInstagram);
      document
        .getElementById("twitterShareButton")
        .addEventListener("click", shareOnTwitter);
      document
        .getElementById("snapchatShareButton")
        .addEventListener("click", shareOnSnapchat);
      document
        .getElementById("whatsappShareButton")
        .addEventListener("click", shareOnWhatsapp);
      document
        .getElementById("emailShareButton")
        .addEventListener("click", shareOnEmail);
    }
  }, [trademark.name]);
  return (
    <div className="">
      <div className="mx-auto">
        <div className="px-6 relative">
          <p className="text-[#000000] mb-3 mt-4"> Par les réseaux sociaux :</p>
          <div className="px-6 lg:px-8 md:px-8 py-4">
            {socialMediaPlatforms.map(({ id, image, alt }) => (
              <button key={id} id={`${id}ShareButton`}>
                <Image
                  src={`/assets/img/${image}.png`}
                  alt={alt}
                  className="w-10 h-10 lg:w-16 lg:h-16 mr-2 md:mr-5 lg:mr-5"
                  width={40}
                  height={40}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDetails;
