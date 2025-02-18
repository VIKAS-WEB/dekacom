import React from "react";
import "../../../page.module.css";
import "../../../globals.css";
import axios from "axios";
import CategoriesCoupons from "../../../../../components/CategoriesCoupons";
import { useSearchParams } from "next/navigation";
import SSRBasicSelect from "@/app/components/SSRBasicSelect/SSRBasicSelect";

// export async function getServerSideProps(context) {
//   try {
//     return {
//       props: {
//         couponCat,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return {
//       props: {
//         couponCat: [],
//         error: "An error occurred while fetching data",
//       },
//     };
//   }
// }

const CouponsPage = async (context) => {
  const category_id = context.params.categoryId.split("-")[0];
  var { subcategory_id, department, country, city, ordering } =
    context.searchParams;
  if (!ordering) {
    ordering = "date";
  }
  subcategory_id = subcategory_id ? subcategory_id.split("-")[0] : "";
  const couponbyCatgories = await axios.get(
    "http://localhost:3000/api/couponbycategories",
    {
      params: {
        category_id: category_id,
        country: country,
        department: department,
        city: city,
        subcategory_id: subcategory_id,
        ordering: ordering,
      },
    }
  );

  const categoriesResponse = await axios.get(
    "http://localhost:3000/api/categories"
  );
  const cityResponse = await axios.get("http://localhost:3000/api/cities");
  const cities = cityResponse.data;
  const categories = categoriesResponse.data;
  const couponCat = couponbyCatgories.data;
  return (
    <div>
      <div className=" w-10/12 my-4 flex justify-end">
        <SSRBasicSelect
          ordering={ordering}
          country={country}
          department={department}
          city={city}
          subcategory_id={subcategory_id}
        />
      </div>
      <CategoriesCoupons
        coupons={couponCat}
        categories={categories}
        category_id={category_id}
        subcategory_id={subcategory_id}
        department={department}
        country={country}
        city={city}
        cities={cities}
      />
    </div>
  );
};

export default CouponsPage;
