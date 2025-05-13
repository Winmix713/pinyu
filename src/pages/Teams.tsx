import React from 'react';
import { Users, Star, Trophy, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: 'Team Alpha',
      ranking: 1,
      wins: 12,
      losses: 3,
      players: 18,
    },
    // Add more teams...
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Team Management
        </h1>
        <Button variant="primary">
          Add New Team
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                {team.name}
                <Star className="h-5 w-5 text-amber-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    <span>Ranking</span>
                  </div>
                  <span className="font-semibold">#{team.ranking}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-amber-400" />
                    <span>Record</span>
                  </div>
                  <span className="font-semibold">{team.wins}W - {team.losses}L</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-amber-400" />
                    <span>Players</span>
                  </div>
                  <span className="font-semibold">{team.players}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;