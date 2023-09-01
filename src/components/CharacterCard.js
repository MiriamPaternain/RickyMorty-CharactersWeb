import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const CharacterCard = ({ characterData }) => {
  const getStatus = (status) => {
    if (status.toLowerCase() === 'alive') {
      return 'Sí';
    } else if (status.toLowerCase() === 'dead') {
      return 'No';
    } else {
      return 'No se sabe';
    }
  };
  if (characterData) {
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
              ¿está vivo? {getStatus(characterData.status)}
            </p>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className='pageNotFound'>
          Parece que la página que buscas es errónea
        </p>
        <p className='pageNotFound'>
          Hay pros y contras en todas las líneas temporales alternativas
        </p>
      </>
    );
  }
};
CharacterCard.propTypes = {
  characterData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    episodes: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

export default CharacterCard;
