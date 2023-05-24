import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";
import { useState, useEffect } from "react";


const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("")


    // Fetching API
    const fetchCharacters = async () => {
        fetch(`https://hp-api.onrender.com/api/characters/students`)
          .then((response) => response.json())
          .then((jsonData) => setCharacters(jsonData))
          .catch((err) => setError(err.message));

    };
    
    useEffect(() => {
        fetchCharacters();
          }, []);
    
    
    return(
    <>
        <h1>Hello from Character Container!</h1>
        {/* PROPS */}
        <CharacterForm selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse}/>
        <CharacterList characters={characters}/>{/* passes characters state as prop to characterList */}
    </>
    );
}

 
export default CharacterContainer;