import React from "react";
const CharacterItem = (eachCharacter) => {
  return (
    <div className="list--eachCharacter">
      <img src={eachCharacter.eachCharacter.image} alt='' className="list--img"/>
      <h3 className="list--name"> {eachCharacter.eachCharacter.name} </h3>
      <p className="list--species">{eachCharacter.eachCharacter.species}</p>
    </div>
  );
};
export default CharacterItem;
