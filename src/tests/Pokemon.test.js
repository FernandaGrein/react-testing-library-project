import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente Pokemon', () => {
  it(' se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const pokemonName = screen.getByText(/pikachu/i);
    const pokemonType = screen.getByTestId('pokemon-type', { name: /electric/i });
    const pokemonWeight = screen.getByText(/average weight: 6\.0 kg/i);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent(/electric/i);

    const imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
    const pikachuImage = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pikachuImage).toHaveAttribute('src', imgSrc);
  });

  it('se o card do pokémon indicado na Pokédex contém um link de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();

    userEvent.click(detailsLink);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(check);

    const favoriteImg = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(favoriteImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
