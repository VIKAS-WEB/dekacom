"use client";
import CategoryList from "../../../../components/CategoryList";
import "../../page.module.css";
import "../../globals.css";
import axios from "axios";
import slideData from "../../../../utils/data_slide";
import { useEffect, useState } from "react";
import { useGeolocationContext } from "@/app/contexts/GeolocationContext";

function Categories() {
  const location = useGeolocationContext();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, [location]);
  async function getData() {
    try {
      const categoriesResponse = await axios.get(
        "/api/categories?department=" + location?.department_code
      );
      setCategories(categoriesResponse.data || []);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <CategoryList categories={categories} slideData={slideData} />
    </div>
  );
}

export default Categories;
