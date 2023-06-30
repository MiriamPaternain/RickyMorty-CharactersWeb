import React from "react";
const CharacterItem = (eachCharacter) => {
  return (
    <div>
      <img src={eachCharacter.eachCharacter.image} alt='' />
      <h3> {eachCharacter.eachCharacter.name} </h3>
      <p>{eachCharacter.eachCharacter.species}</p>
    </div>
  );
};
export default CharacterItem;
