import { useEffect, useState } from 'react';
import randmImage from '../img/randm.png';
import '../styles/App.scss';
import '../styles/Header.scss';
import getDataFromApi from '../services/api.js';
import CharacterList from './CharacterList';
import CharacterItem from './CharacterItem';

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  return (
    <div>
      <header className='header'>
        <img
          src={randmImage}
          alt='Rick and Morty portal shoes'
          className='header__img'
        />
      </header>
      <main className='main'>
        <section className='main__filters'>
          <form className='main__filter--byName'></form>
        </section>
        <section className='main__characters'>
          <form className='main__characters--listCaracter'>
            <CharacterList characterList={characterList} />
          </form>
        </section>
      </main>
    </div>
  );
}

/* export*/
export default App;
