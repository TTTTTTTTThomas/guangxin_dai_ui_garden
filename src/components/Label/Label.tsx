import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 4px;
  transition: all 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          line-height: 1.3;
        `;
      case 'large':
        return `
          font-size: 18px;
          line-height: 1.4;
        `;
      default:
        return `
          font-size: 14px;
          line-height: 1.4;
        `;
    }
  }}

  /* Font weight */
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'normal':
        return '400';
      case 'medium':
        return '500';
      case 'bold':
        return '700';
      default:
        return '500';
    }
  }};

  /* Color variants */
  color: ${({ color, variant, disabled }) => {
    if (color) return color;
    if (disabled) return '#999999';
    switch (variant) {
      case 'required':
        return '#dc3545';
      case 'optional':
        return '#6c757d';
      default:
        return '#333333';
    }
  }};

  /* Add asterisk for required fields */
  ${({ variant }) =>
    variant === 'required' &&
    `
    &::after {
      content: ' *';
      color: #dc3545;
    }
  `}

  /* Add optional text */
  ${({ variant }) =>
    variant === 'optional' &&
    `
    &::after {
      content: ' (optional)';
      color: #6c757d;
      font-weight: 400;
      font-style: italic;
    }
  `}

  /* Responsive design */
  @media (max-width: 768px) {
    ${({ size }) => {
      if (size === 'large') {
        return `
          font-size: 16px;
        `;
      }
    }}
  }

  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            font-size: 11px;
          `;
        case 'large':
          return `
            font-size: 15px;
          `;
        default:
          return `
            font-size: 13px;
          `;
      }
    }}
  }
`;

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = 'medium',
  variant = 'default',
  disabled = false,
  color,
  fontWeight = 'medium',
  className,
  ...props
}) => {
  return (
    <StyledLabel
      htmlFor={disabled ? undefined : htmlFor}
      size={size}
      variant={variant}
      disabled={disabled}
      color={color}
      fontWeight={fontWeight}
      className={className}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
