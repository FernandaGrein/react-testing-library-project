import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import { FavoritePokemons } from '../pages';
import App from '../App';

describe('Requisito 3 Teste o componente FavoritePokemons', () => {
  it(`se é exibida na tela a mensagem No favorite pokemon found, 
  caso a pessoa não tenha pokémons favoritos`, () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteText = screen.getByText(/No favorite pokemon found/i);

    expect(noFavoriteText).toBeInTheDocument();
  });

  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const poisonBtn = screen.getByRole('button', { name: /poison/i });
    userEvent.click(poisonBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);

    const StarImg = screen.getByRole('img', { name: /ekans is marked as favorite/i });
    expect(StarImg).toBeInTheDocument();
  });

  it('Teste se o pokemon é adicionao ao favorito e removido', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('button', { name: /psychic/i }));

    userEvent.click(screen.getByRole('link', { name: /more details/i }));

    userEvent.click(screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }));
    userEvent.click(screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }));

    userEvent.click(screen.getByRole('link', { name: /favorite pokémons/i }));

    expect(screen.queryByRole('img', { name: /alakazam is marked as favorite/i }))
      .not.toBeInTheDocument();
  });
});
