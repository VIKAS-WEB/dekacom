import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Search(req, res) {
  try {
    // Use req.query to access query parameters
    const { department, country, search } = req.query;

    // Make a POST request to the XML-based API
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_BASE_URL +
        "ws/functions/coupons/listing/search.php",
      `auth=$P$DR3M95pKa3kU8rmVPWRYl0ievkKo551&department=${department}&country=${country}&search=${search}`
    );

    // Parse the XML response
    const xmlData = response.data;
    const parsedData = await parseStringPromise(xmlData);

    // Extract the relevant coupon data from the parsed XML
    const couponData = parsedData.ticketpromo.response[0].coupon;

    // Return the coupon data as JSON
    res.status(200).json(couponData);
  } catch (error) {
    console.error(
      "Error fetching search results:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "An error occurred while fetching search results" });
  }
}
