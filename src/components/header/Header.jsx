import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Arnold Api</h1>
      <Link to="/characters">List of all the characters</Link><br></br>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;



