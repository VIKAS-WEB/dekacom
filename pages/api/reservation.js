import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Reservation(req, res) {
  try {
    const { coupon_id, shop_id, date, hour, token } = req.body;
    await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "reservation/add",
      {
        shop_id: shop_id,
        coupon_id: coupon_id,
        date: date,
        hour: hour,
        nb_people: 1,
      },
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
      "Error fetching reservation Data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
