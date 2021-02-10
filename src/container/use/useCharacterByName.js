import { useState, useEffect } from 'react';
import getCharactersById from '../../services/fetchApi';

const useCharactersById = (name) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharactersById(name).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, []);

  return { loading, character };
};

export default useChgetCharactersById;


