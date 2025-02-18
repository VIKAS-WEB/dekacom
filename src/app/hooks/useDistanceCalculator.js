"use client"
import { useState, useEffect } from 'react';

const useDistanceCalculator = (lat1, lon1, lat2, lon2) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const calculateDistance = () => {
      const p = 0.017453292519943295;
      const c = Math.cos;
      const a =
        0.5 -
        c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
      const calculatedDistance = (1000 * 12742 * Math.asin(Math.sqrt(a))).toFixed(0);
      setDistance(calculatedDistance);
    };

    calculateDistance();
  }, [lat1, lon1, lat2, lon2]);

  return distance;
};

export default useDistanceCalculator;