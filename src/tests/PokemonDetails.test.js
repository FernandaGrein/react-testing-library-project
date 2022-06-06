import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente PokemonDetails', () => {
  it(`Teste se as informações detalhadas do pokémon selecionado 
  são mostradas na tela`, () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    expect(detailsLink).not.toBeInTheDocument();

    const titleElement = screen.getByRole('heading', { name: /pikachu details/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('seção de detalhes deve conter um parágrafo com o resumo do pokémon', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const resumeText = screen
      .getByText(/this intelligent pokémon roasts hard berries with electricity/i);
    expect(resumeText).toBeInTheDocument();
  });
  it(` se existe na página uma seção com os 
  mapas contendo as localizações do pokémon`, () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const gametitle = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(gametitle).toBeInTheDocument();

    const allMapsImgs = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(allMapsImgs).toHaveLength(2);

    expect(allMapsImgs[0]).toHaveAttribute('src', 'https://pwo-wiki.info/images/4/47/Viridian_Forest.gif');
    expect(allMapsImgs[1]).toHaveAttribute('src', 'https://pwo-wiki.info/images/5/5b/Pp.gif');
  });

  it('se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(check.checked).toBeFalsy();

    userEvent.click(check);

    expect(check.checked).toBeTruthy();
  });

  it('testa se seção de detalhes contém um heading h2 com o texto Summary', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);

    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const title = screen.getByRole('heading', { name: /summary/i });
    expect(title).toBeInTheDocument();
  });
});
