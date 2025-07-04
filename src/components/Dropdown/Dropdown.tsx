import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const DropdownContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 120px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const DropdownButton = styled.button<{
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}>`
  width: 100%;
  background-color: ${({ backgroundColor, disabled }) => {
    if (disabled) return '#f8f9fa';
    return backgroundColor || '#ffffff';
  }};
  color: ${({ textColor, disabled }) => {
    if (disabled) return '#999999';
    return textColor || '#495057';
  }};
  border: 1px solid ${({ disabled }) => (disabled ? '#e0e0e0' : '#ced4da')};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          padding: 8px 32px 8px 12px;
          min-height: 32px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 16px 40px 16px 16px;
          min-height: 56px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 12px 36px 12px 12px;
          min-height: 40px;
        `;
    }
  }}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    `}
  }

  &:focus {
    outline: none;
    ${({ disabled }) =>
      !disabled &&
      `
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    `}
  }

  &::after {
    content: '▼';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: ${({ disabled }) => (disabled ? '#999999' : '#666666')};
  }

  /* Responsive design */
  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            font-size: 11px;
            padding: 6px 28px 6px 10px;
            min-height: 28px;
          `;
        case 'large':
          return `
            font-size: 14px;
            padding: 12px 32px 12px 12px;
            min-height: 48px;
          `;
        default:
          return `
            font-size: 13px;
            padding: 10px 30px 10px 10px;
            min-height: 36px;
          `;
      }
    }}
  }
`;

const DropdownMenu = styled.ul<{ isOpen: boolean; size?: 'small' | 'medium' | 'large' }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin: 4px 0 0 0;
  padding: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `font-size: 12px;`;
      case 'large':
        return `font-size: 16px;`;
      default:
        return `font-size: 14px;`;
    }
  }}

  /* Responsive design */
  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `font-size: 11px;`;
        case 'large':
          return `font-size: 14px;`;
        default:
          return `font-size: 13px;`;
      }
    }}
  }
`;

const DropdownItem = styled.li<{ disabled?: boolean; size?: 'small' | 'medium' | 'large' }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#999999' : '#495057')};
  background-color: ${({ disabled }) => (disabled ? '#f8f9fa' : 'transparent')};
  transition: background-color 0.2s ease;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `padding: 8px 12px;`;
      case 'large':
        return `padding: 16px 16px;`;
      default:
        return `padding: 12px 12px;`;
    }
  }}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      background-color: #f8f9fa;
    `}
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  /* Responsive design */
  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `padding: 6px 10px;`;
        case 'large':
          return `padding: 12px 12px;`;
        default:
          return `padding: 10px 10px;`;
      }
    }}
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  defaultValue,
  placeholder = 'Select an option',
  size = 'medium',
  disabled = false,
  backgroundColor,
  textColor,
  onChange,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string | number) => {
    if (disabled) return;
    
    setSelectedValue(optionValue);
    setIsOpen(false);
    
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <DropdownContainer ref={dropdownRef} disabled={disabled} className={className}>
      <DropdownButton
        type="button"
        onClick={handleButtonClick}
        disabled={disabled}
        size={size}
        backgroundColor={backgroundColor}
        textColor={textColor}
      >
        {displayText}
      </DropdownButton>
      
      <DropdownMenu isOpen={isOpen} size={size}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            disabled={option.disabled}
            size={size}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
