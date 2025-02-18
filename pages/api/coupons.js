import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Coupons(req, res) {
  try {
    const { limit, city_id, ordering, lat, lng } = req.body;
    const payload = {};
    if (limit) {
      payload.limit = limit;
    }
    if (lat) {
      payload.lat = lat;
    }
    if (lng) {
      payload.lng = lng;
    }
    if (city_id) {
      payload.city_id = city_id;
    }
    if (ordering) {
      payload.ordering = ordering;
    }
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "coupons/custom",
      payload
    );
    res.status(200).json(response.data.coupons);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
