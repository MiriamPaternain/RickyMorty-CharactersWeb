import { Link } from 'react-router-dom';

const CharacterItem = (eachCharacter) => {
  return (
    <Link
      to={'/character/' + eachCharacter.eachCharacter.id}
      className='list--link'
    >
      <div className='list--eachCharacter'>
        <img
          src={eachCharacter.eachCharacter.image}
          alt=''
          className='list--img'
        />
        <h3 className='list--name'> {eachCharacter.eachCharacter.name} </h3>
        <p className='list--species'>{eachCharacter.eachCharacter.species}</p>
      </div>
    </Link>
  );
};
export default CharacterItem;
