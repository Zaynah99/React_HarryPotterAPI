import { useState } from "react";

const  Character= ({character}) => {

    const [showDetails, setShowDetails] = useState(false)

    const handleShowClick = async () => {
        // {character.ancestry}
        // {character.dateOfBirth}
        // {character.wand}
        console.log("ive been clicked!");
        
        
    };

    return (  
        <div className="characters">
         <h2>{character.name}</h2>
         <p> House: {character.house}</p>
         <p>Patronus: {character.patronus}</p>
         <img src = {character.image} alt= "image of characters"/> 
 


         <button class ="show" onClick={() => setShowDetails(!showDetails)}> Show more! </button>
        {showDetails ? <p>
            Date of Birth: {character.dateOfBirth} 
            Ancestry:{character.ancestry}
            Played by:{character.actor}
            </p>: null}

         


        
         </div>

    );
}
 
export default Character;