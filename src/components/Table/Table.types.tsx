export interface TableProps {
  /**
   * Table content
   */
  children: React.ReactNode;
  /**
   * Table variant
   */
  variant?: 'default' | 'striped' | 'bordered';
  /**
   * Table size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Responsive behavior
   */
  responsive?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableHeaderProps {
  /**
   * Header content
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableRowProps {
  /**
   * Row content
   */
  children: React.ReactNode;
  /**
   * Row variant
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Hover effect
   */
  hoverable?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableCellProps {
  /**
   * Cell content
   */
  children?: React.ReactNode;
  /**
   * HTML element to render
   */
  as?: 'td' | 'th';
  /**
   * Cell alignment
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Cell width
   */
  width?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableFooterProps {
  /**
   * Footer content
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}
