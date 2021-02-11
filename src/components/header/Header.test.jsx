import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router,
    Route,
    Switch } from 'react-router-dom';
import Header from './Header';
import { NewTheme } from '../../components/hooks/Theme';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(
    <Router>
      <NewTheme>
        <Header />
      </NewTheme>
    </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});


