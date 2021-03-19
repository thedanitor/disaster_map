import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  // create marker for every event with ID of 8 (wildfire) at coordinates
  const markers = eventData.map(ev => {
    if (ev.categories[0].id) {
      return (
        <LocationMarker
          evId={ev.categories[0].id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {/* if locationInfo is not null, then show LocationInfoBox  */}
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  // defaults to Seattle
  center: {
    lat: 47.6062,
    lng: -122.3321,
  },
  // zoom level 6
  zoom: 6,
};

export default Map;
