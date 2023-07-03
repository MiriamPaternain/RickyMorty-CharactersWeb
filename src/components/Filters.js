const Filters = ({ filterByName, handleFilter, filterBySpecie }) => {
  const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  const handleReturn = (event) => {
    event.preventDefault();
  };
  const charactersNotFound = true;
  const handleFilterSpecie = (event) => {
    handleFilter('species', event.target.value);
  };
  return (
    <>
      <div className="filterContainer">
        <form className='main__filter' onSubmit={handleReturn}>
          <input
            type='text'
            name='name_filter'
            value={filterByName}
            onChange={handleChangeFilterName}
            placeholder='Busca aquí tu personaje'
            className='main__filter--byName'
          />
          {filterByName && charactersNotFound && (
            <p className='notFound'>
              No hay ningún personaje que coincida con la palabra{' '}
              <span className='notFound--word'>{filterByName}</span>
            </p>
          )}
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
            <option selected disbled value='ALL' className="speciesFilter--all">
              Todas
            </option>
            <option value='Human' className="speciesFilter--human">Humano</option>
            <option value='Alien' className="speciesFilter--alien">Alien</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Filters;
