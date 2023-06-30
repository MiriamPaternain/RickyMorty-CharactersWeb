import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characterList }) => {
  const htmlLi = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id}>
      <CharacterItem eachCharacter={eachCharacter}/>
    </li>
  ));

  return (
  <ul className='list'>
    {htmlLi}
    </ul>
    );
};

export default CharacterList;
