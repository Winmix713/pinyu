import React from 'react';
import { BarChart2, PieChart, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Statistics = () => {
  const stats = [
    { title: 'Total Matches', value: '156', change: '+23', icon: BarChart2 },
    { title: 'Average Goals', value: '2.8', change: '+0.3', icon: TrendingUp },
    { title: 'Clean Sheets', value: '45', change: '+5', icon: Award },
    { title: 'Win Rate', value: '64%', change: '+2.4%', icon: PieChart },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Team Statistics
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-green-400" />
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
              <BarChart2 className="h-5 w-5 text-green-400" />
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Performance chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <PieChart className="h-5 w-5 text-green-400" />
              Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Distribution chart will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;