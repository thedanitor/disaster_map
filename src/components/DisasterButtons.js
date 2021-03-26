const DisasterButtons = ({ name, id, handleSelectClick }) => {
  return (
    <button className="disaster-button" onClick={handleSelectClick} value={id}>
      {name}
    </button>
  );
};

export default DisasterButtons;
