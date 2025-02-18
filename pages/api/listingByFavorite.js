import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function ListingByFavorite(req, res) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "coupons/byFavorite",
      {},
      {
        headers: {
          Authorization: req.body.token,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching favorite coupon:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
