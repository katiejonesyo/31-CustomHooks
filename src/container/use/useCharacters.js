import { useState, useEffect } from "react";
import getCharacters from '../../services/fetchApi';

const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
    console.log(pageNumber);
  };

  useEffect(() => {
    getCharacters(activePage).then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, [activePage]);

  return { loading, characters, activePage, handleClick };
};

export default useCharacters;


