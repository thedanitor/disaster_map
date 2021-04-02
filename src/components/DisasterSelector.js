import { useState } from "react";
import disasterTypes from "../utils/DisasterTypes";
import DisasterButtons from "./DisasterButtons";

const DisasterSelector = ({ handleSelectClick }) => {
  const [minimize, setMinimize] = useState("selector");
  // toggles minimize class on selector
  const handleMinimize = () => {
    minimize === "selector"
      ? setMinimize("selector minimize")
      : setMinimize("selector");
  };
  // map buttons for each disasterType to DisasterButtons
  const disasterButtons = disasterTypes.map(disaster => {
    return (
      <DisasterButtons
        key={disaster.id}
        name={disaster.name}
        handleSelectClick={handleSelectClick}
        id={disaster.id}
      />
    );
  });

  return (
    <div className={minimize}>
      <button className="disaster-button minimize-btn" onClick={handleMinimize}>
        -
      </button>
      <h3>Filter by</h3>
      {/* Button for all disasters, sets typesArr to ["all"] */}
      <button
        className="disaster-button"
        onClick={handleSelectClick}
        value="all"
      >
        All Disasters
      </button>
      {disasterButtons}
      {/* Button for clear disasters, sets typesArr to [""] */}
      <button className="disaster-button" onClick={handleSelectClick} value="">
        Clear Disasters
      </button>
    </div>
  );
};

export default DisasterSelector;
