import React from 'react';
import { DollarSign, Briefcase, Activity, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Engineering', efficiency: 95 },
  { name: 'Design', efficiency: 88 },
  { name: 'Marketing', efficiency: 92 },
  { name: 'Sales', efficiency: 85 },
  { name: 'Support', efficiency: 90 },
];

const ManagerDashboard = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Operations Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Department Budget</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">$45.2k</p>
          </div>
          <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Active Projects</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">12</p>
          </div>
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
            <Briefcase size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Team Productivity</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">92%</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
            <Activity size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pending Approvals</h3>
            <p className="mt-2 text-3xl font-bold text-amber-600">3</p>
          </div>
          <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
            <CheckCircle size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Pending Approvals</h2>
          <div className="space-y-4">
            {[
              { id: 1, req: "Q3 Software Licenses", by: "Alice Smith", amount: "$1,200" },
              { id: 2, req: "New Developer Laptop", by: "Bob Johnson", amount: "$2,400" },
              { id: 3, req: "Marketing Campaign Tools", by: "Charlie Davis", amount: "$800" },
            ].map((item) => (
              <div key={item.id} className="p-4 border border-slate-100 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-semibold text-slate-800">{item.req}</p>
                  <p className="text-sm text-slate-500">Requested by {item.by} • <span className="font-medium text-slate-700">{item.amount}</span></p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors">
                    <CheckCircle size={16} /> Approve
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors">
                    <XCircle size={16} /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
           <h2 className="text-xl font-semibold text-slate-800 mb-6">Department Performance</h2>
           <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{fill: '#f1f5f9'}}
                />
                <Bar dataKey="efficiency" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
