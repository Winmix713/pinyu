// Component Props Types
export interface LogoProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  suggestions?: string[];
  debounceTime?: number;
  loading?: boolean;
  className?: string;
}

export interface StatusBadgeProps {
  status: string;
  variant: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  animated?: boolean;
  tooltip?: string;
}

export interface ActionButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

export interface UserMenuProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  items: {
    label: string;
    href: string;
    icon?: React.ElementType;
  }[];
}

export interface SidebarItem extends NavItem {
  badge?: {
    text: string;
    variant: 'success' | 'warning' | 'error';
  };
}

// Table Types
export interface ColumnConfig {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any) => React.ReactNode;
}

export interface RowData {
  id: string;
  [key: string]: any;
}