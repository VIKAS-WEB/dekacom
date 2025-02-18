import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Availabilities(req, res) {
  try {
    const { coupon_id, shop_id } = req.query;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_BASE_URL}ws/functions/reservation/availabilities.php?auth=$P$DR3M95pKa3kU8rmVPWRYl0ievkKo551&coupon_id=${coupon_id}&shop_id=${shop_id}`
    );

    const xmlData = response.data;
    const parsedData = await parseStringPromise(xmlData);
    const availbleHour = parsedData.ticketpromo.response[0].availabilities;
    res.status(200).json(availbleHour);
  } catch (error) {
    console.error(
      "Error fetching hours details:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
