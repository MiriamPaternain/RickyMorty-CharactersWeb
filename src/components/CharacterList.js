import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characterList }) => {
  const abcCharacterList = characterList.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const htmlLi = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id}>
      <CharacterItem eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul className='list'>{htmlLi}</ul>;
};

export default CharacterList;
