import { useEffect, useState } from "react";
import disasterTypes from "../utils/DisasterTypes";
// import DisasterInput from "./DisasterInput";
import DisasterButtons from "./DisasterButtons";

const DisasterSelector = ( {handleSelectClick} ) => {
//   const [typeFilter, setTypeFilter] = useState("");

//   const handleSelectClick = (e) => {
//     setTypeFilter(e.target.value);
//     console.log(typeFilter);
// }

  // const disasterInputs = disasterTypes.map(disaster => {
  //   return (
  //     <DisasterInput key={disaster.id} name={disaster.name} isChecked={isChecked} toggleCheck={toggleCheck} />
  //   );
  // });

  const disasterButtons = disasterTypes.map(disaster => {
    return (
      <DisasterButtons key={disaster.id} name={disaster.name} catId={disaster.catId} handleSelectClick={handleSelectClick} id={disaster.id} />
    );
  });

  return (
    <div className="selector">
      <h3>Filter by</h3>
      {/* <label for="all">All Disasters</label>
      <input
        className="disater-input all"
        type="checkbox"
        id="all"
        name="all"
        value="all"
        defaultChecked={checked}
        // onChange={toggleCheck}
      /> */}
<button onClick={handleSelectClick} value="" >
            All Disasters
        </button>
      {disasterButtons}

      {/* {disasterInputs} */}
      {/* <button>Set Filter</button> */}
    </div>
  );
};

export default DisasterSelector;
