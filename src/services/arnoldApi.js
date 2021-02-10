/* eslint-disable max-len */
/* eslint-disable no-undef */
export const allCharacters = () => {
    return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(characters => characters.map(character => ({
        id: character._id,
        name: character.name,
        url: character.image,
      })));
  };
  export const characterById = (id) => {
    return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
      .then(res => res.json());
  };


