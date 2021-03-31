import { useState } from "react";
import disasterTypes from "../utils/DisasterTypes";
import DisasterButtons from "./DisasterButtons";
// import { Icon, InlineIcon } from '@iconify/react';
// import windowMinimize from '@iconify-icons/fa-solid/window-minimize';


const DisasterSelector = ({ handleSelectClick }) => {
  const [minimize, setMinimize] = useState("selector");

  const handleMinimize = () => {
    minimize === "selector" ? setMinimize("selector minimize") : setMinimize("selector");
    console.log(minimize);
  }

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
      {/* <Icon icon={windowMinimize} className="minimize" /> */}
      <button className="disaster-button minimize-btn" onClick={handleMinimize}>-</button>
      <h3>Filter by</h3>
      {/* Button for all disasters, sets typeFilter to blank */}
      <button className="disaster-button" onClick={handleSelectClick} value="all">
        All Disasters
      </button>
      {disasterButtons}
      <button className="disaster-button" onClick={handleSelectClick} value="">Clear Disasters</button>
    </div>
  );
};

export default DisasterSelector;
