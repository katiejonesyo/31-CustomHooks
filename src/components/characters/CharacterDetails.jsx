import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetails({ name, image }) {
  return (
    <div>
      <figure>
        <figcaption data-testid="name">{name}</figcaption>
        <img src={image}/>
      </figure>
    </div>
  );
}

CharacterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterDetails;



