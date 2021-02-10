export const getCharacters = () => {
    return fetch(
      'https://hey-arnold-api.herokuapp.com/api/v1/characters'
    ).then((res) => res.json());
  };
  
  export const getCharactersById = (id) => {
    return fetch(
      `https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`
    ).then((res) => res.json());
  };


  