import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Table, { TableHeader, TableRow, TableCell, TableFooter } from './Table';

const SampleTable = ({ disabled = false }) => (
  <Table disabled={disabled}>
    <TableHeader>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Email</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
      </TableRow>
    </tbody>
  </Table>
);

describe('Table Component', () => {
  test('renders table and is visible', () => {
    render(<SampleTable />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(<SampleTable />);
    const table = screen.getByRole('table');
    
    // Check enabled state
    expect(table).toHaveStyle('opacity: 1');
    expect(table).toHaveStyle('cursor: default');
    
    // Check disabled state
    rerender(<SampleTable disabled />);
    expect(table).toHaveStyle('opacity: 0.6');
    expect(table).toHaveStyle('cursor: not-allowed');
  });

  test('renders different variants correctly', () => {
    const { rerender } = render(
      <Table variant="bordered">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    const table = screen.getByRole('table');
    
    expect(table).toHaveStyle('border: 1px solid #dee2e6');
    
    rerender(
      <Table variant="striped" className="table-striped">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(table).toHaveClass('table-striped');
  });

  test('renders different sizes correctly', () => {
    const { rerender } = render(
      <Table size="small">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    const table = screen.getByRole('table');
    
    expect(table).toHaveStyle('font-size: 12px');
    
    rerender(
      <Table size="large">
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    expect(table).toHaveStyle('font-size: 16px');
  });

  test('table header renders correctly', () => {
    render(
      <Table>
        <TableHeader backgroundColor="#007bff" textColor="#ffffff">
          <TableRow>
            <TableCell as="th">Header</TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    );
    
    const header = screen.getByText('Header');
    expect(header).toBeInTheDocument();
  });

  test('table row handles click events', () => {
    const handleClick = jest.fn();
    render(
      <Table>
        <tbody>
          <TableRow onClick={handleClick}>
            <TableCell>Clickable Row</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const row = screen.getByText('Clickable Row').closest('tr');
    fireEvent.click(row!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('table row does not handle click when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Table>
        <tbody>
          <TableRow disabled onClick={handleClick}>
            <TableCell>Disabled Row</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const row = screen.getByText('Disabled Row').closest('tr');
    fireEvent.click(row!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('table cell renders as th when specified', () => {
    render(
      <Table>
        <thead>
          <TableRow>
            <TableCell as="th">Header Cell</TableCell>
          </TableRow>
        </thead>
      </Table>
    );
    
    const headerCell = screen.getByRole('columnheader');
    expect(headerCell).toBeInTheDocument();
    expect(headerCell).toHaveTextContent('Header Cell');
  });

  test('table cell applies alignment correctly', () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell align="center">Centered</TableCell>
            <TableCell align="right">Right</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
    
    const centeredCell = screen.getByText('Centered');
    const rightCell = screen.getByText('Right');
    
    expect(centeredCell).toHaveStyle('text-align: center');
    expect(rightCell).toHaveStyle('text-align: right');
  });

  test('table footer renders correctly', () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Content</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    
    const footer = screen.getByText('Footer Content');
    expect(footer).toBeInTheDocument();
  });
});
