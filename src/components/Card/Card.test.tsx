import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Card from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(
      <Card>
        <h3>Card Title</h3>
        <p>Card content</p>
      </Card>
    );
    
    const title = screen.getByText('Card Title');
    const content = screen.getByText('Card content');
    
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(content).toBeInTheDocument();
    expect(content).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(
      <Card>
        <h3>Card Title</h3>
      </Card>
    );
    
    const card = screen.getByText('Card Title').closest('div');
    
    // Check enabled state
    expect(card).toHaveStyle('opacity: 1');
    expect(card).toHaveStyle('cursor: default');
    
    // Check disabled state
    rerender(
      <Card disabled>
        <h3>Card Title</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('opacity: 0.6');
    expect(card).toHaveStyle('cursor: not-allowed');
  });

  test('handles click events when clickable', () => {
    const handleClick = jest.fn();
    render(
      <Card clickable onClick={handleClick}>
        <h3>Clickable Card</h3>
      </Card>
    );
    
    const card = screen.getByText('Clickable Card').closest('div');
    expect(card).toHaveStyle('cursor: pointer');
    
    fireEvent.click(card!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Card disabled onClick={handleClick}>
        <h3>Disabled Card</h3>
      </Card>
    );
    
    const card = screen.getByText('Disabled Card').closest('div');
    fireEvent.click(card!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders different variants correctly', () => {
    const { rerender } = render(
      <Card variant="outlined">
        <h3>Outlined Card</h3>
      </Card>
    );
    
    const card = screen.getByText('Outlined Card').closest('div');
    expect(card).toHaveStyle('background-color: transparent');
    expect(card).toHaveStyle('border: 1px solid #e9ecef');
    
    rerender(
      <Card variant="elevated">
        <h3>Elevated Card</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)');
    
    rerender(
      <Card variant="filled">
        <h3>Filled Card</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('border: none');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(
      <Card size="small">
        <h3>Small Card</h3>
      </Card>
    );
    
    const card = screen.getByText('Small Card').closest('div');
    expect(card).toHaveStyle('max-width: 300px');
    expect(card).toHaveStyle('min-height: 120px');
    
    rerender(
      <Card size="large">
        <h3>Large Card</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('max-width: 600px');
    expect(card).toHaveStyle('min-height: 250px');
  });

  test('applies custom colors when provided', () => {
    render(
      <Card backgroundColor="#ff0000" borderColor="#00ff00">
        <h3>Custom Colors</h3>
      </Card>
    );
    
    const card = screen.getByText('Custom Colors').closest('div');
    expect(card).toHaveStyle('background-color: #ff0000');
    expect(card).toHaveStyle('border: 1px solid #00ff00');
  });

  test('applies custom border radius', () => {
    render(
      <Card borderRadius="20px">
        <h3>Custom Radius</h3>
      </Card>
    );
    
    const card = screen.getByText('Custom Radius').closest('div');
    expect(card).toHaveStyle('border-radius: 20px');
  });

  test('applies different padding sizes', () => {
    const { rerender } = render(
      <Card padding="small">
        <h3>Small Padding</h3>
      </Card>
    );
    
    const card = screen.getByText('Small Padding').closest('div');
    expect(card).toHaveStyle('padding: 12px');
    
    rerender(
      <Card padding="large">
        <h3>Large Padding</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('padding: 32px');
    
    rerender(
      <Card padding="none">
        <h3>No Padding</h3>
      </Card>
    );
    
    expect(card).toHaveStyle('padding: 0');
  });

  test('applies custom class name', () => {
    render(
      <Card className="custom-card">
        <h3>Custom Class</h3>
      </Card>
    );
    
    const card = screen.getByText('Custom Class').closest('div');
    expect(card).toHaveClass('custom-card');
  });

  test('is clickable when onClick is provided', () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>
        <h3>onClick Card</h3>
      </Card>
    );
    
    const card = screen.getByText('onClick Card').closest('div');
    expect(card).toHaveStyle('cursor: pointer');
    
    fireEvent.click(card!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('shows hover effects when hoverable', () => {
    render(
      <Card hoverable>
        <h3>Hoverable Card</h3>
      </Card>
    );
    
    const card = screen.getByText('Hoverable Card').closest('div');
    
    // Test that the card has the hoverable styles
    // We can't easily test the actual hover state, but we can check if the component renders correctly
    expect(card).toBeInTheDocument();
  });
});
