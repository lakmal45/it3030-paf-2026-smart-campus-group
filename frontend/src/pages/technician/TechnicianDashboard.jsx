import React from 'react';
import { Wrench, CheckCircle2, Clock, AlertOctagon, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', tickets: 12 },
  { day: 'Tue', tickets: 19 },
  { day: 'Wed', tickets: 15 },
  { day: 'Thu', tickets: 22 },
  { day: 'Fri', tickets: 28 },
  { day: 'Sat', tickets: 8 },
  { day: 'Sun', tickets: 5 },
];

const tickets = [
  { id: 1021, issue: "Projector malfunction in Hall C", location: "Building A, Floor 2", priority: "High", time: "2h ago", status: "Open" },
  { id: 1022, issue: "Network connectivity issues", location: "Library, 1st Floor", priority: "Critical", time: "3h ago", status: "In Progress" },
  { id: 1023, issue: "HVAC system making noise", location: "Room 402", priority: "Medium", time: "5h ago", status: "Open" },
  { id: 1024, issue: "Printer jam", location: "Staff Lounge", priority: "Low", time: "1d ago", status: "Open" },
];

const TechnicianDashboard = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Maintenance Queue</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Open Tickets</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">24</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
            <Wrench size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Resolved Today</h3>
            <p className="mt-2 text-3xl font-bold text-emerald-600">18</p>
          </div>
          <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
            <CheckCircle2 size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Avg Response</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">1.2h</p>
          </div>
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
            <Clock size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Critical Issues</h3>
            <p className="mt-2 text-3xl font-bold text-rose-600">2</p>
          </div>
          <div className="p-3 bg-rose-100 rounded-xl text-rose-600">
            <AlertOctagon size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-xl font-semibold text-slate-800">Recent Tickets</h2>
             <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="p-4 border border-slate-100 rounded-xl hover:border-indigo-100 hover:shadow-sm transition-all bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-slate-800">Ticket #{ticket.id}</p>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                        ${ticket.priority === 'Critical' ? 'bg-rose-100 text-rose-700' : 
                          ticket.priority === 'High' ? 'bg-amber-100 text-amber-700' : 
                          ticket.priority === 'Medium' ? 'bg-blue-100 text-blue-700' : 
                          'bg-slate-200 text-slate-700'}`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <p className="text-slate-800 font-medium">{ticket.issue}</p>
                    <p className="text-sm text-slate-500 mt-1">{ticket.location} • <span className="text-slate-400">{ticket.time}</span></p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                      <MoreVertical size={18} />
                    </button>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                      ${ticket.status === 'Open' ? 'bg-slate-200 text-slate-700' : 'bg-indigo-100 text-indigo-700'}`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Ticket Volume (This Week)</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="tickets" stroke="#4f46e5" strokeWidth={3} dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;
