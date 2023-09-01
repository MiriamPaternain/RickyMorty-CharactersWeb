import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  filterByName,
  handleFilter,
  filterBySpecie,
  filteredList,
}) => {
  const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  const handleReturn = (event) => {
    event.preventDefault();
  };
  const charactersNotFound = false;
  const handleFilterSpecie = (event) => {
    handleFilter('species', event.target.value);
  };
  return (
    <>
      <div className='filterContainer'>
        <form className='main__filter' onSubmit={handleReturn}>
          <input
            type='text'
            name='name_filter'
            value={filterByName}
            onChange={handleChangeFilterName}
            placeholder='Busca aquí tu personaje'
            className='main__filter--byName'
          />
        </form>
        <label className='speciesFilter' htmlFor='search_species'>
          Escoge una especie
          <select
            className='speciesFilter--box'
            name='search_species'
            id='search_species'
            value={filterBySpecie}
            onChange={handleFilterSpecie}
          >
            <option selected disbled value='ALL' className='speciesFilter--all'>
              Todas
            </option>
            <option value='Human' className='speciesFilter--human'>
              Humano
            </option>
            <option value='Alien' className='speciesFilter--alien'>
              Alien
            </option>
          </select>
        </label>

        {filterByName && charactersNotFound && (
          <p className='notFound'>
            No hay ningún personaje que coincida con la palabra{' '}
            <span className='notFound--word'>{filterByName}</span>
          </p>
        )}
       
      </div>
    </>
  );
};
Filters.propTypes = {
  filterByName: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterBySpecie: PropTypes.string.isRequired,
  filteredList: PropTypes.array.isRequired,
};
export default Filters;
