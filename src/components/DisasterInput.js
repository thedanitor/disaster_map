const DisasterInput = ({ name, id, key }) => {
  return (
    <div className="disasters">
        <label for={id}>{name}</label>
      <input
        className="disater-input"
        type="checkbox"
        id={id}
        name={name}
        value={name}
        key={key}
      />
      
    </div>
  );
};

export default DisasterInput;
