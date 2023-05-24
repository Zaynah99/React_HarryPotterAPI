const  Character= ({character}) => {
    return (  
        <>
        <h3> Name: {character.name}</h3>
        <p> House: {character.house}</p>
        <p>Patronus:{character.patronus}</p>
        <img src = {character.image}/> 
        </>
    );
}
 
export default Character;