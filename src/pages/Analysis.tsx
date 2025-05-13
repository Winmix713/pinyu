import React from 'react';
import { LineChart, PieChart, BarChart2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const Analysis = () => {
  const metrics = [
    { title: 'Win Prediction Accuracy', value: '87%', trend: '+2.5%', icon: TrendingUp },
    { title: 'Total Predictions', value: '1,284', trend: '+12%', icon: BarChart2 },
    { title: 'Success Rate', value: '92%', trend: '+4.3%', icon: LineChart },
    { title: 'Data Points', value: '45,678', trend: '+8%', icon: PieChart },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Performance Analysis
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <metric.icon className="h-8 w-8 text-purple-400" />
                <span className="text-xs font-medium text-green-400">{metric.trend}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-200">{metric.title}</h3>
                <p className="text-3xl font-bold text-white mt-2">{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <LineChart className="h-5 w-5 text-purple-400" />
              Prediction Accuracy Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              Accuracy trend chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-400" />
              Distribution Analysis
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

export default Analysis;