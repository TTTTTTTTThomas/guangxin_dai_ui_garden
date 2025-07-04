export interface HeroImageProps {
  /**
   * Background image source URL
   */
  src: string;
  /**
   * Alternative text for accessibility
   */
  alt: string;
  /**
   * Hero content (title, subtitle, etc.)
   */
  children?: React.ReactNode;
  /**
   * Hero height
   */
  height?: string | number;
  /**
   * Background position
   */
  backgroundPosition?: string;
  /**
   * Background size
   */
  backgroundSize?: 'cover' | 'contain' | 'auto';
  /**
   * Overlay color (semi-transparent)
   */
  overlayColor?: string;
  /**
   * Overlay opacity (0-1)
   */
  overlayOpacity?: number;
  /**
   * Content alignment
   */
  contentAlignment?: 'left' | 'center' | 'right';
  /**
   * Vertical content alignment
   */
  verticalAlignment?: 'top' | 'center' | 'bottom';
  /**
   * Disabled state (greyed out)
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}
