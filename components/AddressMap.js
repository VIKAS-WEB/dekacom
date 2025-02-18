"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// import GooglePlacesScript from "./GooglePlacesScript";
function AddressMap({ shop, mapId }) {
  useEffect(() => {
    async function initMap() {
      const location = {
        lat: parseFloat(shop.lat),
        lng: parseFloat(shop.lng),
      };
      const mapOptions = {
        center: location,
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
              position: location,
              map,
              title: "Coupon Location",
            });
          });
        })
        .catch((e) => {
          console.error(e);
        }); // Add a marker for the location
      // new window.google.maps.Marker({
      //   position: location,
      //   map,
      //   title: "Coupon Location",
      // });
    }

    // if (window.google) {
    initMap();
    // } else {
    // }
  }, [shop, mapId]);

  return <div id={mapId} style={{ height: "400px", width: "100%" }}></div>;
}

export default AddressMap;
