import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste o componente App', () => {
  it('se o topo da aplicação contém um conjunto fixo de links', () => {
    renderWithRouter(<App />);
    const HomeLinkElement = screen.getByRole('link', { name: /^home$/i });
    const AboutLinkElement = screen.getByRole('link', { name: /^about$/i });
    const FavoriteLinkElement = screen
      .getByRole('link', { name: /^Favorite Pokémons$/i });

    expect(HomeLinkElement).toBeInTheDocument();
    expect(AboutLinkElement).toBeInTheDocument();
    expect(FavoriteLinkElement).toBeInTheDocument();
  });

  it('se a aplicação é redirecionada para a página inicial ao clicar no link Home',
    () => {
      const { history } = renderWithRouter(<App />);

      const HomeLinkElement = screen.getByRole('link', { name: /^home$/i });
      userEvent.click(HomeLinkElement);

      expect(history.location.pathname).toBe('/');
    });

  it('se a aplicação é redirecionada para a página de About ao clicar no link About',
    () => {
      const { history } = renderWithRouter(<App />);

      const AboutLinkElement = screen.getByRole('link', { name: /^about$/i });
      userEvent.click(AboutLinkElement);

      expect(history.location.pathname).toBe('/about');
    });

  it(`se a aplicação é redirecionada para a página de Pokémons Favoritados ao 
    clicar no link favorites`, () => {
    const { history } = renderWithRouter(<App />);

    const FavoriteLinkElement = screen
      .getByRole('link', { name: /^Favorite Pokémons$/i });
    userEvent.click(FavoriteLinkElement);

    expect(history.location.pathname).toBe('/favorites');
  });

  it(`se a aplicação é redirecionada para a página Not Found ao entrar 
  em uma URL desconhecida`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/urlDesconhecida');

    const notFoundTitle = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
