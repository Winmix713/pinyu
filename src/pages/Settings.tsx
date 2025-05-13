import React from 'react';
import { Bell, Lock, User, Globe, Palette, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your account information and preferences',
    },
    {
      title: 'Security',
      icon: Lock,
      description: 'Configure security settings and authentication',
    },
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Customize your notification preferences',
    },
    {
      title: 'Appearance',
      icon: Palette,
      description: 'Customize the look and feel of your dashboard',
    },
    {
      title: 'Data Management',
      icon: Database,
      description: 'Manage your data and export options',
    },
    {
      title: 'Regional Settings',
      icon: Globe,
      description: 'Configure timezone and regional preferences',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          Settings
        </h1>
        <Button variant="primary">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <section.icon className="h-5 w-5 text-indigo-400" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">{section.description}</p>
              <Button variant="secondary" className="w-full">
                Configure
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Settings;