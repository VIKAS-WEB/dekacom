import Script from "next/script";

const GooglePlacesScript = ({ onScriptLoad }) => {
  const apiKey = "AIzaSyBm5c42s42cMTWdI2HqBKhd1CHhgww7_BA";

  const handleScriptLoad = () => {
    if (typeof onScriptLoad === "function") {
      onScriptLoad();
    }
  };

  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
      onLoad={handleScriptLoad}
      strategy="afterInteractive"
    />
  );
};

export default GooglePlacesScript;
