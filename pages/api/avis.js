import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Avis(req, res) {
  try {
    const { coupon_id } = req.query;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}coupons/couponComments?coupon_id=${coupon_id}`
    );

    // const xmlData = response.data;
    // const parsedData = await parseStringPromise(xmlData);
    // const couponData = parsedData.ticketpromo.response[0].comment;
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching comments:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
