import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, clickable, onClick }) => {
    if (disabled) return 'not-allowed';
    if (clickable || onClick) return 'pointer';
    return 'default';
  }};
  
  /* Border radius */
  border-radius: ${({ borderRadius }) => borderRadius || '12px'};
  
  /* Background and border based on variant */
  ${({ variant, backgroundColor, borderColor, disabled }) => {
    const defaultBg = disabled ? '#f8f9fa' : backgroundColor || '#ffffff';
    const defaultBorder = disabled ? '#e0e0e0' : borderColor || '#e9ecef';
    
    switch (variant) {
      case 'outlined':
        return `
          background-color: transparent;
          border: 1px solid ${defaultBorder};
        `;
      case 'elevated':
        return `
          background-color: ${defaultBg};
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        `;
      case 'filled':
        return `
          background-color: ${defaultBg};
          border: none;
        `;
      default:
        return `
          background-color: ${defaultBg};
          border: 1px solid ${defaultBorder};
        `;
    }
  }}

  /* Padding based on size and padding prop */
  ${({ size, padding }) => {
    if (padding === 'none') return 'padding: 0;';
    
    const paddingSize = padding || 'medium';
    
    switch (paddingSize) {
      case 'small':
        return 'padding: 12px;';
      case 'large':
        return 'padding: 32px;';
      default:
        return 'padding: 20px;';
    }
  }}

  /* Size-based styling */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          max-width: 300px;
          min-height: 120px;
        `;
      case 'large':
        return `
          max-width: 600px;
          min-height: 250px;
        `;
      default:
        return `
          max-width: 400px;
          min-height: 180px;
        `;
    }
  }}

  /* Hover effects */
  ${({ hoverable, clickable, onClick, disabled, variant }) => {
    if (disabled) return '';
    if (hoverable || clickable || onClick) {
      switch (variant) {
        case 'elevated':
          return `
            &:hover {
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
              transform: translateY(-2px);
            }
          `;
        case 'outlined':
          return `
            &:hover {
              background-color: rgba(0, 123, 255, 0.04);
              border-color: #007bff;
            }
          `;
        default:
          return `
            &:hover {
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              transform: translateY(-1px);
            }
          `;
      }
    }
    return '';
  }}

  /* Active state */
  ${({ clickable, onClick, disabled }) => {
    if (disabled) return '';
    if (clickable || onClick) {
      return `
        &:active {
          transform: translateY(0);
        }
      `;
    }
    return '';
  }}

  /* Responsive design */
  @media (max-width: 768px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            max-width: 280px;
            min-height: 100px;
          `;
        case 'large':
          return `
            max-width: 100%;
            min-height: 200px;
          `;
        default:
          return `
            max-width: 100%;
            min-height: 150px;
          `;
      }
    }}
    
    /* Reduce hover effects on mobile */
    ${({ hoverable, clickable, onClick, disabled }) => {
      if (disabled) return '';
      if (hoverable || clickable || onClick) {
        return `
          &:hover {
            transform: translateY(-1px);
          }
        `;
      }
      return '';
    }}
  }

  @media (max-width: 480px) {
    ${({ padding }) => {
      if (padding === 'none') return '';
      
      const paddingSize = padding || 'medium';
      
      switch (paddingSize) {
        case 'small':
          return 'padding: 8px;';
        case 'large':
          return 'padding: 20px;';
        default:
          return 'padding: 16px;';
      }
    }}
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  padding = 'medium',
  backgroundColor,
  borderColor,
  borderRadius,
  disabled = false,
  hoverable = false,
  clickable = false,
  onClick,
  className,
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    }
  };

  const isClickable = clickable || !!onClick;

  return (
    <StyledCard
      variant={variant}
      size={size}
      padding={padding}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      disabled={disabled}
      hoverable={hoverable || isClickable}
      clickable={isClickable}
      onClick={isClickable ? handleClick : undefined}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
