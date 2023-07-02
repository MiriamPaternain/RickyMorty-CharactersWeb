const Filters = ({ filterByName, handleFilter }) => {
  const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  const handleReturn = (event) => {
    event.preventDefault();
  };
  const charactersNotFound = true;
  return (
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
  );
};

export default Filters;
