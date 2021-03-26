function DisasterTypes(name, id, isChecked, catId ) {
  this.name = name;
  this.id = id;
  this.isChecked = isChecked;
  this.catId = catId;
}

const drought = new DisasterTypes("Drought", 6, true, "drought");
const dustHaze = new DisasterTypes("Dust and Haze", 7, true, "dustHaze");
const wildfires = new DisasterTypes("Wildfires", 8, true, "wildfires");
const floods = new DisasterTypes("Floods", 9, true, "floods");
const severeStorms = new DisasterTypes("Severe Storms", 10, true, "severeStorms");
const volcanoes = new DisasterTypes("Volcanoes", 12, true, "volcanoes");
const waterColor = new DisasterTypes("Water Color", 13, true, "waterColor");
const landslides = new DisasterTypes("Landslides", 14, true, "landslides");
const seaLakeIce = new DisasterTypes("Sea and Lake Ice", 15, true, "seaLakeIce");
const earthquakes = new DisasterTypes("Earthquakes", 16, true, "earthquakes");
const snow = new DisasterTypes("Snow", 17, true, "snow");
const tempExtremes = new DisasterTypes("Temperature Extremes", 18, true, "tempExtremes");

let disasterTypes = [
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

export default disasterTypes;
