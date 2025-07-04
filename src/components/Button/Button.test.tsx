import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Button from './Button';

describe('Button Component', () => {
  test('renders button and is visible', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { rerender } = render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');
    
    // Check enabled state
    expect(button).toHaveStyle('background-color: #007bff');
    
    // Check disabled state
    rerender(<Button disabled>Test Button</Button>);
    expect(button).toHaveStyle('background-color: #e0e0e0');
    expect(button).toHaveStyle('opacity: 0.6');
  });

  test('handles click events when enabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Test Button</Button>);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('background-color: #007bff');
    
    rerender(<Button variant="secondary">Secondary</Button>);
    expect(button).toHaveStyle('background-color: #6c757d');
    
    rerender(<Button variant="danger">Danger</Button>);
    expect(button).toHaveStyle('background-color: #dc3545');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('font-size: 12px');
    expect(button).toHaveStyle('min-height: 32px');
    
    rerender(<Button size="large">Large</Button>);
    expect(button).toHaveStyle('font-size: 16px');
    expect(button).toHaveStyle('min-height: 56px');
  });

  test('applies custom colors when provided', () => {
    render(
      <Button backgroundColor="#ff0000" textColor="#ffffff">
        Custom Button
      </Button>
    );
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('background-color: #ff0000');
    expect(button).toHaveStyle('color: #ffffff');
  });

  test('has correct cursor style when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});
