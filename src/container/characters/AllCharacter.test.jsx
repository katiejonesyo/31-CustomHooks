/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AllCharacters from './AllCharacters';
import charactersApi from '../../components/fixtures/Characters.json';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(charactersApi));
  })
);
describe('Contain all characters', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());
  it('displays a loading screen and characters', async() => {
    render(
    <MemoryRouter>
      <AllCharacters />
    </MemoryRouter>
    );

    screen.getAllByText('Loading...');
    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});


