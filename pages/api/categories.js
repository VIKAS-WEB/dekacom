import axios from "axios";

export default async function Categories(req, res) {
  try {
    const department = req.query.department;
    var url = "categories?";
    if (!!department && department !== "undefined") {
      url += `department=${department}`;
    }
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACK_NODE_BASE_URL + url
    );

    const resp = await response.data;

    res.status(200).json(resp.categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
