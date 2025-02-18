import axios from "axios";

export default async function UsersPassword(req, res) {
  // Construct the JSON data
  const requestData = {
    email: req.body.email,
  };

  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL +
        "auth/consumer/reset-password",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Assuming the new endpoint returns JSON and does not need XML parsing
    const userDetailsData = response.data;

    res.status(200).json(userDetailsData);
  } catch (error) {
    console.error("Error resetting user password:", error);
    res.json({ error: "An error occurred while resetting the password" });
  }
}
