"use client";
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import GenerateCouponPdf from "../../../../../components/GenerateCouponPdf";
import axios from "axios";
const CouponsPdf = (context) => {
  const coupon_id = context.params.couponCode.split("-")[0];
  const dynamicCouponCode = context.params.couponCode.split("-")[1];
  const [coupon, setCoupon] = useState({});
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const couponsResponse = await axios.get("/api/coupondetails", {
      params: {
        coupon_id: coupon_id,
      },
    });
    setCoupon(couponsResponse.data);
  }
  if (coupon[0] === undefined || coupon[0] === null) {
    return <div>Loading...</div>;
  }
  return (
    <PDFViewer className=" w-full h-[48rem]">
      <GenerateCouponPdf
        id={coupon_id}
        code={dynamicCouponCode}
        coupon={coupon}
      />
    </PDFViewer>
  );
};

export default CouponsPdf;
