const Filters = ({filterByName, handleFilter}) => {
     const handleChangeFilterName = (event) => {
    handleFilter('name', event.target.value);
  };
  return (
    <form className='main__filter'>
          <input
            type='text'
            name='name_filter'
            value={filterByName}
            onChange={handleChangeFilterName}
            placeholder='Busca aquí tu personaje'
            className='main__filter--byName'
          />
        </form>

  )
}

export default Filters