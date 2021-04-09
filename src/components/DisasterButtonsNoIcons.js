// import { Icon } from "@iconify/react";

const DisasterButtonsNoIcons = ({
  name,
  id,
  handleSelectClick,
  iconClass,
}) => {
  return (
    <button className="disaster-button" onClick={handleSelectClick} value={id}>
      {name}
      <span  className={iconClass}>*</span>
    </button>
  );
};

export default DisasterButtonsNoIcons;
