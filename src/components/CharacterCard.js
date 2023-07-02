import { Link } from 'react-router-dom';

const CharacterCard = ({ characterData }) => {
  return (
    <>
    <Link to='/' className='cardContainer__section--volver'><i className="fas fa-arrow-left"></i>Volver</Link>
    <div className='cardContainer'>
        <img src={characterData.image} alt='' className='cardContainer__section--image'/>
      <section className='cardContainer__section'>
        <h1 className='cardContainer__section--name'>{characterData.name}</h1>
        <p className='cardContainer__section--species'>{characterData.species}</p>
        <p className='cardContainer__section--episodes'>¿En cuántos episodios aparece? {characterData.episodes.length}</p>
        <p className='cardContainer__section--status'>¿está vivo? {characterData.status}</p>
        
      </section>
    
    </div>
    </>
  );
};

export default CharacterCard;
