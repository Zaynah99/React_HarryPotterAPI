const  Character= ({character}) => {
    return (  
        <>
        <h1>Hi from Character!!</h1>
        <h3> Name: {character.name}</h3>
        <p> House: {character.house}</p>
        </>
    );
}
 
export default Character;