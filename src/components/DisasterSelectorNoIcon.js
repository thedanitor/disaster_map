import { useState } from "react";
// import { Icon } from "@iconify/react";
// import exclamationIcon from "@iconify-icons/bi/exclamation-triangle-fill";
import disasterTypesNoIcon from "../utils/DisasterTypesNoIcon";
import DisasterButtonsNoIcons from "./DisasterButtonsNoIcons";

const DisasterSelectorNoIcon = ({ handleSelectClick }) => {
  const [minimize, setMinimize] = useState("selector");
  const [minButtonChar, setMinButtonChar] = useState("-");
  // toggles minimize class on selector
  const handleMinimize = () => {
    minimize === "selector"
      ? setMinimize("selector minimize")
      : setMinimize("selector");
    minButtonChar === "-" ? setMinButtonChar("+") : setMinButtonChar("-");
  };
  // map buttons for each disasterType to DisasterButtons
  const disasterButtons = disasterTypesNoIcon.map(disaster => {
    return (
      <DisasterButtonsNoIcons
        key={disaster.id}
        name={disaster.name}
        iconClass={disaster.iconClass}
        handleSelectClick={handleSelectClick}
        id={disaster.id}
      />
    );
  });

  return (
    <div className={minimize}>
      <button className="disaster-button minimize-btn" onClick={handleMinimize}>
        {minButtonChar}
      </button>
      <h3>Filter by</h3>
      {/* Button for all disasters, sets typesArr to ["all"] */}
      <button
        className="disaster-button"
        onClick={handleSelectClick}
        value="all"
      >
        All Disasters<span className="location-icon other">*</span>
      </button>
      {disasterButtons}
      {/* Button for clear disasters, sets typesArr to [""] */}
      <button className="disaster-button" onClick={handleSelectClick} value="">
        Clear Disasters
      </button>
    </div>
  );
};

export default DisasterSelectorNoIcon;
