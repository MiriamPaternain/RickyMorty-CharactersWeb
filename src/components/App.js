import { useEffect, useState } from 'react';
import randmImage from '../img/randm.png';
import '../styles/App.scss';
import '../styles/Header.scss';
import getDataFromApi from '../services/api.js';
import CharacterList from './CharacterList';
import '../styles/CharacterList.scss';
import ls from '../services/localStorage.js';
import '../styles/Filter.scss';
import Filters from './Filters';

function App() {
  //variables de estado
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [filterByName, setFilterByName] = useState('');

  //useEffect
  useEffect(() => {
    if (localStorage.getItem('characters') === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  //events

  //functions
  const filteredList = characterList.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  const handleFilter = (filterBy, targetValue) => {
    if (filterBy === 'name') {
      setFilterByName(targetValue);
    }
  };

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
        <Filters filterByName={filterByName} handleFilter={handleFilter} />

        <form className='main__characters--listCaracter'>
          <CharacterList characterList={filteredList} />
        </form>
      </main>
      <footer></footer>
    </div>
  );
}

/* export*/
export default App;
