import React from "react";

const BookingAnalytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Booking Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Bookings</p>
          <p className="text-4xl font-extrabold text-slate-800">1,284</p>
          <p className="text-xs text-emerald-500 font-semibold mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Most Popular Resource</p>
          <p className="text-2xl font-extrabold text-slate-800">Auditorium</p>
          <p className="text-xs text-slate-500 font-semibold mt-2">42 bookings this week</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Avg. Booking Duration</p>
          <p className="text-4xl font-extrabold text-slate-800">2.5<span className="text-2xl text-slate-400"> hrs</span></p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-80 flex items-center justify-center">
        <p className="text-slate-400 font-medium">Analytics Chart Mockup Placeholder</p>
      </div>
    </div>
  );
};

export default BookingAnalytics;
