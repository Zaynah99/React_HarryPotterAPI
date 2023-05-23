import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";
import { useState, useEffect } from "react";


const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])


    const fetchCharacters = async () => {
        const response = await fetch ("https://hp-api.onrender.com/api/characters/students")
        const jsonData = await response.json();

        setCharacters(jsonData);
    }

    useEffect(() => {
        fetchCharacters();
    }, [])
    
    return(
    <>
        <h1>Hello from Character Container!</h1>
        <CharacterForm/>
        <CharacterList/>
    </>
    );
}

 
export default CharacterContainer;