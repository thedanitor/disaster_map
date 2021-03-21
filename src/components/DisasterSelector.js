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
      {disasterInputs}
    </div>
  );
};

export default DisasterSelector;
