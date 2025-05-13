import React from 'react';
import { BarChart, Users, Trophy, Calendar, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Dashboard = () => {
  const stats = [
    { title: 'Total Teams', value: '24', change: '+12%', icon: Users },
    { title: 'Active Leagues', value: '6', change: '+3%', icon: Trophy },
    { title: 'Upcoming Matches', value: '18', change: '+7%', icon: Calendar },
    { title: 'Win Rate', value: '68%', change: '+4.3%', icon: TrendingUp },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Dashboard Overview
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-blue-400" />
                <span className="text-xs font-medium text-green-400">{stat.change}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-200">{stat.title}</h3>
                <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart className="h-5 w-5 text-blue-400" />
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">New match scheduled</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;