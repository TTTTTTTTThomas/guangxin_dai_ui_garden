export interface RadioButtonProps {
  /**
   * Radio button label
   */
  label: string;
  /**
   * Radio button value
   */
  value: string | number;
  /**
   * Radio button name (for grouping)
   */
  name: string;
  /**
   * Checked state
   */
  checked?: boolean;
  /**
   * Default checked state
   */
  defaultChecked?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Radio button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color when checked
   */
  checkedColor?: string;
  /**
   * Label position
   */
  labelPosition?: 'left' | 'right';
  /**
   * Change handler
   */
  onChange?: (value: string | number) => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
