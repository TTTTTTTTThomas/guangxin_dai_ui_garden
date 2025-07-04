export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card variant
   */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  /**
   * Card size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Card padding
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Border color (for outlined variant)
   */
  borderColor?: string;
  /**
   * Border radius
   */
  borderRadius?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Hoverable (adds hover effects)
   */
  hoverable?: boolean;
  /**
   * Clickable (adds cursor pointer and click handler)
   */
  clickable?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
