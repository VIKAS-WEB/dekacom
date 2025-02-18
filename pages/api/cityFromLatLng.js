import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function CityFromLatLng(req, res) {
  try {
    const { latitude, longitude } = req.body;
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "other/nearestCity",
      {
        latitude: latitude ?? 0,
        longitude: longitude ?? 0,
      }
    );
    // const xmlData = response.data;
    // const parsedData = await parseStringPromise(xmlData);
    // const locationData = parsedData.ticketpromo.response[0].city;
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error getting city from lat lng:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
