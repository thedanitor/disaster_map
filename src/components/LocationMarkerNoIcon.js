// import { Icon } from "@iconify/react";
// import exclamationIcon from "@iconify-icons/bi/exclamation-triangle-fill";
// import droughtIcon from "@iconify-icons/mdi/water-off-outline";
// // import dustHazeIcon from "@iconify-icons/bi/cloud-haze-fill";
// import fireIcon from "@iconify-icons/icomoon-free/fire";
// import floodIcon from "@iconify-icons/bi/water";
// import stormIcon from "@iconify-icons/bi/tropical-storm";
// import volcanoIcon from "@iconify-icons/maki/volcano-11";
// import waterColorIcon from "@iconify/icons-mdi/water-alert";
// import landslideIcon from "@iconify-icons/openmoji/landslide";
// import icebergIcon from "@iconify-icons/openmoji/iceberg";
// import earthquakeIcon from "@iconify-icons/wi/earthquake";
// import snowIcon from "@iconify-icons/bi/snow";
// import temperatureIcon from "@iconify-icons/bi/thermometer-high";

const LocationMarkerNoIcon = ({ evId, lat, lng, title, onClick }) => {
  let iconName;
  let latitude = lat.toFixed(2);
  let longitude = lng.toFixed(2);

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

  // display different icon depending on evId
  switch (evId) {
    case 6:
      iconName = "location-icon drought";
      break;
    // case 7:
    //   iconType = dustHazeIcon;
    //   iconName = "location-icon dust";
    //   break;
    case 8:
      iconName = "location-icon fire";
      break;
    case 9:

      iconName = "location-icon flood";
      break;
    case 10:
      iconName = "location-icon storm";
      break;
    case 12:
      iconName = "location-icon volcano";
      break;
    case 13:

      iconName = "location-icon water-color";
      break;
    case 14:
      iconName = "location-icon landslide";
      break;
    case 15:
      iconName = "location-icon ice";
      break;
    case 16:
      iconName = "location-icon earthquake";
      break;
    case 17:
      iconName = "location-icon snow";
      break;
    case 18:
      iconName = "location-icon temperature";
      break;
    case 19:
      iconName = "location-icon other";
      break;
    default:
      iconName = "location-icon hidden";
  }

  return (
    <div className="location-marker" onClick={onClick}>
      <span className={iconName}>*</span>
      <div className="location-hover-info">
        <h4>{title}</h4>
        <h5>
          {latitude} {longitude}
        </h5>
        <p>Click Icon for more info</p>
      </div>
    </div>
  );
};

export default LocationMarkerNoIcon;
