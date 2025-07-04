export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * Dropdown options
   */
  options: DropdownOption[];
  /**
   * Selected value
   */
  value?: string | number;
  /**
   * Default selected value
   */
  defaultValue?: string | number;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Dropdown size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Change handler
   */
  onChange?: (value: string | number) => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
