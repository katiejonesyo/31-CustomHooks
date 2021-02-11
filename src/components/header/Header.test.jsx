import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router,
    Route,
    Switch } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(
    <Router><Header /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});


