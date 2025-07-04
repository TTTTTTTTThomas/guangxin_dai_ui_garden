import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  transition: all 0.3s ease;
  user-select: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          padding: 8px 16px;
          min-height: 32px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 16px 32px;
          min-height: 56px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 12px 24px;
          min-height: 40px;
        `;
    }
  }}

  /* Color variants */
  background-color: ${({ backgroundColor, variant, disabled }) => {
    if (backgroundColor) return backgroundColor;
    if (disabled) {
      switch (variant) {
        case 'secondary':
          return '#e0e0e0';
        case 'danger':
          return '#ffcdd2';
        default:
          return '#e0e0e0';
      }
    }
    switch (variant) {
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#dc3545';
      default:
        return '#007bff';
    }
  }};

  color: ${({ textColor, variant, disabled }) => {
    if (textColor) return textColor;
    if (disabled) return '#999999';
    switch (variant) {
      case 'secondary':
        return '#ffffff';
      case 'danger':
        return '#ffffff';
      default:
        return '#ffffff';
    }
  }};

  &:hover {
    ${({ disabled, variant, backgroundColor }) => {
      if (disabled) return '';
      if (backgroundColor) return `opacity: 0.8;`;
      switch (variant) {
        case 'secondary':
          return `background-color: #5a6268;`;
        case 'danger':
          return `background-color: #c82333;`;
        default:
          return `background-color: #0056b3;`;
      }
    }}
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(1px)')};
  }

  /* Responsive design */
  @media (max-width: 768px) {
    ${({ size }) => {
      if (size === 'large') {
        return `
          font-size: 14px;
          padding: 12px 24px;
          min-height: 48px;
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
            padding: 6px 12px;
            min-height: 28px;
          `;
        case 'large':
          return `
            font-size: 13px;
            padding: 10px 20px;
            min-height: 40px;
          `;
        default:
          return `
            font-size: 12px;
            padding: 8px 16px;
            min-height: 36px;
          `;
      }
    }}
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  backgroundColor,
  textColor,
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={disabled ? undefined : onClick}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
