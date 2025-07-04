import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{
  disabled?: boolean;
  labelPosition?: 'left' | 'right';
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  user-select: none;
  flex-direction: ${({ labelPosition }) => 
    labelPosition === 'left' ? 'row-reverse' : 'row'};
  
  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      .radio-custom {
        border-color: #007bff;
      }
    `}
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const CustomRadio = styled.div<{
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
  checkedColor?: string;
}>`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid ${({ checked, disabled, checkedColor }) => {
    if (disabled) return '#e0e0e0';
    if (checked) return checkedColor || '#007bff';
    return '#ced4da';
  }};
  background-color: ${({ checked, disabled, checkedColor }) => {
    if (disabled) return '#f8f9fa';
    if (checked) return checkedColor || '#007bff';
    return '#ffffff';
  }};
  transition: all 0.3s ease;
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'large':
        return `
          width: 24px;
          height: 24px;
        `;
      default:
        return `
          width: 20px;
          height: 20px;
        `;
    }
  }}

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ffffff;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.3s ease;
    
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            width: 6px;
            height: 6px;
          `;
        case 'large':
          return `
            width: 10px;
            height: 10px;
          `;
        default:
          return `
            width: 8px;
            height: 8px;
          `;
      }
    }}
  }

  /* Responsive design */
  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            width: 14px;
            height: 14px;
            
            &::after {
              width: 5px;
              height: 5px;
            }
          `;
        case 'large':
          return `
            width: 20px;
            height: 20px;
            
            &::after {
              width: 8px;
              height: 8px;
            }
          `;
        default:
          return `
            width: 18px;
            height: 18px;
            
            &::after {
              width: 7px;
              height: 7px;
            }
          `;
      }
    }}
  }
`;

const Label = styled.span<{
  size?: 'small' | 'medium' | 'large';
  labelPosition?: 'left' | 'right';
  disabled?: boolean;
}>`
  color: ${({ disabled }) => (disabled ? '#999999' : '#333333')};
  margin: ${({ labelPosition }) => 
    labelPosition === 'left' ? '0 8px 0 0' : '0 0 0 8px'};
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          line-height: 1.3;
        `;
      case 'large':
        return `
          font-size: 16px;
          line-height: 1.4;
        `;
      default:
        return `
          font-size: 14px;
          line-height: 1.4;
        `;
    }
  }}

  /* Responsive design */
  @media (max-width: 480px) {
    ${({ size }) => {
      switch (size) {
        case 'small':
          return `font-size: 11px;`;
        case 'large':
          return `font-size: 15px;`;
        default:
          return `font-size: 13px;`;
      }
    }}
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  defaultChecked,
  disabled = false,
  size = 'medium',
  checkedColor,
  labelPosition = 'right',
  onChange,
  className,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <RadioContainer
      disabled={disabled}
      labelPosition={labelPosition}
      className={className}
    >
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <CustomRadio
        className="radio-custom"
        size={size}
        checked={checked}
        disabled={disabled}
        checkedColor={checkedColor}
      />
      <Label
        size={size}
        labelPosition={labelPosition}
        disabled={disabled}
      >
        {label}
      </Label>
    </RadioContainer>
  );
};

export default RadioButton;
