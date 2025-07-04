export interface LabelProps {
  /**
   * Label text content
   */
  children: React.ReactNode;
  /**
   * HTML for attribute
   */
  htmlFor?: string;
  /**
   * Label size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Label variant
   */
  variant?: 'default' | 'required' | 'optional';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Text color
   */
  color?: string;
  /**
   * Font weight
   */
  fontWeight?: 'normal' | 'medium' | 'bold';
  /**
   * Additional CSS class
   */
  className?: string;
}
