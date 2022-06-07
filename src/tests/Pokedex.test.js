import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

const POKEMONS = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans',
  'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair', 'Pikachu'];
describe('Teste o componente Pokedex', () => {
  it(' se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const titleEl = screen
      .getByRole('heading', { name: /encountered pokémons/i, level: 2 });

    expect(titleEl).toBeInTheDocument();
  });

  it(`Teste se é exibido o próximo pokémon da lista 
  quando o botão Próximo pokémon é clicado`, () => {
    renderWithRouter(<App />);
    const pikachuPokemon = screen.getByText(/pikachu/i);
    expect(pikachuPokemon).toBeInTheDocument();

    const NextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(NextButton);

    const charmanderPokemon = screen.getByText(/charmander/i);
    expect(charmanderPokemon).toBeInTheDocument();
  });

  it(`testa se todos os pokemons aparecem na tela ao clicar em 
  próximo e retorna ao primeiro`, () => {
    renderWithRouter(<App />);
    const firstPokemon = screen.getByText(/pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
    const NextButton = screen.getByRole('button', { name: /próximo pokémon/i });

    POKEMONS.forEach((pokemon) => {
      expect(screen.getByText(pokemon)).toBeInTheDocument();
      userEvent.click(NextButton);
    });
  });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const allPokemonsImg = screen.getAllByRole('img');

    expect(allPokemonsImg).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toBeInTheDocument();

    const EletricBtn = screen.getByRole('button', { name: /electric/i });
    expect(EletricBtn).toBeInTheDocument();

    const fireBtn = screen.getByRole('button', { name: /fire/i });
    expect(fireBtn).toBeInTheDocument();

    const bugBtn = screen.getByRole('button', { name: /bug/i });
    expect(bugBtn).toBeInTheDocument();

    const poisonBtn = screen.getByRole('button', { name: /poison/i });
    expect(poisonBtn).toBeInTheDocument();

    const psychicBtn = screen.getByRole('button', { name: /psychic/i });
    expect(psychicBtn).toBeInTheDocument();

    const normalBtn = screen.getByRole('button', { name: /normal/i });
    expect(normalBtn).toBeInTheDocument();

    const dragonBtn = screen.getByRole('button', { name: /dragon/i });
    expect(dragonBtn).toBeInTheDocument();

    const allBtns = 7;
    const allTypeButtons = screen.getAllByTestId('pokemon-type-button');
    expect(allTypeButtons).toHaveLength(allBtns);
  });

  it(`A partir da seleção de um botão de tipo, 
  a Pokédex deve circular somente pelos pokémons daquele tipo`, () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: /fire/i });
    userEvent.click(fireBtn);

    const NextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(NextButton);

    const NextFirePokemon = screen.getByRole('img', { name: /rapidash sprite/i });
    expect(NextFirePokemon).toBeInTheDocument();
  });

  it(`testa se os pokémons são mostrados normalmente (sem filtros) 
  quando o botão All for clicado`, () => {
    renderWithRouter(<App />);
    const poisonBtn = screen.getByRole('button', { name: /poison/i });
    userEvent.click(poisonBtn);

    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const FirstPokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(FirstPokemon).toBeInTheDocument();
  });
});
