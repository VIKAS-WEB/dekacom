import axios from "axios";

export default async function UserEconomie(req, res) {
  try {
    const token = req.body.token; // Extract the token from the request body

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "economy/mes_economie",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Set the token in the Authorization header
        },
      }
    );

    // Assuming the new endpoint returns JSON and no longer requires XML parsing
    const userDetailsData = response.data.action;
    res.status(200).json(userDetailsData);
  } catch (error) {
    console.error("Error fetching user economy:", error);
    res.json({ error: "An error occurred while fetching the data" });
  }
}
