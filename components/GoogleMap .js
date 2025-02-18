"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// import GooglePlacesScript from "./GooglePlacesScript";
function GoogleMap({ shop, mapId }) {
  const latitude = shop.lat;
  const longitude = shop.lng;

  useEffect(() => {
    async function initMap() {
      const mapOptions = {
        center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        zoom: 15,
      };

      var map;
      const loader = new Loader({
        apiKey: "AIzaSyBm5c42s42cMTWdI2HqBKhd1CHhgww7_BA",
        version: "weekly",
      });
      loader
        .importLibrary("maps")
        .then(({ Map }) => {
          map = new Map(document.getElementById(mapId), mapOptions);
        })
        .then(() => {
          loader.importLibrary("marker").then((element) => {
            new element.Marker({
              position: {
                lat: parseFloat(latitude),
                lng: parseFloat(longitude),
              },
              map,
              title: "Coupon Location",
            });
          });
        })
        .catch((e) => {
          console.error(e);
        });

      // // Add a marker for the coupon location
      // const marker = new window.google.maps.Marker({
      //   position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
      //   map,
      //   title: "Coupon Location",
      // });
    }

    // if (window.google) {
    initMap();
    // } else {
    // }
  }, [latitude, longitude, mapId]);

  return (
    <div
      className="mt-14"
      id={mapId}
      style={{ height: "400px", width: "100%" }}
    ></div>
  );
}

export default GoogleMap;
