import { useState } from "react";



const CharacterForm = ({selectedHouse, setSelectedHouse}) => {

    const handleHouseChange = (event) => {
     const selectedHouse = event.target.value;
     setSelectedHouse(selectedHouse);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <form onSubmit={handleFormSubmit}>
        <h2>Search for a character:</h2>
        <input
        type="text"
        name="name"
        placeholder="Character name"
        />

        <input
        type="text"
        name="patronus"
        placeholder="Patronus type"
        />

        <select onChange={handleHouseChange} name="house" value={selectedHouse || ""}>
            <option disabled-value="select-house">Select a house</option>
            <option value="gryffindor">Gryffindor</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="slytherin">Slytherin</option>
        </select>
        <button type="submit">Search</button>
        </form>
    );
}
 
export default CharacterForm;