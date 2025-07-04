import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Dropdown from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled Option', value: '4', disabled: true },
];

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown options={sampleOptions} placeholder="Select an option" />);
    const dropdown = screen.getByRole('button');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toBeVisible();
    expect(dropdown).toHaveTextContent('Select an option');
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(
      <Dropdown options={sampleOptions} placeholder="Select an option" />
    );
    
    const dropdown = screen.getByRole('button');
    
    // Check enabled state
    expect(dropdown).toHaveStyle('background-color: #ffffff');
    expect(dropdown).toHaveStyle('color: #495057');
    expect(dropdown).toHaveStyle('cursor: pointer');
    
    // Check disabled state
    rerender(
      <Dropdown options={sampleOptions} disabled placeholder="Select an option" />
    );
    expect(dropdown).toHaveStyle('background-color: #f8f9fa');
    expect(dropdown).toHaveStyle('color: #999999');
    expect(dropdown).toHaveStyle('cursor: not-allowed');
  });

  test('opens dropdown menu when clicked', () => {
    render(<Dropdown options={sampleOptions} placeholder="Select an option" />);
    const dropdown = screen.getByRole('button');
    
    // Initially, options should not be visible
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    
    // Click to open dropdown
    fireEvent.click(dropdown);
    
    // Options should now be visible
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  test('does not open when disabled', () => {
    render(<Dropdown options={sampleOptions} disabled placeholder="Select an option" />);
    const dropdown = screen.getByRole('button');
    
    fireEvent.click(dropdown);
    
    // Options should not be visible
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  test('selects option when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        options={sampleOptions}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    
    const dropdown = screen.getByRole('button');
    
    // Open dropdown
    fireEvent.click(dropdown);
    
    // Click on first option
    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);
    
    // Check if onChange was called
    expect(handleChange).toHaveBeenCalledWith('1');
    
    // Check if dropdown shows selected option
    expect(dropdown).toHaveTextContent('Option 1');
  });

  test('renders with default value', () => {
    render(<Dropdown options={sampleOptions} defaultValue="2" />);
    const dropdown = screen.getByRole('button');
    
    expect(dropdown).toHaveTextContent('Option 2');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(
      <Dropdown options={sampleOptions} size="small" placeholder="Small" />
    );
    const dropdown = screen.getByRole('button');
    
    expect(dropdown).toHaveStyle('font-size: 12px');
    expect(dropdown).toHaveStyle('min-height: 32px');
    
    rerender(<Dropdown options={sampleOptions} size="large" placeholder="Large" />);
    expect(dropdown).toHaveStyle('font-size: 16px');
    expect(dropdown).toHaveStyle('min-height: 56px');
  });

  test('applies custom colors when provided', () => {
    render(
      <Dropdown
        options={sampleOptions}
        backgroundColor="#ff0000"
        textColor="#ffffff"
        placeholder="Custom colors"
      />
    );
    const dropdown = screen.getByRole('button');
    
    expect(dropdown).toHaveStyle('background-color: #ff0000');
    expect(dropdown).toHaveStyle('color: #ffffff');
  });

  test('closes dropdown when clicking outside', () => {
    render(<Dropdown options={sampleOptions} placeholder="Select an option" />);
    const dropdown = screen.getByRole('button');
    
    // Open dropdown
    fireEvent.click(dropdown);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    // Click outside
    fireEvent.mouseDown(document.body);
    
    // Options should be hidden
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  test('handles disabled options correctly', () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        options={sampleOptions}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    
    const dropdown = screen.getByRole('button');
    
    // Open dropdown
    fireEvent.click(dropdown);
    
    // Try to click disabled option
    const disabledOption = screen.getByText('Disabled Option');
    fireEvent.click(disabledOption);
    
    // onChange should not be called
    expect(handleChange).not.toHaveBeenCalled();
    
    // Dropdown should still show placeholder
    expect(dropdown).toHaveTextContent('Select an option');
  });
});
