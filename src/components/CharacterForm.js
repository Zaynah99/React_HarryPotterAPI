const CharacterForm = () => {

    const handleHouseChange = (event) => {
        
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

        <select onChange={handleHouseChange} name="house" value="house">
            <option disabled-value="select-house">Select a house</option>
        </select>
        <button type="submit">Search</button>
        </form>
    );
}
 
export default CharacterForm;