import React from 'react';
import { Loader } from 'lucide-react';

interface ActionButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  size = 'md',
  disabled = false,
  loading = false,
  icon: Icon,
  onClick,
  className = '',
  children
}) => {
  const getVariantStyles = () => {
    const styles = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
      ghost: 'hover:bg-gray-100 text-gray-700'
    };
    return styles[variant];
  };

  const getSizeStyles = () => {
    const styles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    return styles[size];
  };

  const getIconSize = () => {
    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };
    return sizes[size];
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`relative rounded-lg font-medium transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      ${getVariantStyles()}
      ${getSizeStyles()}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
      ${className}`}
    >
      <div className="flex items-center justify-center gap-2">
        {loading ? (
          <Loader className={`${getIconSize()} animate-spin`} />
        ) : Icon ? (
          <Icon className={getIconSize()} />
        ) : null}
        {children}
      </div>
      <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ActionButton;