import { useEffect, useState } from 'react';
import randmImage from '../img/randm.png';
import '../styles/App.scss';
import '../styles/Header.scss';
import getDataFromApi from '../services/api.js';
import CharacterList from './CharacterList';
import '../styles/CharacterList.scss';
import ls from '../services/localStorage.js';
import '../styles/Filter.scss';

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
       
          <form className='main__filter'>
            <input type="text" name="name_filter" placeholder='Busca aquí tu personaje' className='main__filter--byName'/>
          </form>
     
        <section>
          <form className='main__characters--listCaracter'>
            <CharacterList characterList={characterList} />
          </form>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

/* export*/
export default App;
