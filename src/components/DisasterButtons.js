import React from 'react'

const DisasterButtons = ({ name, id, catId, handleSelectClick }) => {


    return (
        <button onClick={handleSelectClick} value={id} >
            {name} 
        </button>
    )
}

export default DisasterButtons
