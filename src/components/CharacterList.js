import React from 'react';
import CharacterItem from './CharacterItem';
import PropTypes from 'prop-types';

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
CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
