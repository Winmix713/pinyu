import React from 'react';
import { ChevronRight, Clock } from 'lucide-react';
import { NavItem } from '../../types';
import SearchBar from '../ui/SearchBar';
import * as LucideIcons from 'lucide-react';

interface SidebarProps {
  navItems: NavItem[];
  onNavItemClick: (item: NavItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, onNavItemClick }) => {
  const LucideIcon = (iconName: string) => {
    // @ts-ignore - Dynamic import of Lucide icon
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <div className="bg-gray-900/40 backdrop-blur-xl w-64 h-full flex flex-col py-4 border-r border-white/10">
      <div className="px-4 mb-6">
        <SearchBar placeholder="Quick navigation..." />
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavItemClick(item)}
            className={`group flex items-center px-4 py-3 text-left text-gray-300 hover:bg-gray-800/50 transition-all duration-200 relative
            ${item.isActive ? 'bg-indigo-600/20 backdrop-blur-sm text-white' : ''}`}
          >
            <div className={`mr-3 ${item.isActive ? 'text-indigo-400' : 'text-indigo-500'} transition-colors duration-200 group-hover:text-indigo-400`}>
              {LucideIcon(item.icon)}
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{item.title}</span>
              <span className="text-xs text-gray-500 mt-0.5 group-hover:text-gray-400 transition-colors duration-200">
                {item.description}
              </span>
            </div>
            {item.badge && (
              <div className={`absolute right-4 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase backdrop-blur-sm
                ${item.badge.variant === 'new' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  item.badge.variant === 'beta' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
              >
                {item.badge.text}
              </div>
            )}
            {item.hasSubmenu && (
              <div className="absolute right-4">
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors duration-200" />
              </div>
            )}
            {item.isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r"></div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-auto px-4 py-4 border-t border-white/10">
        <div className="bg-indigo-600/10 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/20">
          <div className="flex items-center text-xs text-indigo-400 mb-2">
            <Clock className="w-4 h-4 mr-2" />
            <span>Next analysis update</span>
          </div>
          <div className="text-white font-semibold">Today, 18:00</div>
          <div className="mt-2 text-xs text-indigo-400/80">
            System will analyze the latest match data
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar