import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";
import { useState, useEffect } from "react";


const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    // const [filteredCharacters, setFilteredCharacters] = useState ([])
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


    // Filter through characters
    // const filterCharacters = (search) => {
    //     const {characterName, PatronusType, selectedHouse} = search;
    //     const filteredResults = characters.filter((character) => {
    //         const nameMatch = character.name.toLowerCase()
    //         const patronusMatch = character.patronus.toLowerCase()
    //         const houseMatch = selectedHouse === "" || character.house === selectedHouse;

    //         return nameMatch && patronus
    //     })

    // }
    
    
    return(
    <>
        {/* PROPS */}
        <CharacterForm selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse}/>
        <CharacterList characters={characters}/>{/* passes characters state as prop to characterList */}
    </>
    );
}

 
export default CharacterContainer;