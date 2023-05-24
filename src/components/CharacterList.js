import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterComponents = characters.map((character) =>{ 
     return (
        <Character 
        key={character.name}
        character={character}
        image={character.image} 
        />
    );
 });

  return (
    <div>
      <h2>Character List</h2>
      {characterComponents}
    </div>

  );
};

export default CharacterList;