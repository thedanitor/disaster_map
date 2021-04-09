import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisasterSelector from "./components/DisasterSelector";
// import DisasterSelectorNoIcon from "./components/DisasterSelectorNoIcon";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typesArr, setTypesArr] = useState(["all"]);

  // handles disaster selector buttons
  const handleSelectClick = e => {
    // if button value is "all", set typesArr to ["all"]
    if (e.target.value === "all") {
      setTypesArr(["all"]);
      // if value is "", set typesArr to [""]
    } else if (e.target.value === "") {
      setTypesArr([""]);
      // if value is already in array, remove it
    } else if (typesArr.includes(e.target.value)) {
      removeFromTypesArr(e);
      // otherwise add value to array
    } else {
      addToTypesArr(e);
    }
  };
  // add value to typesArr
  const addToTypesArr = e => {
    // remove "all" from array
    setTypesArr(typesArr.filter(e => e !== "all"));
    // add button value to array
    setTypesArr(typesArr => [...typesArr, e.target.value]);
  };
  // remove value to typesArr
  const removeFromTypesArr = e => {
    // filter out button value from array
    let type = e.target.value;
    setTypesArr(typesArr.filter(e => e !== type));
  };

  // on page load
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setTypesArr(["all"]);
      // fetch data from API
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      // destructure to just get events array
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <DisasterSelector handleSelectClick={handleSelectClick} />
      {/* <DisasterSelectorNoIcon handleSelectClick={handleSelectClick} /> */}
      {/* if loading is false, display Map, otherwise display Loader */}
      {!loading ? (
        <Map
          eventData={eventData}
          handleSelectClick={handleSelectClick}
          typesArr={typesArr}
        />
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
}

export default App;
