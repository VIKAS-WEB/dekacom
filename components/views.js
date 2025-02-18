import "../src/app/page.module.css";
import "../src/app/globals.css";
import axios from "axios";

const incrementerVIEWS = async (coupon_id) => {
  try {
    const result = await axios.put(
      `http://localhost:3000/api/views?coupon_id=${coupon_id}`
    );
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la mise à jour du nombre de vues :",
      error
    );
  }
};
export default incrementerVIEWS;
