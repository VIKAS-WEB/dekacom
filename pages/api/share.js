import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function Share(req, res) {
  try {
    const { coupon_id, recipient_name, recipient_email, comment } = req.body;
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACK_BASE_URL +
        "ws/functions/coupons/insert/share.php",
      `auth=$P$DR3M95pKa3kU8rmVPWRYl0ievkKo551&coupon_id=${coupon_id}&token=$P$DF8SfCjrlWAqSVAGdW8zsYvClCnMqK.&recipient_name=${recipient_name}&recipient_email=${recipient_email}&comment=${comment}`
    );

    const xmlData = response.data;
    const parsedData = await parseStringPromise(xmlData);
    const commentData = parsedData.ticketpromo.response[0].comment;
    res.status(200).json(commentData);
  } catch (error) {
    console.error(
      "Error sharing coupon :",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
