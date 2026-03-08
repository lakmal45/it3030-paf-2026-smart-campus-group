import React from 'react';
import { Users, Activity, ShieldAlert, Server } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', users: 400 },
  { time: '04:00', users: 300 },
  { time: '08:00', users: 800 },
  { time: '12:00', users: 1200 },
  { time: '16:00', users: 1500 },
  { time: '20:00', users: 900 },
  { time: '24:00', users: 500 },
];

const AdminDashboard = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">System Administration</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Users</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">1,248</p>
          </div>
          <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
            <Users size={24} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">System Health</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">99.9%</p>
          </div>
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
            <Activity size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Active Sessions</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">342</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
            <Server size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pending Alerts</h3>
            <p className="mt-2 text-3xl font-bold text-amber-600">5</p>
          </div>
          <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
            <ShieldAlert size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">System Usage (24h)</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Recent Activity</h2>
          <div className="space-y-6">
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">System Backup Completed</p>
                 <p className="text-xs text-slate-500 mt-1">10 minutes ago</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">High CPU Usage Detected</p>
                 <p className="text-xs text-slate-500 mt-1">1 hour ago • Server Node B</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-500"></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">New Admin Account Created</p>
                 <p className="text-xs text-slate-500 mt-1">3 hours ago • by SuperAdmin</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-slate-400"></div>
               <div>
                 <p className="text-sm font-medium text-slate-800">Database Optimized</p>
                 <p className="text-xs text-slate-500 mt-1">Yesterday at 02:00 AM</p>
               </div>
             </div>
          </div>
          <button className="w-full mt-6 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            View All Logs →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
