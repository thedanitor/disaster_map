import React from "react";

const LocationHoverInfoBox = ({ info }) => {
  let latitude = info.lat;
  let longitude = info.lng;
  // change latitude to S or N
  if (latitude < 0) {
    latitude = latitude * -1 + " °S";
  } else {
    latitude = latitude + " °N";
  }
  // change longitude to W or E
  if (longitude < 0) {
    longitude = longitude * -1 + " °W";
  } else {
    longitude = longitude + " °E";
  }

  return (
    <div className="location-hover-info">
      <h5>{info.title}</h5>
      <h6>
        {latitude} {longitude}
      </h6>
    </div>
  );
};

export default LocationHoverInfoBox;
