import { Link } from 'react-router-dom';

const CharacterItem = (eachCharacter) => {
  
  return (
    <>
      <Link
        to={'/character/' + eachCharacter.eachCharacter.id}
        className='list--link'
      >
        <section className='list--eachCharacter'>
          <img
            src={eachCharacter.eachCharacter.image}
            alt=''
            className='list--img'
          />
          {eachCharacter.eachCharacter.status === 'Dead' && (
            <i className='fas fa-skull'></i>
          )}
          {eachCharacter.eachCharacter.speciea === 'Human' && (
            <i className="fas fa-person"></i>
          )}
          {/* {eachCharacter.eachCharacter.species === 'Alien' && (
            <i className='fab fa-reddit-alien'></i>
          )} */}
         
          <h3 className='list--name'> {eachCharacter.eachCharacter.name} </h3>
          <p className='list--species'>{eachCharacter.eachCharacter.species}</p>
        </section>
      </Link>
    </>
  );
};
export default CharacterItem;

/* const deadIcon = (eachCharacter) => {
  if (status.toLowerCase() === 'dead') {
    return <i className="fas fa-skull"></i>
  }
} */
