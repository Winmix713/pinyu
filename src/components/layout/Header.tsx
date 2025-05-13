import React from 'react';
import { Bell, ChevronDown, Trophy, User, Home, BarChart, LayoutGrid, LineChart, Settings, Database, Users } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const navigationButtons = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BarChart, label: 'Analysis', path: '/analysis' },
  { icon: LayoutGrid, label: 'Matches', path: '/matches' },
  { icon: LineChart, label: 'League Management', path: '/league-management' },
  { icon: Database, label: 'Statistics', path: '/statistics' },
  { icon: Users, label: 'Teams', path: '/teams' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl border-b border-white/10"></div>
      
      <div className="container mx-auto px-4 h-16 relative flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-2 mr-6">
            {navigationButtons.map((button) => (
              <button
                key={button.label}
                onClick={() => navigate(button.path)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 
                backdrop-blur-sm transition-all duration-200 group text-gray-300 hover:text-white
                ${location.pathname === button.path 
                  ? 'bg-blue-600/50 text-white' 
                  : 'bg-gray-800/50 hover:bg-gray-800/70'}`}
              >
                <button.icon className={`w-4 h-4 ${location.pathname === button.path 
                  ? 'text-white' 
                  : 'text-blue-400'} group-hover:scale-110 transition-transform duration-200`} />
                <span className="text-sm font-medium">{button.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 border border-white/5 
              backdrop-blur-sm transition-all duration-200 group">
              <Bell className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-gray-900"></span>
            </button>
            
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 border border-white/5 
              backdrop-blur-sm transition-all duration-200 group">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                Profile
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;