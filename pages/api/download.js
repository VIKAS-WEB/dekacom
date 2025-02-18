import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function download(req, res) {
  try {
    const { coupon_id, token } = req.body;
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "coupons/insertDownload",
      {
        coupon_id: coupon_id ?? "",
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching download code:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
