const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      const cleanData = data.results.map((objectApi) => {
        return {
          id: objectApi.id,
          image: objectApi.image,
          name: objectApi.name,
          species: objectApi.species,
          episodes: objectApi.episode,
          status: objectApi.status,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default getDataFromApi;
