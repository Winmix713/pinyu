import React from 'react';

interface StatusBadgeProps {
  status: string;
  variant: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  animated?: boolean;
  tooltip?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status,
  variant,
  size = 'md',
  animated = false,
  tooltip
}) => {
  const getVariantStyles = () => {
    const styles = {
      success: 'bg-green-100 text-green-800 border-green-200',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      error: 'bg-red-100 text-red-800 border-red-200'
    };
    return styles[variant];
  };

  const getSizeStyles = () => {
    return size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  };

  const getDotStyles = () => {
    const styles = {
      success: 'bg-green-400',
      warning: 'bg-yellow-400',
      error: 'bg-red-400'
    };
    return `${styles[variant]} ${animated ? 'animate-pulse' : ''}`;
  };

  return (
    <div 
      className={`inline-flex items-center rounded-full border ${getVariantStyles()} ${getSizeStyles()}`}
      title={tooltip}
      role={tooltip ? 'tooltip' : undefined}
    >
      <span className={`w-2 h-2 rounded-full ${getDotStyles()} mr-2`}></span>
      <span className="font-medium">{status}</span>
    </div>
  );
};

export default StatusBadge;