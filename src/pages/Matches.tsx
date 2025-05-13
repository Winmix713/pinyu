import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Matches = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Team Alpha',
      awayTeam: 'Team Beta',
      date: '2024-03-25',
      time: '15:00',
      venue: 'Stadium A',
      league: 'Premier League',
    },
    // Add more matches...
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Match Schedule
        </h1>
        <Button variant="primary">
          Schedule Match
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {upcomingMatches.map((match) => (
          <Card key={match.id} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">
                {match.homeTeam} vs {match.awayTeam}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>{match.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>{match.league}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Matches;