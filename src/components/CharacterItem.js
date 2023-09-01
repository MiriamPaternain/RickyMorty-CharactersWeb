import { Link } from 'react-router-dom';

const CharacterItem = ({ eachCharacter }) => {
  const { id, image, status, species, name } = eachCharacter;

  return (
    <>
      <Link to={`/character/${id}`} className='list--link'>
        <section className='list--eachCharacter'>
          <img src={image} alt='' className='list--img' />
          {status === 'Dead' && <i className='fas fa-skull'></i>}
          {species === 'Human' && <i className='fas fa-person'></i>}
          {/* {species === 'Alien' && <i className='fab fa-reddit-alien'></i>} */}

         <h3 className='list--name'>{name}</h3>
          <p className='list--species'>{species}</p>
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
