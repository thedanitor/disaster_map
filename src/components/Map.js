import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import DisasterSelector from "./DisasterSelector";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [openInfoBox, setOpenInfoBox] = useState(false);

  // create marker for every event that has same type of coordinates object
  const markers = eventData.map(ev => {
    if (ev.geometries[0].coordinates[0] && ev.geometries[0].coordinates[1]) {
      return (
        <LocationMarker
          key={ev.id}
          evId={ev.categories[0].id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          title={ev.title}
          openInfoBox={openInfoBox}
          setOpenInfoBox={setOpenInfoBox}
          onClick={() => {
            setOpenInfoBox(true);
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              lat: ev.geometries[0].coordinates[1],
              lng: ev.geometries[0].coordinates[0],
              learn: ev.sources[0].url,
            });
          }}
        />
      );
    }
    return null;
  });
  //if locationInfo is not null and closeInfoBox is false, then show LocationInfoBox
  const locationBox =
    locationInfo && openInfoBox ? (
      <LocationInfoBox
        info={locationInfo}
        openInfoBox={openInfoBox}
        setOpenInfoBox={setOpenInfoBox}
      />
    ) : null;
  // return GoogleMapReact component with props
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        className="google-map"
      >
        {markers}
      </GoogleMapReact>
      {locationBox}
      <DisasterSelector />
    </div>
  );
};

Map.defaultProps = {
  // defaults to Seattle
  center: {
    lat: 47.6062,
    lng: -122.3321,
  },
  // zoom level 5
  zoom: 5,
};

export default Map;
