import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";
import { useState, useEffect } from "react";


const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("");


    // Fetching API
    const fetchCharacters = async () => {
        const response = await fetch ("https://hp-api.onrender.com/api/characters/students")
        const jsonData = await response.json();

        setCharacters(jsonData);
    }

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/characters/students`)
          .then((response) => response.json())
          .then((response) => setCharacters(response))
          .catch((err) => setError(err.message));
    
        }, [])
    
    
    return(
    <>
        <h1>Hello from Character Container!</h1>
        {/* PROPS */}
        <CharacterForm/>
        <CharacterList/>
    </>
    );
}

 
export default CharacterContainer;