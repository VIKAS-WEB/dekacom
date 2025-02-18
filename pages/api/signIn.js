import axios from "axios";

export default async function SignIn(req, res) {
  // Construct the JSON data
  const requestData = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "auth/consumer/login",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const userDetailsData = response.data;

    res.status(200).json(userDetailsData);
  } catch (error) {
    res.json({ error: "An error occurred while logging in the user" });
  }
}
