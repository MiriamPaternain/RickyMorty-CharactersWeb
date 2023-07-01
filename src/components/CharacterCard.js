import { Link } from 'react-router-dom';

const CharacterCard = ({ characterData }) => {
  return (
    <div>
      <section>
        <h1>{characterData.name}</h1>
        <p>{characterData.species}</p>
        <p>¿En cuántos episodios aparece? {characterData.episodes.length}</p>
        <p>¿está vivo? {characterData.status}</p>
        <Link to='/'>Volver</Link>
      </section>
      <img src={characterData.image} alt='' />
    </div>
  );
};

export default CharacterCard;
