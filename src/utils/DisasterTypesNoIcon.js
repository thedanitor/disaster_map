

function DisasterTypesNoIcon(name, id, iconClass ) {
  this.name = name;
  this.id = id;
  this.iconClass = iconClass;
}

const drought = new DisasterTypesNoIcon("Drought", 6, "location-icon drought");
const dustHaze = new DisasterTypesNoIcon("Dust and Haze", 7, "location-icon dust");
const wildfires = new DisasterTypesNoIcon("Wildfires", 8, "location-icon fire");
const floods = new DisasterTypesNoIcon("Floods", 9,  "location-icon flood");
const severeStorms = new DisasterTypesNoIcon("Severe Storms", 10,  "location-icon storm");
const volcanoes = new DisasterTypesNoIcon("Volcanoes", 12,  "location-icon volcano");
const waterColor = new DisasterTypesNoIcon("Water Color", 13,  "location-icon water-color");
const landslides = new DisasterTypesNoIcon("Landslides", 14,  "location-icon");
const seaLakeIce = new DisasterTypesNoIcon("Sea, Lake Ice", 15,  "location-icon");
const earthquakes = new DisasterTypesNoIcon("Earthquakes", 16,  "location-icon earthquake");
const snow = new DisasterTypesNoIcon("Snow", 17, "location-icon snow");
const tempExtremes = new DisasterTypesNoIcon("Extreme Temp", 18,  "location-icon temperature");

let disasterTypesNoIcon = [
  drought,
  dustHaze,
  wildfires,
  floods,
  severeStorms,
  volcanoes,
  waterColor,
  landslides,
  seaLakeIce,
  earthquakes,
  snow,
  tempExtremes,
];

export default disasterTypesNoIcon;