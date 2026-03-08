import React from 'react';
import { BookOpen, Calendar, Bell, Library, CalendarDays, CreditCard, ChevronRight } from 'lucide-react';

const announcements = [
  { id: 1, title: "Mid-term Examination Schedule Released", date: "Today", isNew: true },
  { id: 2, title: "Library Hours Extended for Reading Week", date: "Yesterday", isNew: false },
  { id: 3, title: "Campus Career Fair Next Tuesday", date: "3 days ago", isNew: false },
];

const UserDashboard = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Student Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">My Assignments</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">4</p>
            <p className="text-xs text-slate-400 mt-1">Due this week</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
            <BookOpen size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Upcoming Classes</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">2</p>
            <p className="text-xs text-slate-400 mt-1">Scheduled for today</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <Calendar size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Library Due</h3>
            <p className="mt-2 text-3xl font-bold text-slate-800">1</p>
            <p className="text-xs text-rose-500 font-medium mt-1">Due tomorrow</p>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl text-rose-600">
            <Library size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Alerts</h3>
            <p className="mt-2 text-3xl font-bold text-amber-600">3</p>
            <p className="text-xs text-slate-400 mt-1">Unread notifications</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <Bell size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Recent Announcements</h2>
          <div className="space-y-4">
            {announcements.map((item) => (
              <div key={item.id} className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${item.isNew ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                    <Bell size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                      {item.title}
                      {item.isNew && <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase rounded-full">New</span>}
                    </h4>
                    <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
                </div>
                <ChevronRight className="text-slate-400" size={20} />
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            View All Announcements
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <h2 className="text-xl font-semibold text-slate-800 mb-6">Quick Actions</h2>
           <div className="space-y-3">
             <button className="w-full p-4 border border-slate-100 rounded-xl flex items-center gap-3 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all text-left group">
               <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-white transition-colors">
                 <CalendarDays size={20} />
               </div>
               <div>
                 <p className="font-semibold text-slate-800">Book a Room</p>
                 <p className="text-xs text-slate-500">Reserve campus facilities</p>
               </div>
             </button>

             <button className="w-full p-4 border border-slate-100 rounded-xl flex items-center gap-3 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all text-left group">
               <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-white transition-colors">
                 <BookOpen size={20} />
               </div>
               <div>
                 <p className="font-semibold text-slate-800">View Schedule</p>
                 <p className="text-xs text-slate-500">Check your timetable</p>
               </div>
             </button>

             <button className="w-full p-4 border border-slate-100 rounded-xl flex items-center gap-3 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all text-left group">
               <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-white transition-colors">
                 <CreditCard size={20} />
               </div>
               <div>
                 <p className="font-semibold text-slate-800">Pay Fees</p>
                 <p className="text-xs text-slate-500">Manage your tuition</p>
               </div>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
