export interface ImgProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alternative text for accessibility
   */
  alt: string;
  /**
   * Image width
   */
  width?: string | number;
  /**
   * Image height
   */
  height?: string | number;
  /**
   * Object fit property
   */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * Border radius
   */
  borderRadius?: string;
  /**
   * Disabled state (greyed out)
   */
  disabled?: boolean;
  /**
   * Loading state placeholder
   */
  loading?: 'lazy' | 'eager';
  /**
   * Fallback image URL
   */
  fallbackSrc?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
