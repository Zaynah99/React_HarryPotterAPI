const  Character= ({character}) => {

    const handleShowClick = () => {
        
    };

    return (  
        <div className="characters">
         <h2>{character.name}</h2>
         <p> House: {character.house}</p>
         <p>Patronus: {character.patronus}</p>
         <img src = {character.image} alt= "image of character"/> 

         <div className="show-button">
            <button onClick= {handleShowClick}>Show more!</button>
         </div>


        </div>
    );
}
 
export default Character;