import axios from "axios";

export default async function UserUpdate(req, res) {
  const formData = {
    gender: req.body.gender,
    name: req.body.name,
    firstname: req.body.firstname,
    login: req.body.login,
    email: req.body.email,
    spc: req.body.spc,
    birthday: req.body.birthday,
    geolocate: req.body.geolocate,
    categories: req.body.categories,
    trademarks: req.body.trademarks,
    country: req.body.country,
    department: req.body.department,
    city: req.body.city,
    phone: req.body.phone,
    password: req.body.password.length > 1 ? req.body.password : undefined,
    zipcode: req.body.zipcode,
  };

  try {
    const response = await axios.put(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "consumer/update",
      formData,
      {
        headers: {
          Authorization: req.body.token,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error updating user details:", error);
    res.json({ error: "An error occurred while updating data" });
  }
}
