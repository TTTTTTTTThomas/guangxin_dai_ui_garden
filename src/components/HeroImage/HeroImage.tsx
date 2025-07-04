import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{
  src: string;
  height?: string | number;
  backgroundPosition?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  contentAlignment?: 'left' | 'center' | 'right';
  verticalAlignment?: 'top' | 'center' | 'bottom';
  disabled?: boolean;
  onClick?: () => void;
}>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease;
  cursor: ${({ onClick, disabled }) => {
    if (disabled) return 'not-allowed';
    if (onClick) return 'pointer';
    return 'default';
  }};
  
  /* Height handling */
  height: ${({ height }) => {
    if (typeof height === 'number') return `${height}px`;
    return height || '400px';
  }};
  
  /* Background image */
  background-image: url(${({ src }) => src});
  background-position: ${({ backgroundPosition }) => backgroundPosition || 'center center'};
  background-size: ${({ backgroundSize }) => backgroundSize || 'cover'};
  background-repeat: no-repeat;
  
  /* Content alignment */
  align-items: ${({ verticalAlignment }) => {
    switch (verticalAlignment) {
      case 'top':
        return 'flex-start';
      case 'bottom':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
  
  justify-content: ${({ contentAlignment }) => {
    switch (contentAlignment) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
  
  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    filter: grayscale(100%);
  `}

  /* Hover effects for clickable hero */
  ${({ onClick, disabled }) =>
    onClick && !disabled &&
    `
    &:hover {
      transform: scale(1.02);
    }
    
    &:active {
      transform: scale(0.98);
    }
  `}

  /* Responsive design */
  @media (max-width: 768px) {
    ${({ height }) => {
      if (typeof height === 'number' && height > 300) {
        return `height: 300px;`;
      }
      if (typeof height === 'string' && height.includes('px')) {
        const numericHeight = parseInt(height);
        if (numericHeight > 300) {
          return `height: 300px;`;
        }
      }
      return '';
    }}
    
    /* Reduce transform effects on mobile */
    ${({ onClick, disabled }) =>
      onClick && !disabled &&
      `
      &:hover {
        transform: scale(1.01);
      }
      
      &:active {
        transform: scale(0.99);
      }
    `}
  }

  @media (max-width: 480px) {
    ${({ height }) => {
      if (typeof height === 'number' && height > 250) {
        return `height: 250px;`;
      }
      if (typeof height === 'string' && height.includes('px')) {
        const numericHeight = parseInt(height);
        if (numericHeight > 250) {
          return `height: 250px;`;
        }
      }
      return '';
    }}
  }
`;

const Overlay = styled.div<{
  overlayColor?: string;
  overlayOpacity?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ overlayColor }) => overlayColor || 'rgba(0, 0, 0, 0.4)'};
  opacity: ${({ overlayOpacity }) => overlayOpacity ?? 1};
  pointer-events: none;
`;

const Content = styled.div<{
  contentAlignment?: 'left' | 'center' | 'right';
}>`
  position: relative;
  z-index: 2;
  padding: 2rem;
  max-width: 100%;
  color: white;
  text-align: ${({ contentAlignment }) => contentAlignment || 'center'};
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
  
  p {
    margin: 0 0 1rem 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    
    h1 {
      font-size: 1.5rem;
    }
    
    h2 {
      font-size: 1.25rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  children,
  height = 400,
  backgroundPosition = 'center center',
  backgroundSize = 'cover',
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity = 1,
  contentAlignment = 'center',
  verticalAlignment = 'center',
  disabled = false,
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

  return (
    <HeroContainer
      src={src}
      height={height}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      contentAlignment={contentAlignment}
      verticalAlignment={verticalAlignment}
      disabled={disabled}
      onClick={handleClick}
      className={className}
      role="img"
      aria-label={alt}
      {...props}
    >
      {(overlayColor || overlayOpacity !== 1) && (
        <Overlay 
          overlayColor={overlayColor} 
          overlayOpacity={overlayOpacity} 
        />
      )}
      
      {children && (
        <Content contentAlignment={contentAlignment}>
          {children}
        </Content>
      )}
    </HeroContainer>
  );
};

export default HeroImage;
