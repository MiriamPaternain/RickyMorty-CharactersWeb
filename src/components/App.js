import { useEffect, useState } from 'react';
import randmImage from '../img/randm.png';
import '../styles/App.scss';
import '../styles/Header.scss';
import getDataFromApi from '../services/api.js';
import CharacterList from './CharacterList';
import '../styles/CharacterList.scss';
import ls from '../services/localStorage.js';

function App() {
  const [characterList, setCharacterList] = useState(ls.get('characters', []));

  useEffect(() => {
    if (localStorage.getItem('characters') === null){
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characters', cleanData);
      });
    }
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
        <section>
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
