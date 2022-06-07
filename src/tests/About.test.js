import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente About', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  it('se a página contém as informações sobre a Pokédex', () => {
    const textElementBegin = screen
      .getByText(/This application simulates a Pokédex/i);
    const textElementFinal = screen
      .getByText(/ a digital encyclopedia containing all Pokémons/i);
    const textElementThirdPart = screen
      .getByText(/One can filter Pokémons by type/i);

    expect(textElementBegin).toBeInTheDocument();
    expect(textElementFinal).toBeInTheDocument();
    expect(textElementThirdPart).toBeInTheDocument();
  });

  it('se a página contém um heading h2 com o texto About Pokédex', () => {
    const titleElment = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

    expect(titleElment).toBeInTheDocument();
  });

  it('se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const allParagraph = screen.getAllByText(/Pokémons/i);

    expect(allParagraph).toHaveLength(2);
  });

  it('se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgLink = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img', { name: /Pokédex/i });

    expect(image.src).toContain(imgLink);
    expect(image).toBeInTheDocument();
  });
});
