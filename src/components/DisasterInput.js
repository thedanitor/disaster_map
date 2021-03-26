// import { useState } from "react";

const DisasterInput = ({ name, id, isChecked, toggleCheck }) => {


  return (
    <div className="disasters">
        <label htmlFor={id}>{name}
      <input
        className="disater-input"
        type="checkbox"
        key={id}
        data-id={id}
        name={name}
        value={name}
        checked={isChecked}
        onChange={toggleCheck}
        // onClick={handleCheck}
        // defaultChecked
      />
      </label>
    </div>
  );
};

export default DisasterInput;
