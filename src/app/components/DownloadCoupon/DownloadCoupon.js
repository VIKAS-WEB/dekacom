"use client";
import React, { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";
import axios from "axios";
import Link from "next/link";
const DownloadCoupon = ({
  couponData,
  name,
  isConnected,
  setOpenModal,
  open,
}) => {
  const coupon = couponData.coupon;
  const coupon_id = coupon.coupon_id;
  const { Canvas } = useQRCode();
  const [dynamicCode, setDynamicCode] = useState("");
  const [result, setResult] = useState({});
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/download", {
          coupon_id: coupon_id,
          token: isConnected ? window.localStorage.getItem("token") : "",
        });
        if (response.data && response.data.coupon) {
          setResult(response.data.coupon);
          setDynamicCode(response.data.coupon.code);
          setLoading(false);
        } else {
          console.error("Réponse de serveur invalide");
        }
      } catch (error) {
        console.error("Error downloading:", error);
      }
    };
    if (!dynamicCode && open) {
      fetchData();
    }
  }, [coupon_id, open]);
  if (!open) {
    return <div></div>;
  }
  if (result !== null && result.code_type === "alpha" && !loading) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-4 gap-4">
        <div className="text-xl font-bold">VOTRE CODE PROMO : </div>
        <div className="flex justify-center items-center w-4/5 border-[#95abca] border border-dashed">
          <div className="h-10 w-2/5 flex justify-center items-center font-bold bg-[#edf3f9] ">
            {dynamicCode}
          </div>
          <div
            className="h-10 w-3/5 flex justify-center items-center font-bold text-white bg-[#21488d] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(dynamicCode);
              setCopied(true);
            }}
          >
            {copied ? "COPIÉ !" : "COPIER LE CODE"}
          </div>
        </div>
        <div
          className="text-[#5774a9] border-b border-[#5774a9] px-1 cursor-pointer"
          onClick={() => {
            window.open(result.website);
          }}
        >
          Voir l{"'"}offre sur le site de {name}
        </div>
      </div>
    );
  }

  if (result !== null && !loading) {
    return (
      <div className="w-full flex flex-col justify-center gap-1 items-center ">
        <div className="text-[#3ACCE1] font-bold text-lg">
          Présenter ce coupon à la caisse
        </div>
        <div className="text-sm">QR CODE</div>
        <div className="w-4/5 h-auto bg-[url('/images/structure.svg')] bg-contain bg-no-repeat bg-center flex flex-col justify-between items-center py-3">
          <Canvas
            text={String(dynamicCode) || "Veuillez scanner le code QR"}
            options={{
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 4,
              width: 130,
              color: {
                dark: "#000000",
                light: "#FFFFFF",
              },
            }}
          />
          <div className="codebarre pt-2 pb-2">
            <div className="h-10"></div>
            <div>Ou saisissez le code barre :</div>
            <div className="font-bold text-xl text-center"> {dynamicCode} </div>
          </div>
          <div className=" w-full flex justify-evenly">
            {/* <Link
            href={`/Coupon_PDF/${coupon_id}-${dynamicCode}`}
            className=" mt-2 px-4 py-2 bg-[#3ACCE1] text-white"
          >
            Voir le PDF
          </Link> */}
            {/* {isConnected ? (
            <></>
          ) : (
            <div
              onClick={() => {
                document.getElementById("connection-button").click();
                setOpenModal(false);
              }}
            >
              Recois le coupon par mail
            </div>
          )} */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" h-10 w-full flex justify-center items-center">
        Chargement de votre code ..
      </div>
    );
  }
};

export default DownloadCoupon;
