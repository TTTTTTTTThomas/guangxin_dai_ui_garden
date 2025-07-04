import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image and is visible', () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
      >
        <h1>Hero Title</h1>
        <p>Hero content</p>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    const title = screen.getByText('Hero Title');
    const content = screen.getByText('Hero content');
    
    expect(hero).toBeInTheDocument();
    expect(hero).toBeVisible();
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
      >
        <h1>Hero Title</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    
    // Check enabled state
    expect(hero).not.toHaveStyle('opacity: 0.6');
    expect(hero).not.toHaveStyle('filter: grayscale(100%)');
    expect(hero).toHaveStyle('cursor: default');
    
    // Check disabled state
    rerender(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        disabled
      >
        <h1>Hero Title</h1>
      </HeroImage>
    );
    
    expect(hero).toHaveStyle('opacity: 0.6');
    expect(hero).toHaveStyle('filter: grayscale(100%)');
    expect(hero).toHaveStyle('cursor: not-allowed');
  });

  test('handles click events when enabled', () => {
    const handleClick = jest.fn();
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        onClick={handleClick}
      >
        <h1>Clickable Hero</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveStyle('cursor: pointer');
    
    fireEvent.click(hero);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        disabled
        onClick={handleClick}
      >
        <h1>Disabled Hero</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    fireEvent.click(hero);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies height correctly', () => {
    const { rerender } = render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        height={500}
      />
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveStyle('height: 500px');
    
    rerender(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        height="300px"
      />
    );
    
    expect(hero).toHaveStyle('height: 300px');
  });

  test('applies background properties correctly', () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        backgroundPosition="top left"
        backgroundSize="contain"
      />
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveStyle('background-position: top left');
    expect(hero).toHaveStyle('background-size: contain');
  });

  test('applies content alignment correctly', () => {
    const { rerender } = render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        contentAlignment="left"
      >
        <h1>Left Aligned</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveStyle('justify-content: flex-start');
    
    rerender(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        contentAlignment="right"
      >
        <h1>Right Aligned</h1>
      </HeroImage>
    );
    
    expect(hero).toHaveStyle('justify-content: flex-end');
  });

  test('applies vertical alignment correctly', () => {
    const { rerender } = render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        verticalAlignment="top"
      >
        <h1>Top Aligned</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveStyle('align-items: flex-start');
    
    rerender(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        verticalAlignment="bottom"
      >
        <h1>Bottom Aligned</h1>
      </HeroImage>
    );
    
    expect(hero).toHaveStyle('align-items: flex-end');
  });

  test('renders without content', () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
      />
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toBeInTheDocument();
    expect(hero).toBeVisible();
  });

  test('has correct accessibility attributes', () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Beautiful landscape image"
      >
        <h1>Hero Title</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveAttribute('aria-label', 'Beautiful landscape image');
  });

  test('applies custom class name', () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        className="custom-hero"
      >
        <h1>Hero Title</h1>
      </HeroImage>
    );
    
    const hero = screen.getByRole('img');
    expect(hero).toHaveClass('custom-hero');
  });

  test('renders overlay when overlay props are provided', () => {
    const { container } = render(
      <HeroImage
        src="https://picsum.photos/1200/600"
        alt="Test hero image"
        overlayColor="rgba(255, 0, 0, 0.5)"
        overlayOpacity={0.8}
      >
        <h1>Hero with Overlay</h1>
      </HeroImage>
    );
    
    // Check if overlay element exists
    const overlayElement = container.querySelector('div > div');
    expect(overlayElement).toBeInTheDocument();
  });
});
