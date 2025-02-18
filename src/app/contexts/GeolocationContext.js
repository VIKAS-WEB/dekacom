"use client";
import React, { createContext, useContext } from "react";
import useGeolocation from "../hooks/useGeolocation";

const GeolocationContext = createContext();

export function GeolocationProvider({ children }) {
  const geolocationData = useGeolocation(); // Get location data from the hook

  return (
    <GeolocationContext.Provider value={geolocationData}>
      {children}
    </GeolocationContext.Provider>
  );
}

export function useGeolocationContext() {
  return useContext(GeolocationContext); // Access shared data
}
