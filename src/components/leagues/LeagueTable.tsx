import React, { useState } from 'react';
import { Edit, Eye, Plus, Trash, Search, CheckCircle as CircleCheckBig, Award, BarChart3, Zap } from 'lucide-react';
import { League } from '../../types';
import StatusBadge from '../ui/StatusBadge';
import ActionButton from '../ui/ActionButton';
import Pagination from '../ui/Pagination';

interface LeagueTableProps {
  leagues: League[];
}

const LeagueTable: React.FC<LeagueTableProps> = ({ leagues }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const filteredLeagues = leagues.filter((league) =>
    league.season.toLowerCase().includes(searchQuery.toLowerCase()) ||
    league.region?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedLeagues = filteredLeagues.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredLeagues.length / ITEMS_PER_PAGE);

  const handleViewLeague = (id: string) => {
    console.log(`Viewing league with id: ${id}`);
  };

  const handleEditLeague = (id: string) => {
    console.log(`Editing league with id: ${id}`);
  };

  const handleDeleteLeague = (id: string) => {
    console.log(`Deleting league with id: ${id}`);
  };

  const handleCreateLeague = () => {
    console.log('Creating new league');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            League Management
          </h1>
          <p className="text-gray-400 mt-1">Manage and monitor your leagues</p>
        </div>
        
        <button 
          onClick={handleCreateLeague}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 
          text-white rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 group"
        >
          <Plus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
          New League
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative rounded-xl bg-gradient-to-br p-4 border backdrop-blur-sm animate-scale-in from-blue-600/20 to-blue-700/10 border-blue-500/20 animate-delay-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/70">Total Predictions</span>
            <CircleCheckBig className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>

        <div className="relative rounded-xl bg-gradient-to-br p-4 border backdrop-blur-sm animate-scale-in from-green-600/20 to-green-700/10 border-green-500/20 animate-delay-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/70">Correct Predictions</span>
            <Award className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>

        <div className="relative rounded-xl bg-gradient-to-br p-4 border backdrop-blur-sm animate-scale-in from-purple-600/20 to-purple-700/10 border-purple-500/20 animate-delay-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/70">Win Rate</span>
            <BarChart3 className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">0%</div>
        </div>

        <div className="relative rounded-xl bg-gradient-to-br p-4 border backdrop-blur-sm animate-scale-in from-amber-600/20 to-amber-700/10 border-amber-500/20 animate-delay-400">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/70">Current Streak</span>
            <Zap className="h-4 w-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">0</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search leagues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/20 text-foreground border border-border rounded-lg pl-10 pr-4 py-2.5
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent
              transition-all duration-200 placeholder:text-muted-foreground"
            aria-label="Search leagues"
          />
        </div>
        
        <div className="text-sm text-gray-400">
          Showing <span className="text-white font-medium">{paginatedLeagues.length}</span> of{' '}
          <span className="text-white font-medium">{filteredLeagues.length}</span> leagues
        </div>
      </div>
      
      <div className="bg-gray-900/40 rounded-xl border border-white/10 overflow-hidden backdrop-blur-xl shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-gray-900/20">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Season</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Region</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Teams</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Winner</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {paginatedLeagues.map((league) => (
              <tr 
                key={league.id} 
                className="group hover:bg-gray-800/50 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                      {league.season}
                    </span>
                    <span className="text-xs text-gray-500">
                      {league.startDate} - {league.endDate}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-300">{league.region}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-300">{league.totalTeams} teams</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300">{league.winner || '-'}</span>
                    {league.winner && (
                      <span className="text-xs text-gray-500">
                        2nd: {league.secondPlace} • 3rd: {league.thirdPlace}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={league.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end space-x-2">
                    <ActionButton 
                      icon={Eye} 
                      title="View details" 
                      onClick={() => handleViewLeague(league.id)}
                    />
                    <ActionButton 
                      icon={Edit} 
                      title="Edit league" 
                      onClick={() => handleEditLeague(league.id)}
                      variant="success"
                    />
                    <ActionButton 
                      icon={Trash} 
                      title="Delete league" 
                      onClick={() => handleDeleteLeague(league.id)}
                      variant="danger"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-4 border-t border-white/10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;