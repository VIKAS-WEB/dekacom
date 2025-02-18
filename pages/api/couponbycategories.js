import axios from "axios";

export default async function Couponbycategories(req, res) {
  try {
    const { category_id, subcategory_id, department, country, city, ordering } =
      req.query;

    // Construct the JSON payload
    const payload = {};
    if (category_id) {
      payload.category_id = category_id;
    }
    if (subcategory_id) {
      payload.subcategory_id = subcategory_id;
    }
    if (department) {
      payload.department = department;
    }
    if (country) {
      payload.country = country;
    }
    if (city) {
      payload.city = city;
    }
    if (ordering) {
      payload.ordering = ordering;
    }
    // Make the API call to the new endpoint with JSON data
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL}coupons/byCategory`,
      payload
    );

    // Assuming the response data is already in JSON format
    const couponByCategories = response.data;
    if (couponByCategories && couponByCategories.length > 0) {
      res.status(200).json(couponByCategories);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error fetching coupon by categories:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching coupon by categories" });
  }
}
