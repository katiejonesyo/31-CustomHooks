import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import AllCharacters from '../../container/characters/AllCharacters';
import Character from '../../container/characters/Character';
import Header from '../header/Header';
import { CharacterTheme } from '../hooks/Theme';

export default function App() {
  return (
    <Router>
      <CharacterTheme>
      <Header/>
      <Switch>
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/characters" component={AllCharacters} />
        <Route exact path="/characters/:id" component={Character}/>
      </Switch>
      <CharacterTheme />
    </Router>
  );
}


