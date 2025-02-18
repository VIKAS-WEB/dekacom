import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Votes(req, res) {
  try {
    const { coupon_id } = req.query;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}coupons/couponVotes?coupon_id=${coupon_id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching votes data:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "An error occurred while fetching votes data" });
  }
}
