import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Img from './Img';

describe('Img Component', () => {
  test('renders image and is visible', async () => {
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
      />
    );
    
    // Initially shows loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Wait for image to load (mock the load event)
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
      expect(image).toBeVisible();
      expect(image).toHaveAttribute('alt', 'Test image');
    });
  });

  test('changes appearance when disabled', async () => {
    const { rerender } = render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).not.toHaveStyle('opacity: 0.6');
      expect(image).not.toHaveStyle('filter: grayscale(100%)');
    });
    
    // Check disabled state
    rerender(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        disabled
      />
    );
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveStyle('opacity: 0.6');
      expect(image).toHaveStyle('filter: grayscale(100%)');
      expect(image).toHaveStyle('cursor: not-allowed');
    });
  });

  test('handles click events when enabled', async () => {
    const handleClick = jest.fn();
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        onClick={handleClick}
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveStyle('cursor: pointer');
      
      fireEvent.click(image);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  test('does not handle click events when disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        disabled
        onClick={handleClick}
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      fireEvent.click(image);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  test('applies width and height correctly', async () => {
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        width={300}
        height={200}
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveStyle('width: 300px');
      expect(image).toHaveStyle('height: 200px');
    });
  });

  test('applies border radius correctly', async () => {
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        borderRadius="8px"
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveStyle('border-radius: 8px');
    });
  });

  test('applies object fit correctly', async () => {
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
        objectFit="contain"
      />
    );
    
    // Load the image first
    const img = document.querySelector('img');
    if (img) {
      fireEvent.load(img);
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveStyle('object-fit: contain');
    });
  });

  test('shows loading state initially', () => {
    render(
      <Img
        src="https://picsum.photos/300/200"
        alt="Test image"
      />
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows error state when image fails to load', async () => {
    render(
      <Img
        src="invalid-url"
        alt="Test image"
      />
    );
    
    // Trigger error event
    const img = document.querySelector('img');
    if (img) {
      fireEvent.error(img);
    }
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  test('uses fallback image when main image fails', async () => {
    render(
      <Img
        src="invalid-url"
        fallbackSrc="https://picsum.photos/300/200"
        alt="Test image"
      />
    );
    
    // Trigger error event on main image
    const img = document.querySelector('img');
    if (img) {
      fireEvent.error(img);
      
      // Wait for fallback to load
      await waitFor(() => {
        const newImg = document.querySelector('img');
        if (newImg) {
          fireEvent.load(newImg);
        }
      });
    }
    
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://picsum.photos/300/200');
    });
  });
});
