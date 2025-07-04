import React from 'react';
import styled from 'styled-components';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  
  ${({ variant }) => {
    switch (variant) {
      case 'bordered':
        return `
          border: 1px solid #dee2e6;
        `;
      default:
        return '';
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
        `;
      case 'large':
        return `
          font-size: 16px;
        `;
      default:
        return `
          font-size: 14px;
        `;
    }
  }}

  /* Responsive design */
  ${({ responsive }) =>
    responsive &&
    `
    @media (max-width: 768px) {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  `}
`;

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return '#f8f9fa';
    return backgroundColor || '#f8f9fa';
  }};
  color: ${({ textColor, disabled }) => {
    if (disabled) return '#999999';
    return textColor || '#495057';
  }};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  th {
    padding: 12px;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #dee2e6;
    
    @media (max-width: 480px) {
      padding: 8px;
      font-size: 12px;
    }
  }
`;

const StyledTableRow = styled.tr<TableRowProps>`
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, onClick }) => {
    if (disabled) return 'not-allowed';
    if (onClick) return 'pointer';
    return 'default';
  }};
  
  ${({ variant, disabled }) => {
    if (disabled) return 'background-color: #f8f9fa;';
    switch (variant) {
      case 'primary':
        return 'background-color: #e3f2fd;';
      case 'secondary':
        return 'background-color: #f5f5f5;';
      case 'success':
        return 'background-color: #e8f5e8;';
      case 'warning':
        return 'background-color: #fff3cd;';
      case 'danger':
        return 'background-color: #f8d7da;';
      default:
        return '';
    }
  }}

  ${({ hoverable, disabled }) =>
    hoverable && !disabled &&
    `
    &:hover {
      background-color: #f8f9fa;
    }
  `}

  /* Striped rows effect for parent table */
  .table-striped &:nth-child(even) {
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#f8f9fa')};
  }
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  text-align: ${({ align }) => align || 'left'};
  width: ${({ width }) => width || 'auto'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  color: ${({ disabled }) => (disabled ? '#999999' : '#495057')};
  
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const StyledTableHeaderCell = styled.th<TableCellProps>`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  text-align: ${({ align }) => align || 'left'};
  width: ${({ width }) => width || 'auto'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  color: ${({ disabled }) => (disabled ? '#999999' : '#495057')};
  
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return '#f8f9fa';
    return backgroundColor || '#f8f9fa';
  }};
  color: ${({ textColor, disabled }) => {
    if (disabled) return '#999999';
    return textColor || '#495057';
  }};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  td {
    padding: 12px;
    border-top: 2px solid #dee2e6;
    font-weight: 600;
    
    @media (max-width: 480px) {
      padding: 8px;
      font-size: 12px;
    }
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  responsive = true,
  className,
  ...props
}) => {
  const tableClassName = `${variant === 'striped' ? 'table-striped' : ''} ${className || ''}`.trim();
  
  return (
    <StyledTable
      variant={variant}
      size={size}
      disabled={disabled}
      responsive={responsive}
      className={tableClassName}
      {...props}
    >
      {children}
    </StyledTable>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor,
  textColor,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <StyledTableHeader
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledTableHeader>
  );
};

const TableRow: React.FC<TableRowProps> = ({
  children,
  variant = 'default',
  disabled = false,
  hoverable = true,
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledTableRow
      variant={variant}
      disabled={disabled}
      hoverable={hoverable}
      onClick={disabled ? undefined : onClick}
      className={className}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  as = 'td',
  align = 'left',
  width,
  disabled = false,
  className,
  ...props
}) => {
  const Component = as === 'th' ? StyledTableHeaderCell : StyledTableCell;
  
  return (
    <Component
      as={as}
      align={align}
      width={width}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  textColor,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <StyledTableFooter
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledTableFooter>
  );
};

export default Table;
export { TableHeader, TableRow, TableCell, TableFooter };
