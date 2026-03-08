import React from "react";

const MyBookings = () => {
  const mockBookings = [
    { id: "BKG-001", resource: "Conference Room A", date: "2026-03-10", time: "10:00 AM - 12:00 PM", status: "Confirmed" },
    { id: "BKG-002", resource: "Projector X1", date: "2026-03-12", time: "02:00 PM - 04:00 PM", status: "Pending" },
    { id: "BKG-003", resource: "Study Room 4B", date: "2026-03-15", time: "09:00 AM - 05:00 PM", status: "Confirmed" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Bookings</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Booking ID</th>
              <th className="p-4 font-semibold">Resource</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Time</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockBookings.map((booking) => (
              <tr key={booking.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4 text-slate-700 font-medium">{booking.id}</td>
                <td className="p-4 text-slate-600">{booking.resource}</td>
                <td className="p-4 text-slate-600">{booking.date}</td>
                <td className="p-4 text-slate-600">{booking.time}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    booking.status === "Confirmed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
