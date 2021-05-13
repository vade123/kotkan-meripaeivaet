import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Dot from "./Dot";
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCurrentLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    } else {
      console.log("Location Not Available");
    }
  }, []);

  const dot = () => {
    if (!currentLocation) return null;
    else {
      return (
        <Dot
          lat={currentLocation.lat}
          lng={currentLocation.lng}
          text={"EBIN"}
        />
      );
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsApiKey }}
        defaultCenter={{ lat: 61.4509, lng: 23.8488 }}
        defaultZoom={16}
      >
        {dot()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
