import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import DisasterSelector from "./components/DisasterSelector";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState();

  // handles disaster selector buttons
  const handleSelectClick = e => {
    setTypeFilter(e.target.value);
  };

  // on page load
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
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
      {/* if loading is false, display Map, otherwise display Loader */}
      {!loading ? (
        <Map
          eventData={eventData}
          handleSelectClick={handleSelectClick}
          typeFilter={typeFilter}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
