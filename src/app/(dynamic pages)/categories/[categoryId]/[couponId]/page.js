import React from "react";
import CouponDetails from "../../../../../../components/CouponDetails";
import axios from "axios";
import "../../../../page.module.css";
import "../../../../globals.css";
import "../../../../calendar.css";
import incrementerVIEWS from "../../../../../../components/views";

const CouponDetailsPage = async (props) => {
  try {
    const coupon_id = props.params.couponId.split("-")[0];

    const couponsResponse = await axios.get(
      "http://localhost:3000/api/coupondetails",
      {
        params: {
          coupon_id: coupon_id,
        },
      }
    );

    const couponData = couponsResponse.data;
    incrementerVIEWS(coupon_id);

    const avisResponse = await axios.get(
      `http://localhost:3000/api/avis?coupon_id=${coupon_id}`
    );

    const avisData = avisResponse.data;

    const votesResponse = await axios.get(
      `http://localhost:3000/api/votes?coupon_id=${coupon_id}`
    );
    const votesData = votesResponse.data;

    const availbleHour = await axios.get(
      `http://localhost:3000/api/availabilities?coupon_id=${coupon_id}&shop_id=${couponData.coupon.trademark.shops[0].id}`
    );
    const hourData = availbleHour.data;

    return (
      <div>
        <CouponDetails
          allCouponInformation={couponData}
          avisData={avisData}
          votesData={votesData}
          hourData={hourData}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching coupon details:", error);
  }
};

export default CouponDetailsPage;
