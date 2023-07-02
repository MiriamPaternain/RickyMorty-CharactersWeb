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
        {eachCharacter.eachCharacter.status === 'Dead' && (
            <i className="fas fa-skull"></i>
          )}
        <div className='list--text'>
          <h3 className='list--name'> {eachCharacter.eachCharacter.name} </h3>
          <p className='list--species'>{eachCharacter.eachCharacter.species}</p>
        </div>
      </div>
    </Link>
  );
};
export default CharacterItem;


/* const deadIcon = (eachCharacter) => {
  if (status.toLowerCase() === 'dead') {
    return <i className="fas fa-skull"></i>
  }
} */