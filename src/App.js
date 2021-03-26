import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import DisasterSelector from "./components/DisasterSelector";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState();

  const [typeFilter, setTypeFilter] = useState();

  const handleSelectClick = (e) => {
    setTypeFilter(e.target.value);
    console.log("typeFilter" + typeFilter);
}

  const checkIds = (filterId, disasterId) => {
    if (filterId === disasterId) {
      return true;
    }
  }

  // toggles isChecked state
  const toggleCheck = (e) => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
    console.log(e.target.name);
  }



  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // fetch data from API
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      // destructure to just get events array
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, [])

  return (
    <div>
      <Header/>
      <DisasterSelector setIsChecked={setIsChecked} toggleCheck={toggleCheck} isChecked={isChecked} handleSelectClick={handleSelectClick}/>
      { !loading ? <Map eventData={eventData} handleSelectClick={handleSelectClick} typeFilter={typeFilter} checkIds={checkIds}/> : <Loader />}
    </div>
  );
}

export default App;
