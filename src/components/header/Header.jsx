import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/Theme';
import './Header.css';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleChange = ({ target }) => {
    if(target.checked){
      setTheme('light');
    } else setTheme('dark');
  };
  const themeStyle = theme === 'dark' ? styles.dark : styles.light;
  return (
    <div className={themeStyle} >
      <h1  >Arnold Api</h1>
      <Link to="/characters">List of all the characters</Link><br></br>
      <Link to="/">Home</Link>
      <input type="checkbox" onChange={handleChange}></input>
    </div>
  );
}



