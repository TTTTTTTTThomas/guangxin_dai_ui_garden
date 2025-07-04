export interface TextProps {
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * HTML element to render
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Text size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * Text weight
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /**
   * Text color
   */
  color?: string;
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Line height
   */
  lineHeight?: 'tight' | 'normal' | 'relaxed';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Text truncation
   */
  truncate?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}
