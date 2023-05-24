import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {
    const characterComponents = characters.map((character) =>{ 
     return (
        <>
        <Character 
        key={character.name}
        character={character}
        />
        
        </>
    );
 });

  return (
    <div>
      <h1>Character List</h1>
      {characterComponents}
    </div>

  );
};

export default CharacterList;
