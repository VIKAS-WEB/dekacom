"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let watcherId;

    const getGeolocation = async (coords) => {
      try {
        const { latitude, longitude } = coords;
        if (
          location &&
          location.lat === latitude &&
          location.lng === longitude
        ) {
          return;
        }

        const response = await axios.post("/api/cityFromLatLng", {
          latitude,
          longitude,
        });
        setLocation(response.data);
      } catch (err) {
        console.error("Error fetching city data:", err);
        setLocation(null);
      }
    };

    if ("geolocation" in navigator) {
      watcherId = navigator.geolocation.watchPosition(
        ({ coords }) => {
          // Debounce API calls (1 second)
          const debounceTimeout = setTimeout(() => {
            getGeolocation(coords);
          }, 1000);

          return () => clearTimeout(debounceTimeout);
        },
        () => {
          console.warn("Failed to access geolocation.");
          setLocation(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
          distanceFilter: 500,
        }
      );
    } else {
      console.warn("Geolocation is not supported by your browser.");
      setLocation(null);
    }

    return () => {
      if (watcherId) {
        navigator.geolocation.clearWatch(watcherId);
      }
    };
  }, [location]);

  return location;
}
