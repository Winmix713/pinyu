import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { navigationItems } from './data/mockData';
import { NavItem } from './types';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Matches from './pages/Matches';
import LeagueManagement from './components/leagues/LeagueTable';
import Statistics from './pages/Statistics';
import Teams from './pages/Teams';
import Settings from './pages/Settings';

function AppContent() {
  const [navItems, setNavItems] = useState(navigationItems);

  const handleNavItemClick = (item: NavItem) => {
    const updatedNavItems = navItems.map((navItem) => ({
      ...navItem,
      isActive: navItem.title === item.title,
    }));
    setNavItems(updatedNavItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar 
          navItems={navItems} 
          onNavItemClick={handleNavItemClick} 
        />

        <main className="flex-1 overflow-y-auto relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-indigo-500/5 to-transparent z-0 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-950/50 to-transparent z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/league-management" element={<LeagueManagement leagues={[]} />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;