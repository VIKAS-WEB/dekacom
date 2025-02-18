"use client";
import React, { useEffect, useState } from "react";
import CouponList from "../../components/CouponList";
import "./page.module.css";
import "./globals.css";
import axios from "axios";
import { useGeolocationContext } from "@/app/contexts/GeolocationContext";
import SectionHomePage from "../../components/SectionHomePage";
import CategoriesCouponsImg from "../../components/CategoriesCouponsImg";

const Coupon = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [dynamicCategories, setDynamicCategories] = useState([]);
  const [ordering, setOrdering] = useState("date");
  const location = useGeolocationContext();
  useEffect(() => {
    getCategoryData();
    if (
      (selectedCategory === null || selectedCategory === 0) &&
      (selectedSubcategory === null || selectedSubcategory === 0)
    ) {
      handleCategoryFilter();
    } else {
      if (selectedSubcategory !== null && selectedSubcategory !== 0) {
        handleSubcategoryFilter(selectedSubcategory);
      } else {
        handleCategoryFilter(selectedCategory);
      }
    }
  }, [location, ordering]);

  const getCategoryData = async () => {
    try {
      const categoriesResponse = await axios.get(
        "/api/categories?department=" + location?.department_code
      );
      setDynamicCategories(categoriesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryFilter = async (
    // subcategory_id,
    category_id = 0,
    limit = 999
  ) => {
    try {
      // Make API request for coupons by category
      var categoryResponse;
      if (category_id !== 0) {
        categoryResponse = await axios.post("/api/coupons", {
          city_id: location?.city_id,
          lat: location?.lat,
          lng: location?.lng,
          category_id: category_id,
          ordering: ordering,
          limit: limit,
          // subcategory_id: subcategory_id,
        });
      } else {
        categoryResponse = await axios.post("/api/coupons", {
          city_id: location?.city_id,
          lat: location?.lat,
          lng: location?.lng,
          ordering: ordering,
          limit: limit,
          // subcategory_id: subcategory_id,
        });
      }
      // Extract the data for the category
      const categoryData = categoryResponse.data;

      // Update state with the filtered data
      setFilteredData(categoryData);

      // Update the selected category and subcategory if needed
      setSelectedCategory(category_id);
      setSelectedSubcategory(null); // Reset subcategory selection
    } catch (error) {
      console.error("Error fetching coupons by category:", error);
    }
  };

  const handleSubcategoryFilter = async (
    subcategory_id,
    category_id,
    limit = 10
  ) => {
    try {
      var subcategoryResponse;
      if (subcategory_id !== null) {
        subcategoryResponse = await axios.post("/api/coupons", {
          subcategory_id: subcategory_id,
          city_id: location?.city_id,
          lat: location?.lat,
          lng: location?.lng,
          ordering: ordering,
          limit: limit,
        });
      } else {
        subcategoryResponse = await axios.post("/api/coupons", {
          category_id: category_id,
          city_id: location?.city_id,
          lat: location?.lat,
          lng: location?.lng,
          ordering: ordering,
          limit: limit,
        });
      }
      // Make API request for coupons by subcategory

      // Extract the data for the subcategory
      const subcategoryData = subcategoryResponse.data;

      // Update state with the filtered data
      setFilteredData(subcategoryData);

      // Update the selected subcategory and category if needed
      setSelectedCategory(null); // Reset category selection
      setSelectedSubcategory(subcategory_id);
    } catch (error) {
      console.error("Error fetching coupons by subcategory:", error);
    }
  };
  return (
    <div>
      <CouponList
        dynamicCategories={dynamicCategories}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        handleCategoryFilter={handleCategoryFilter}
        handleSubcategoryFilter={handleSubcategoryFilter}
        ordering={ordering}
        setOrdering={setOrdering}
        filteredData={filteredData}
      />
      <CategoriesCouponsImg />
      <SectionHomePage />
    </div>
  );
};

export default Coupon;
