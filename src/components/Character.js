const  Character= ({character}) => {
    return (  
        <>
        <h3> Name: {character.name}</h3>
        <p> House: {character.house}</p>
        </>
    );
}
 
export default Character;