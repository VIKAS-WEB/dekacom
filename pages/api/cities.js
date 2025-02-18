import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Cities(req, res) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "city/getCities"
    );

    // const parsedData = await parseStringPromise(response.data);
    // const citiesData = parsedData.ticketpromo.response[0].city;

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
