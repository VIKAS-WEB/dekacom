import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Views(req, res) {
  try {
    const { coupon_id } = req.query;

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}coupons/insertVisit`,
      {
        coupon_id: coupon_id,
      }
    );

    // const xmlData = response.data;
    // const parsedData = await parseStringPromise(xmlData);
    // const couponData = parsedData.ticketpromo.response;
    res.status(200).json(true);
  } catch (error) {
    console.error(
      "Error incrementing view:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
