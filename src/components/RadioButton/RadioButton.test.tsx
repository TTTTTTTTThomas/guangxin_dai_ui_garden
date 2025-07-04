import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
      />
    );
    
    const radio = screen.getByRole('radio');
    const label = screen.getByText('Test Radio Button');
    
    expect(radio).toBeInTheDocument();
    expect(radio).toBeVisible();
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
      />
    );
    
    const container = screen.getByText('Test Radio Button').closest('label');
    
    // Check enabled state
    expect(container).toHaveStyle('opacity: 1');
    expect(container).toHaveStyle('cursor: pointer');
    
    // Check disabled state
    rerender(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        disabled
      />
    );
    
    expect(container).toHaveStyle('opacity: 0.6');
    expect(container).toHaveStyle('cursor: not-allowed');
  });

  test('handles change events when enabled', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        onChange={handleChange}
      />
    );
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  test('does not handle change events when disabled', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        disabled
        onChange={handleChange}
      />
    );
    
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  test('renders checked state correctly', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        checked
      />
    );
    
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('renders default checked state correctly', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        defaultChecked
      />
    );
    
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(
      <RadioButton
        name="test"
        value="option1"
        label="Small Radio Button"
        size="small"
      />
    );
    
    const label = screen.getByText('Small Radio Button');
    expect(label).toHaveStyle('font-size: 12px');
    
    rerender(
      <RadioButton
        name="test"
        value="option1"
        label="Large Radio Button"
        size="large"
      />
    );
    
    expect(label).toHaveStyle('font-size: 16px');
  });

  test('renders label on left when specified', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Left Label"
        labelPosition="left"
      />
    );
    
    const container = screen.getByText('Left Label').closest('label');
    expect(container).toHaveStyle('flex-direction: row-reverse');
    
    const label = screen.getByText('Left Label');
    expect(label).toHaveStyle('margin: 0 8px 0 0');
  });

  test('renders label on right by default', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Right Label"
      />
    );
    
    const container = screen.getByText('Right Label').closest('label');
    expect(container).toHaveStyle('flex-direction: row');
    
    const label = screen.getByText('Right Label');
    expect(label).toHaveStyle('margin: 0 0 0 8px');
  });

  test('has correct name and value attributes', () => {
    render(
      <RadioButton
        name="test-group"
        value="test-value"
        label="Test Radio Button"
      />
    );
    
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('name', 'test-group');
    expect(radio).toHaveAttribute('value', 'test-value');
  });

  test('applies custom class name', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Radio Button"
        className="custom-class"
      />
    );
    
    const container = screen.getByText('Test Radio Button').closest('label');
    expect(container).toHaveClass('custom-class');
  });
});
