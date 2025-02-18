import React from "react";
import Slider from "../../components/Slider/Slider";

const DynamicPageLayout = ({ children }) => {
  return (
    <div>
      <Slider />
      {children}
    </div>
  );
};

export default DynamicPageLayout;
