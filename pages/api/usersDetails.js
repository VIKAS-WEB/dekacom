import axios from "axios";

export default async function UsersDetails(req, res) {
  try {
    const token = req.body.token; // Extract the token from the request body
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "consumer/info",
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );

    // Assuming the new endpoint returns JSON and no longer requires XML parsing
    const userDetailsData = response.data;
    res.status(200).json(userDetailsData);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.json({ error: "An error occurred while fetching user details" });
  }
}
