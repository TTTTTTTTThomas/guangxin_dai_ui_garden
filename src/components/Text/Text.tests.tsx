import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Text from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text>Test Text</Text>);
    const text = screen.getByText('Test Text');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });

  test('changes color when disabled', () => {
    const { rerender } = render(<Text>Test Text</Text>);
    const text = screen.getByText('Test Text');
    
    // Check enabled state
    expect(text).toHaveStyle('color: #333333');
    expect(text).toHaveStyle('opacity: 1');
    
    // Check disabled state
    rerender(<Text disabled>Test Text</Text>);
    expect(text).toHaveStyle('color: #999999');
    expect(text).toHaveStyle('opacity: 0.6');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(<Text size="xs">XS Text</Text>);
    const text = screen.getByText('XS Text');
    
    expect(text).toHaveStyle('font-size: 12px');
    
    rerender(<Text size="xl">XL Text</Text>);
    expect(text).toHaveStyle('font-size: 20px');
  });

  test('renders different weights correctly', () => {
    const { rerender } = render(<Text weight="light">Light Text</Text>);
    const text = screen.getByText('Light Text');
    
    expect(text).toHaveStyle('font-weight: 300');
    
    rerender(<Text weight="bold">Bold Text</Text>);
    expect(text).toHaveStyle('font-weight: 700');
  });

  test('applies custom color when provided', () => {
    render(<Text color="#ff0000">Custom Color Text</Text>);
    const text = screen.getByText('Custom Color Text');
    
    expect(text).toHaveStyle('color: #ff0000');
  });

  test('applies text alignment correctly', () => {
    const { rerender } = render(<Text align="center">Centered Text</Text>);
    const text = screen.getByText('Centered Text');
    
    expect(text).toHaveStyle('text-align: center');
    
    rerender(<Text align="right">Right Text</Text>);
    expect(text).toHaveStyle('text-align: right');
  });

  test('applies line height correctly', () => {
    const { rerender } = render(<Text lineHeight="tight">Tight Text</Text>);
    const text = screen.getByText('Tight Text');
    
    expect(text).toHaveStyle('line-height: 1.2');
    
    rerender(<Text lineHeight="relaxed">Relaxed Text</Text>);
    expect(text).toHaveStyle('line-height: 1.8');
  });

  test('renders as different HTML elements', () => {
    const { rerender } = render(<Text as="h1">Heading Text</Text>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    
    rerender(<Text as="span">Span Text</Text>);
    const span = screen.getByText('Span Text');
    expect(span.tagName).toBe('SPAN');
  });

  test('has correct cursor style when disabled', () => {
    render(<Text disabled>Disabled Text</Text>);
    const text = screen.getByText('Disabled Text');
    
    expect(text).toHaveStyle('cursor: not-allowed');
  });

  test('applies truncation styles when truncate is true', () => {
    render(<Text truncate>Long text that should be truncated</Text>);
    const text = screen.getByText('Long text that should be truncated');
    
    expect(text).toHaveStyle('overflow: hidden');
    expect(text).toHaveStyle('white-space: nowrap');
    expect(text).toHaveStyle('text-overflow: ellipsis');
  });
});
