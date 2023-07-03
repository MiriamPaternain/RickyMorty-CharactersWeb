const Filters = ({ filterByName, handleFilter, filterBySpecie }) => {
  const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  const handleReturn = (event) => {
    event.preventDefault();
  };
  const charactersNotFound = true;
  const handleFilterSpecie = (event) => {
    handleFilter('species',event.target.value);
  };
  return (
    <>
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
      <label className='specieFilter' htmlFor='search_species'>
        Escoge una especie
        <select
          className='specieFilter--box'
          name='search_species'
          id='search_species'
          value={filterBySpecie}
          onChange={handleFilterSpecie}
        >
          <option selected disbled value='ALL'>
            Todas
          </option>
          <option value='Human'>Humano</option>
          <option value='Alien'>Alien</option>
        </select>
      </label>
    </>
  );
};

export default Filters;
