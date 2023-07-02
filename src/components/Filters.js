const Filters = ({ filterByName, handleFilter }) => {
  const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  const handleReturn = (event) => {
    event.preventDefault();
  };

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
    </form>
  );
};

export default Filters;
