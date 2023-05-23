import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterComponents = characters.map((character) =>{ 
    
  return (
    <div>
      <h2>Character List</h2>
        <Character 
        key={character.name}
        character={character} />
    </div>

  );
})
};

export default CharacterList;
