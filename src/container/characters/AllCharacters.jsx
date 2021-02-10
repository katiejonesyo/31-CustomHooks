import React from 'react';
import { useEffect } from 'react';
import CharacterList from '../../components/characters/CharacterList';
import { useCharacters } from '../Character';
import Loading from '../../components/loading/Loading';

const AllCharacters = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;
  return <CharacterList characters={characters}/>;
};

export default AllCharacters;



