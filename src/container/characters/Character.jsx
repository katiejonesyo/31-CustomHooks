import React from 'react';
import PropTypes from 'prop-types';
import { useById } from '../../components/hooks/Character';
import Loading from '../../components/loading/Loading';
import CharacterDetails from '../../components/characters/CharacterDetails';

const Character = ({ match }) => {
  const { loading, character } = useById(match.params.id);
  
  if(loading) return <Loading />;
  return <CharacterDetails {...character} />;
};

Character.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Character;


