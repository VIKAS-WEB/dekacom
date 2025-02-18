import axios from "axios";

export default async function Contact(req, res) {
  try {
    // Extract the necessary fields from the request body
    const {
      gender,
      familyName,
      firstName,
      email,
      phone,
      department,
      description,
      message,
    } = req.body;

    // Construct the JSON data
    const requestData = {
      gender: gender ?? "vide",
      familyName: familyName ?? "vide",
      firstName: firstName ?? "vide",
      email: email ?? "vide",
      phone: phone ?? "vide",
      department: department ?? "vide",
      description: description ?? "vide",
      message: message ?? "vide",
    };

    // Send the data as JSON to the new endpoint
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + "contact/contact-form",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).send(true);
  } catch (error) {
    console.error("Error sending contact form:", error);
    res.json({ error: "An error occurred while sending the contact form" });
  }
}
