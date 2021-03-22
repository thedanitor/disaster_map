import disasterTypes from "../utils/DisasterTypes";
import DisasterInput from "./DisasterInput";

const DisasterSelector = () => {
  const disasterInputs = disasterTypes.map(disaster => {
    return (
      <DisasterInput key={disaster.id} name={disaster.name} id={disaster.id} />
    );
  });

  return (
    <div className="selector">
      <h3>Filter by</h3>
      <label for="all">All Disasters</label>
      <input
        className="disater-input all"
        type="checkbox"
        id="all"
        name="all"
        value="all"
      />
      {disasterInputs}
      
    </div>
  );
};

export default DisasterSelector;
