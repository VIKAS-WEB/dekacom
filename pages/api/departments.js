import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Departments(req, res) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "other/departments"
    );

    // const parsedData = await parseStringPromise(response.data);
    // const departmentsData = parsedData.ticketpromo.response[0].department;

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
