import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente NotFound', () => {
  it('se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const titleText = screen.getByRole('heading',
      { name: /Page requested not found Crying emoji/i });

    expect(titleText).toBeInTheDocument();
  });

  it('se a página mostra a imagem ', () => {
    renderWithRouter(<NotFound />);
    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const ImgElement = screen.getByRole('img', { name: /Pikachu crying/i });

    expect(ImgElement).toHaveAttribute('src', imgSrc);
  });
});
