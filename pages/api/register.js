import axios from "axios";

export default async function Register(req, res) {
  // Construct the JSON data
  const requestData = {
    login: req.body.login,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    firstname: req.body.firstname,
    gender: req.body.gender,
  };
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "auth/consumer/register",
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
    console.error("Error fetching user details:", error.data);
    res.json({ error: "An error occurred while registering the user" });
  }
}
