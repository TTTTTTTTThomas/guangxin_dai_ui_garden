export interface ButtonProps {
  /**
   * Button text content
   */
  children: React.ReactNode;
  /**
   * Button variant type
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Background color (overrides variant)
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
