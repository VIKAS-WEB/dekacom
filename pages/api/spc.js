import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Spc(req, res) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "spc"
    );

    // const parsedData = await parseStringPromise(response.data);
    // const SPCData = parsedData.ticketpromo.response[0].category;

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching category SP:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
