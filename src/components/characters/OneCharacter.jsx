import React from 'react';
import PropTypes from 'prop-types';
import styles from './OneCharacter.css';

function OneCharacter({ name, url }) {
  return (
    <figure>
      <img src={url}/>
      <figcaption>
        {name}
      </figcaption>    
    </figure>
  );
}

OneCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default OneCharacter;


