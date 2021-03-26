import disasterTypes from "../utils/DisasterTypes";
import DisasterButtons from "./DisasterButtons";

const DisasterSelector = ({ handleSelectClick }) => {
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
    <div className="selector">
      <h3>Filter by</h3>
      {/* Button for all disasters, sets typeFilter to blank */}
      <button className="disaster-button" onClick={handleSelectClick} value="">
        All Disasters
      </button>
      {disasterButtons}
    </div>
  );
};

export default DisasterSelector;
