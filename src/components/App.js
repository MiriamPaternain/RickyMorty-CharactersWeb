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
import { Routes, Route } from 'react-router-dom';
import CharacterCard from './CharacterCard.js';
import { matchPath, useLocation } from 'react-router';
import '../styles/CharacterCard.scss';

function App() {
  //variables de estado
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [filterByName, setFilterByName] = useState('');
  const [filterBySpecie, setFilterBySpecie] = useState('ALL');

  //useEffect
  useEffect(() => {
    if (localStorage.getItem('characters') === null) {
      getDataFromApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  //functions
  const filteredList = characterList.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase()))
      .filter((eachCharacter) => {
        if (filterBySpecie === 'ALL') {
          return true;
        } else {
          return eachCharacter.species === filterBySpecie;
        }
      });


  const handleFilter = (filterBy, targetValue) => {
    if (filterBy === 'name') {
      setFilterByName(targetValue);
    }
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/character/:characterId', pathname);
  const characterId = routeData?.params.characterId;

  //const characterId = routeData !== null ? routeData.params.contactId: '';

  const characterData = characterList.find(
    (eachCharacter) => eachCharacter.id === parseInt(characterId)
  );

  const handleFilterSpecie = (event) => {
    setFilterBySpecie(event.target.value);
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
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  filterByName={filterByName}
                  handleFilter={handleFilter}
                />
                <label className='specieFilter' htmlFor='search_species'>
                  Especie
                  <select
                    className='specieFilter--box'
                    name='search_species'
                    id='search_species'
                    value={filterBySpecie}
                    onChange={handleFilterSpecie}
                  >
                    <option selected disbled value='ALL'>
                      Escoge una especie
                    </option>
                    <option value='Human'>Humano</option>
                    <option value='Alien'>Alien</option>
                  </select>
                </label>
                <form className='main__characters--listCaracter'>
                  <CharacterList characterList={filteredList} />
                </form>
              </>
            }
          />
          <Route
            path='/character/:characterId'
            element={<CharacterCard characterData={characterData} />}
          />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

/* export*/
export default App;
