function DisasterTypes(name, id) {
  this.name = name;
  this.id = id;
}

const drought = new DisasterTypes("Drought", "6");
const dustHaze = new DisasterTypes("Dust and Haze", "7");
const wildfires = new DisasterTypes("Wildfires", "8");
const floods = new DisasterTypes("Floods", "9");
const severeStorms = new DisasterTypes("Severe Storms", "10");
const volcanoes = new DisasterTypes("Volcanoes", "12");
const waterColor = new DisasterTypes("Water Color", "13");
const landslides = new DisasterTypes("Landslides", "14");
const seaLakeIce = new DisasterTypes("Sea and Lake Ice", "15");
const earthquakes = new DisasterTypes("Earthquakes", "16");
const snow = new DisasterTypes("Snow", "17");
const tempExtremes = new DisasterTypes("Temperature Extremes", "18");

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
