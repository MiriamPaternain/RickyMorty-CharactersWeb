import { Link } from 'react-router-dom';

const CharacterCard = ({ characterData }) => {
 

const iconStatus = (status) => {
  if (status.toLowerCase() === 'dead') {
    return <i className="far fa-skull"></i>
  } else if (status.toLowerCase() === 'alive') {
    return<i className="far fa-heart-circle-check"></i>
  } else {
    return <i className="fas fa-question"></i>
  }
}
/* const getStatus = (status) => {
    if (status.toLowerCase() === 'alive') {
      return 'Sí';
    } else if (status.toLowerCase() === 'dead') {
      return 'No';
    } else {
      return 'No se sabe';
    }
  }; */


  return (
    <>
      <Link to='/' className='cardContainer__section--volver'>
        <i className='fas fa-arrow-left'></i>Volver
      </Link>
      <div className='cardContainer'>
        <img
          src={characterData.image}
          alt=''
          className='cardContainer__section--image shine'
        />
        <section className='cardContainer__section'>
          <h1 className='cardContainer__section--name'>
            - {characterData.name} -
          </h1>
          <p className='cardContainer__section--species'>
            {characterData.species}
          </p>
          <p className='cardContainer__section--episodes'>
            ¿En cuántos episodios aparece? {characterData.episodes.length}
          </p>
          <p className='cardContainer__section--status'>
            ¿está vivo? {iconStatus(characterData.status)}
          </p>
        </section>
      </div>
    </>
  );
};

export default CharacterCard;


//<i class="fa-regular fa-skull"></i>

//<i class="fa-regular fa-alien"></i>

//<i class="fa-regular fa-heart-circle-check"></i>

 