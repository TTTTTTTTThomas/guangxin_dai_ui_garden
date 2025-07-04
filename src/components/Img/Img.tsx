import React, { useState } from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  transition: all 0.3s ease;
  cursor: ${({ onClick, disabled }) => {
    if (disabled) return 'not-allowed';
    if (onClick) return 'pointer';
    return 'default';
  }};
  
  /* Width and height handling */
  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  ${({ height }) => height && `height: ${typeof height === 'number' ? `${height}px` : height};`}
  
  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    filter: grayscale(100%);
  `}

  /* Hover effects for clickable images */
  ${({ onClick, disabled }) =>
    onClick && !disabled &&
    `
    &:hover {
      opacity: 0.8;
      transform: scale(1.02);
    }
    
    &:active {
      transform: scale(0.98);
    }
  `}

  /* Responsive design */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: auto;
    
    /* Adjust transform effects for mobile */
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
`;

const ImageContainer = styled.div<{ disabled?: boolean }>`
  display: inline-block;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  /* Loading placeholder */
  &.loading {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    color: #6c757d;
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  borderRadius = '0',
  disabled = false,
  loading = 'lazy',
  fallbackSrc,
  onClick,
  className,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback image if available and not already using it
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsLoading(true);
      setHasError(false);
    }
  };

  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    }
  };

  // Show loading state
  if (isLoading && !hasError) {
    return (
      <ImageContainer 
        className={`loading ${className || ''}`.trim()}
        disabled={disabled}
        style={{ width, height }}
      >
        Loading...
      </ImageContainer>
    );
  }

  // Show error state (if no fallback available or fallback also failed)
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    return (
      <ImageContainer 
        className={`error ${className || ''}`.trim()}
        disabled={disabled}
        style={{ width, height }}
      >
        Failed to load image
      </ImageContainer>
    );
  }

  return (
    <ImageContainer disabled={disabled} className={className}>
      <StyledImg
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        borderRadius={borderRadius}
        disabled={disabled}
        loading={loading}
        onClick={handleClick}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </ImageContainer>
  );
};

export default Img;
