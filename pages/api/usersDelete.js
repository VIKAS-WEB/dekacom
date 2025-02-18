import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function UsersDelete(req, res) {
  const formData = new FormData();

  formData.append("token", req.body.token);

  try {
    const response = await axios.delete(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "consumer",
      {
        data: {
          reason: req.body.reason ?? "",
        },
        headers: {
          Authorization: req.body.token,
          "Content-Type": "application/json",
        },
      }
    );

    // const parsedData = await parseStringPromise(response.data);
    // const userDetailsData = parsedData.ticketpromo.response[0];

    res.status(200).json(true);
  } catch (error) {
    console.error("Error fetching users details:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
