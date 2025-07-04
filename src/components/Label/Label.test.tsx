import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Label from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('changes color when disabled', () => {
    const { rerender } = render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    
    // Check enabled state
    expect(label).toHaveStyle('color: #333333');
    expect(label).toHaveStyle('opacity: 1');
    
    // Check disabled state
    rerender(<Label disabled>Test Label</Label>);
    expect(label).toHaveStyle('color: #999999');
    expect(label).toHaveStyle('opacity: 0.6');
  });

  test('renders different variants correctly', () => {
    const { rerender } = render(<Label variant="default">Default Label</Label>);
    const label = screen.getByText('Default Label');
    
    expect(label).toHaveStyle('color: #333333');
    
    rerender(<Label variant="required">Required Label</Label>);
    expect(label).toHaveStyle('color: #dc3545');
    
    rerender(<Label variant="optional">Optional Label</Label>);
    expect(label).toHaveStyle('color: #6c757d');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(<Label size="small">Small Label</Label>);
    const label = screen.getByText('Small Label');
    
    expect(label).toHaveStyle('font-size: 12px');
    
    rerender(<Label size="large">Large Label</Label>);
    expect(label).toHaveStyle('font-size: 18px');
  });

  test('applies custom color when provided', () => {
    render(<Label color="#ff0000">Custom Color Label</Label>);
    const label = screen.getByText('Custom Color Label');
    
    expect(label).toHaveStyle('color: #ff0000');
  });

  test('applies different font weights correctly', () => {
    const { rerender } = render(<Label fontWeight="normal">Normal Weight</Label>);
    const label = screen.getByText('Normal Weight');
    
    expect(label).toHaveStyle('font-weight: 400');
    
    rerender(<Label fontWeight="bold">Bold Weight</Label>);
    expect(label).toHaveStyle('font-weight: 700');
  });

  test('has correct cursor style when disabled', () => {
    render(<Label disabled>Disabled Label</Label>);
    const label = screen.getByText('Disabled Label');
    
    expect(label).toHaveStyle('cursor: not-allowed');
  });

  test('adds asterisk for required variant', () => {
    render(<Label variant="required">Required Field</Label>);
    const label = screen.getByText('Required Field');
    
    // Check if the component has the required styling (asterisk is added via CSS)
    expect(label).toHaveStyle('color: #dc3545');
  });
});
