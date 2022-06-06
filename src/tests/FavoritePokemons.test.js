import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Requisito 3 Teste o componente FavoritePokemons', () => {
  it(`se é exibida na tela a mensagem No favorite pokemon found, 
  caso a pessoa não tenha pokémons favoritos`, () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteText = screen.getByText(/No favorite pokemon found/i);

    expect(noFavoriteText).toBeInTheDocument();
  });

//   it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
//     renderWithRouter(<FavoritePokemons />);
//     renderWithRouter(<PokemonDetails />);
//     import PokemonDetails
//   });
});
