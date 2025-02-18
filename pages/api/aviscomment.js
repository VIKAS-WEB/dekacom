import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Aviscomment(req, res) {
  try {
    const { coupon_id, mark, title, comment, token } = req.body;
    await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "coupons/insertComment",
      { coupon_id: coupon_id, comment: comment, title: title, mark: mark },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(true);
  } catch (error) {
    console.error(
      "Error inserting comment:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
