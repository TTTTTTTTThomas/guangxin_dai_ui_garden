import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.div<TextProps>`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  
  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return `
          font-size: 12px;
        `;
      case 'sm':
        return `
          font-size: 14px;
        `;
      case 'lg':
        return `
          font-size: 18px;
        `;
      case 'xl':
        return `
          font-size: 20px;
        `;
      case '2xl':
        return `
          font-size: 24px;
        `;
      default:
        return `
          font-size: 16px;
        `;
    }
  }}

  /* Weight variants */
  font-weight: ${({ weight }) => {
    switch (weight) {
      case 'light':
        return '300';
      case 'normal':
        return '400';
      case 'medium':
        return '500';
      case 'semibold':
        return '600';
      case 'bold':
        return '700';
      default:
        return '400';
    }
  }};

  /* Line height variants */
  line-height: ${({ lineHeight }) => {
    switch (lineHeight) {
      case 'tight':
        return '1.2';
      case 'relaxed':
        return '1.8';
      default:
        return '1.5';
    }
  }};

  /* Text alignment */
  text-align: ${({ align }) => align || 'left'};

  /* Color */
  color: ${({ color, disabled }) => {
    if (disabled) return '#999999';
    return color || '#333333';
  }};

  /* Truncation */
  ${({ truncate }) =>
    truncate &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}

  /* Responsive design */
  @media (max-width: 768px) {
    ${({ size }) => {
      switch (size) {
        case 'xl':
          return `font-size: 18px;`;
        case '2xl':
          return `font-size: 20px;`;
        default:
          return '';
      }
    }}
  }

  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'xs':
          return `font-size: 11px;`;
        case 'sm':
          return `font-size: 13px;`;
        case 'md':
          return `font-size: 15px;`;
        case 'lg':
          return `font-size: 16px;`;
        case 'xl':
          return `font-size: 17px;`;
        case '2xl':
          return `font-size: 18px;`;
        default:
          return '';
      }
    }}
  }
`;

const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  size = 'md',
  weight = 'normal',
  color,
  align = 'left',
  lineHeight = 'normal',
  disabled = false,
  truncate = false,
  className,
  ...props
}) => {
  return (
    <StyledText
      as={as}
      size={size}
      weight={weight}
      color={color}
      align={align}
      lineHeight={lineHeight}
      disabled={disabled}
      truncate={truncate}
      className={className}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
